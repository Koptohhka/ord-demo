import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import styles from './TreeTable.module.css';

// TMP!!!
// Генераторы случайных данных
const generateRandomAddress = () => {
  const streets = ['Main St', 'Park Ave', 'Elm St', 'Oak Rd', 'Pine St'];
  const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  return `${Math.floor(Math.random() * 1000)} ${streets[Math.floor(Math.random() * streets.length)]}, ${cities[Math.floor(Math.random() * cities.length)]}`;
};

const generateRandomLatitude = () => (Math.random() * 180 - 90).toFixed(6);
const generateRandomLongitude = () => (Math.random() * 360 - 180).toFixed(6);
const generateRandomContactPhone = () => `+1${Math.floor(Math.random() * 1000000000).toString().padStart(10, '0')}`;

// Обработка данных дерева
const enrichNodeWithRandomData = (node) => {
  if (!node.data.address) node.data.address = generateRandomAddress();
  if (!node.data.latitude) node.data.latitude = generateRandomLatitude();
  if (!node.data.longitude) node.data.longitude = generateRandomLongitude();
  if (!node.data.contactPhone) node.data.contactPhone = generateRandomContactPhone();
  if (node.children) node.children.forEach(enrichNodeWithRandomData);
};

const processTreeData = (treeData) => {
  const clonedData = JSON.parse(JSON.stringify(treeData));
  clonedData.forEach(enrichNodeWithRandomData);
  return clonedData;
};
// TMP!!!

export const TreeTableComponent = (props) => {
  const [nodes, setNodes] = useState(() => {
    try {
      const savedData = localStorage.getItem('treeData');
      if (savedData) return JSON.parse(savedData);
    } catch (e) {
      console.error('Ошибка загрузки из localStorage:', e);
    }

    return props.treeData;
  });
  const [searchValue, setSearchValue] = useState('');
  const [expandedKeys, setExpandedKeys] = useState({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [newNodeName, setNewNodeName] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [newNodeData, setNewNodeData] = useState(null);

  const defaultBodyTemplate = (field) => (node) => node.data[field];
  const gpsBodyTemplate = (field) => (node) => {
    return (
      <div style={{
        width: "100%",
        display: "flex",
        alignItems: "center"
      }}>
        {node.data[field]}
        <i
          className="pi pi-ellipsis-v"
          style={{ cursor: 'pointer', padding: '0 0.5rem', display: "block" }}
          onClick={(e) => handleMenuClick(e, node)}
        />
      </div>
    )
  };


  const opRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('treeData', JSON.stringify(nodes));
  }, [nodes]);

  useLayoutEffect(() => {
    expandAll();
  }, []);

  const handleMenuClick = (event, node) => {
    setSelectedNode(node);
    opRef.current.toggle(event);
  };

  const handleAddNewOrgNode = () => {
    if (!selectedNode || !newNodeName.trim()) return;

    const newNode = {
      key: `node-${Date.now()}`,
      data: {
        name: newNodeName.trim(),
        address: generateRandomAddress(),
        "Contest name": generateRandomLatitude(),
        "Contest phone": generateRandomLongitude(),
        "Latitude, Longitude": generateRandomContactPhone()
      },
      children: []
    };

    const updateTree = (nodes) => {
      return nodes.map(node => {
        if (node.key === selectedNode.key) {
          return {
            ...node,
            children: [...(node.children || []), newNode]
          };
        }
        if (node.children) {
          return {
            ...node,
            children: updateTree(node.children)
          };
        }
        return node;
      });
    };

    const newNodes = updateTree(nodes);
    setNodes(newNodes);
    setExpandedKeys(prev => ({ ...prev, [selectedNode.key]: true }));

    setModalVisible(false);
    setNewNodeName('');
  };


  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filterNodesWithLevel = (nodeList, query, level = 0) => {
    if (!query) {
      return nodeList.map((node) => {
        const { children } = node;
        return {
          ...node,
          level,
          children: children ? filterNodesWithLevel(children, query, level + 1) : undefined
        };
      });
    }

    return nodeList
      .map((node) => {
        const { data, children } = node;
        const nameMatches = data.name.toLowerCase().includes(query.toLowerCase());
        let filteredChildren = [];
        if (children) {
          filteredChildren = filterNodesWithLevel(children, query, level + 1);
        }
        if (nameMatches || (filteredChildren && filteredChildren.length > 0)) {
          return {
            ...node,
            level,
            children: filteredChildren
          };
        }
        return null;
      })
      .filter((f) => f !== null);
  };

  const filteredData = filterNodesWithLevel(nodes, searchValue);

  const toggleNode = (key) => {
    const newExpandedKeys = { ...expandedKeys };
    if (newExpandedKeys[key]) {
      delete newExpandedKeys[key];
    } else {
      newExpandedKeys[key] = true;
    }
    setExpandedKeys(newExpandedKeys);
  };

  const expandFirstLevel = () => {
    const firstLevelKeys = nodes.map(node => node.key);
    const allExpanded = firstLevelKeys.every(key => expandedKeys[key]);

    if (allExpanded) {
      const newExpandedKeys = { ...expandedKeys };
      firstLevelKeys.forEach(key => delete newExpandedKeys[key]);
      setExpandedKeys(newExpandedKeys);
    } else {
      const newExpandedKeys = { ...expandedKeys };
      firstLevelKeys.forEach(key => newExpandedKeys[key] = true);
      setExpandedKeys(newExpandedKeys);
    }
  };

  const expandAll = () => {
    const collectAllKeys = (nodes) => {
      const keys = {};
      const traverse = (list) => {
        list.forEach((node) => {
          keys[node.key] = true;
          if (node.children) {
            traverse(node.children);
          }
        });
      };
      traverse(nodes);
      return keys;
    };

    const allKeys = collectAllKeys(nodes);
    const allKeysArray = Object.keys(allKeys);
    const isAllAlreadyExpanded = allKeysArray.every(key => expandedKeys[key]);

    if (isAllAlreadyExpanded) {
      setExpandedKeys({});
    } else {
      setExpandedKeys(allKeys);
    }
  };

  const cellTemplate = (node) => {
    const level = node.level || 0;
    const isExpanded = expandedKeys[node.key] || false;
    const hasChildren = node.children && node.children.length > 0;

    let paddingLeft = `${level * 1.5}rem`;

    if (hasChildren) {
      paddingLeft = `${level * 1}rem`;
    }

    const clickHandler = () => props.setSelectedNode(node);

    return (
      <div
        onClick={clickHandler}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: paddingLeft,
          border: 'none',
          cursor: hasChildren ? 'pointer' : 'default',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => hasChildren && toggleNode(node.key)}>
          {hasChildren && (
            <span style={{ marginRight: '0.5rem' }}>
              {isExpanded ? <i className="pi pi-chevron-down" /> : <i className="pi pi-chevron-right" />}
            </span>
          )}
          <span>{node.data.name}</span>
        </div>
      </div>
    );
  };

  const customHeader = (
    <div className={styles.expandCaptionWrapper}>
      <div className={styles.expandCaption} onClick={expandFirstLevel}>
        Expand 1st level
      </div>
      <div className={styles.expandCaption} onClick={expandAll}>
        Expand all
      </div>
    </div>
  );

  const modalFooter = (
    <div>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => {
          setModalVisible(false);
          setNewNodeName('');
        }}
        className="p-button-text"
      />
      <Button
        className="p-button-text"
        label="Create"
        icon="pi pi-check"
        onClick={handleAddNewOrgNode}
        autoFocus
        disabled={!newNodeName.trim()}
      />
    </div>
  );

  return (
    <div className={styles.treePanel}>
      <Dialog
        header="Create New Node"
        visible={isModalVisible}
        style={{ width: '400px' }}
        footer={modalFooter}
        onHide={() => {
          setModalVisible(false);
          setNewNodeName('');
        }}
        modal
      >
        <div className="p-field">
          <label htmlFor="nodeName" className="p-d-block">
            Node Name
          </label>
          <InputText
            id="nodeName"
            value={newNodeName}
            onChange={(e) => setNewNodeName(e.target.value)}
            autoFocus
            className="p-d-block"
            style={{ width: '100%' }}
            onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
          />
        </div>
        <div className="p-field">
          <label htmlFor="adressName" className="p-d-block">
            Adress
          </label>
          <InputText
            id="adressName"
            value={newNodeName}
            onChange={(e) => setNewNodeName(e.target.value)}
            autoFocus
            className="p-d-block"
            style={{ width: '100%' }}
            onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
          />
        </div>
        <div className="p-field">
          <label htmlFor="adressName" className="p-d-block">
            Contest Name
          </label>
          <InputText
            id="ContestName"
            value={newNodeName}
            onChange={(e) => setNewNodeName(e.target.value)}
            autoFocus
            className="p-d-block"
            style={{ width: '100%' }}
            onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
          />
        </div>
        <div className="p-field">
          <label htmlFor="ContestPhone" className="p-d-block">
            Contest Phone
          </label>
          <InputText
            id="ContestPhone"
            value={newNodeName}
            onChange={(e) => setNewNodeName(e.target.value)}
            autoFocus
            className="p-d-block"
            style={{ width: '100%' }}
            onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
          />
        </div>
        <div className="p-field">
          <label htmlFor="GPSName" className="p-d-block">
            GPS
          </label>
          <InputText
            id="GPSName"
            value={newNodeName}
            onChange={(e) => setNewNodeName(e.target.value)}
            autoFocus
            className="p-d-block"
            style={{ width: '100%' }}
            onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
          />
        </div>
      </Dialog>
      <TreeTable
        // selectionMode="single"
        value={filteredData}
        expandedKeys={expandedKeys}
        onToggle={(e) => setExpandedKeys(e.value)}
        className={styles.treetableCustom}
        tableStyle={{ minWidth: '100%' }}
      >
        <Column
          field="name"
          header={customHeader}
          body={cellTemplate}
          style={{ width: "25%" }}
        />
        <Column
          header="Address"
          body={defaultBodyTemplate('address')}
          style={{ width: '25%' }}
        />
        <Column
          header="Contest name"
          body={defaultBodyTemplate('Contest name')}
          style={{ width: '15%' }}
        />
        <Column
          header="Contest phone"
          body={defaultBodyTemplate('Contest phone')}
          style={{ width: '15%' }}
        />
        <Column
          header="Latitude, Longitude"
          body={gpsBodyTemplate("Latitude, Longitude")}
          style={{ width: '15%' }}
        />
      </TreeTable>
      <OverlayPanel className={styles.customOverlay} ref={opRef}>
        <div
          style={{
            cursor: 'pointer'
          }}
          onClick={() => setModalVisible(true)}
        >
          + Create new org-node
        </div>
      </OverlayPanel>
    </div>
  );
};
