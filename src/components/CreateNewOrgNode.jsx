import { Dialog, } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import React, {useState} from 'react';
import {Button} from 'primereact/button';


export const CreateNewOrgNode = ({isModalVisible, setModalVisible} = props) => {
  const [newNodeName, setNewNodeName] = useState('');

  const handleAddNewOrgNode = () => {
    if (!selectedNode || !newNodeName.trim()) return;

    const newNode = {
      key: `node-${Date.now()}`,
      data: {
        name: newNodeName.trim(),
        address: {city: 'Wien', country: 'Austria', street: 'Albertinapl. 1', postalCode: '1010'},
        contact: { name: '', phone: '+431'},
        gps: { lat: 48.20546129371167, lon: 16.3709895098149 }
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
  )
}