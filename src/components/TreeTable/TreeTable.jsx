import React, { useState, useRef } from 'react';
import { Tree } from 'primereact/tree';
import { OverlayPanel } from 'primereact/overlaypanel';
import styles from './TreeTable.module.css';
import { CreateNewOrgNode } from "./components/CreateNewOrgNode";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { ICONS } from "./icons";

export const TreeTableComponent = (props) => {
  const [nodes, setNodes] = useState(props.treeData);
  const [modalVisible, setModalVisible] = useState(false);

  const opRef = useRef(null);

  const togglerIcon = (node, options) => {
    if (!node.children || (node.children && node.children.length === 0)) {
      return null;
    }

    return <div className={styles.Toggler} onClick={options.onClick}>
      {
        !options.expanded ? (
          <i className="pi pi-chevron-right" />
        ) : (
          <i className="pi pi-chevron-down" />
        )
      }
    </div>;
  };

  const nodeTemplate = (node, options) => {
    console.log("Уровень вложенности:", node);

    let label = node.data.name;

    if (node.data.type === "Assessment" || node.data.type === "Risk-transfer") {
      label = node.data.type;
    }

    return (
      <div onClick={() => {
        if (node.data.type === "Risk-transfer") return;
        props.setSelectedNode(node)
      }} className={styles.RowFlex}>
        <div style={{
          width: "25px",
          height: "25px",
          minWidth: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          {ICONS[node.data.type]}
        </div>
        <span className={styles.Row}>
          {label}
          {node.data.tags ? (
            <span style={{ color: "#213b7b", fontWeight: "bold" }}>
              {node.data.tags.map((tag, i) => {
                const label = tag.label.toUpperCase();
                return (
                  <React.Fragment key={i}>
                    {i === 0 && <span>{"("}</span>}
                    <span style={{ color: tag.color }}>{label}</span>
                    {i < node.data.tags.length - 1 && <span>,</span>}
                    {i === node.data.tags.length - 1 && <span>{")"}</span>}
                  </React.Fragment>
                );
              })}
            </span>
          ) : null}
        </span>
        <i
          className={`pi pi-ellipsis-v ${styles.ActionIcon}`}
          style={{
            cursor: 'pointer',
            padding: '0px',
          }}
          onClick={(e) => handleMenuClick(e, node)}
        />
      </div>
    );
  };

  const onDragDrop = (event) => {
    setNodes(event.value);
  };

  const getOptionsForOverlay = () => {
    const closeOptionsHandler = () => opRef.current.toggle(false)

    if (!props.selectedNode) {
      return null;
    }

    if (props.selectedNode.data.type !== "Assessment") {
      return (
        <div onClick={closeOptionsHandler} className={styles.overlayOption}>
          + Create new org-node
        </div>
      )
    }


    return (
      <>
        {props.selectedNode.data.status == "Open" ? (
          <div onClick={closeOptionsHandler} className={styles.overlayOption}>
            Edit
          </div>
        ) : null}
        <div onClick={closeOptionsHandler} className={styles.overlayOption}>
          View
        </div>
        <div onClick={closeOptionsHandler} className={styles.overlayOption}>
          History
        </div>
        {props.selectedNode.data.status == "Open" && (
          <div onClick={closeOptionsHandler} className={styles.overlayOption}>
            Delete
          </div>
        )}
        <div onClick={closeOptionsHandler} className={styles.overlayOption}>
          Copy assesment
        </div>
        <div onClick={closeOptionsHandler} className={styles.overlayOption}>
          RVM Report
        </div>
        <div onClick={closeOptionsHandler} className={styles.overlayOption}>
          Assessment Report
        </div>
      </>
    )
  }

  const handleMenuClick = (event, node) => {
    opRef.current.toggle(event);
  };

  return (
    <>
      <OverlayPanel className={styles.customOverlay} ref={opRef}>
        <div
          style={{
            cursor: 'pointer'
          }}
          onClick={() => setModalVisible(true)}
        >
          {getOptionsForOverlay()}
        </div>
      </OverlayPanel>
      <CreateNewOrgNode nodes={nodes} selectedNode={props.selectedNode} setNodes={setNodes} setModalVisible={setModalVisible} isModalVisible={modalVisible} />
      <Tree
        style={{
          border: "0px",
          paddingLeft: "10px"
        }}
        selectionMode="single"
        className={styles.Tree}
        value={nodes}
        nodeTemplate={nodeTemplate}
        dragdropScope="demo"
        onDragDrop={onDragDrop}
        togglerTemplate={togglerIcon}
      />
    </>
  );
};



// import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
// import { Tree } from 'primereact/tree';
// import { TreeTable } from 'primereact/treetable';
// import { Column } from 'primereact/column';
// import { OverlayPanel } from 'primereact/overlaypanel';
// import { CreateNewOrgNode } from './CreateNewOrgNode';

// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';

// import styles from './TreeTable.module.css';

// export const TreeTableComponent = (props) => {
//   const [nodes] = useState(props.treeData);
//   const [searchValue, setSearchValue] = useState('');
//   const [expandedKeys, setExpandedKeys] = useState({});
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [selectedNode, setSelectedNode] = useState(null);
//   const [selectedNodeKey, setSelectedNodeKey] = useState(null);

//   const opRef = useRef(null);

//   useEffect(() => {
//     // localStorage.setItem('treeData', JSON.stringify(nodes));
//   }, [nodes]);

//   useLayoutEffect(() => {
//     expandAll();
//   }, []);

//   const handleMenuClick = (event, node) => {
//     setSelectedNode(node);
//     opRef.current.toggle(event);
//   };

//   const filterNodesWithLevel = (nodeList, query, level = 0) => {
//     if (!query) {
//       return nodeList.map((node) => {
//         const { children } = node;
//         return {
//           ...node,
//           level,
//           children: children ? filterNodesWithLevel(children, query, level + 1) : undefined
//         };
//       });
//     }

//     return nodeList
//       .map((node) => {
//         const { data, children } = node;
//         const nameMatches = data.name.toLowerCase().includes(query.toLowerCase());
//         let filteredChildren = [];
//         if (children) {
//           filteredChildren = filterNodesWithLevel(children, query, level + 1);
//         }
//         if (nameMatches || (filteredChildren && filteredChildren.length > 0)) {
//           return {
//             ...node,
//             level,
//             children: filteredChildren
//           };
//         }
//         return null;
//       })
//       .filter((f) => f !== null);
//   };

//   const filteredData = filterNodesWithLevel(nodes, searchValue);

//   const toggleNode = (key) => {
//     const newExpandedKeys = { ...expandedKeys };
//     if (newExpandedKeys[key]) {
//       delete newExpandedKeys[key];
//     } else {
//       newExpandedKeys[key] = true;
//     }
//     setExpandedKeys(newExpandedKeys);
//   };

//   const expandFirstLevel = () => {
//     const firstLevelKeys = nodes.map(node => node.key);
//     const allExpanded = firstLevelKeys.every(key => expandedKeys[key]);

//     if (allExpanded) {
//       const newExpandedKeys = { ...expandedKeys };
//       firstLevelKeys.forEach(key => delete newExpandedKeys[key]);
//       setExpandedKeys(newExpandedKeys);
//     } else {
//       const newExpandedKeys = { ...expandedKeys };
//       firstLevelKeys.forEach(key => newExpandedKeys[key] = true);
//       setExpandedKeys(newExpandedKeys);
//     }
//   };

//   const expandAll = () => {
//     const collectAllKeys = (nodes) => {
//       const keys = {};
//       const traverse = (list) => {
//         list.forEach((node) => {
//           keys[node.key] = true;
//           if (node.children) {
//             traverse(node.children);
//           }
//         });
//       };
//       traverse(nodes);
//       return keys;
//     };

//     const allKeys = collectAllKeys(nodes);
//     const allKeysArray = Object.keys(allKeys);
//     const isAllAlreadyExpanded = allKeysArray.every(key => expandedKeys[key]);

//     if (isAllAlreadyExpanded) {
//       setExpandedKeys({});
//     } else {
//       setExpandedKeys(allKeys);
//     }
//   };

//   const cellTemplate = (node) => {
//     const level = node.level || 0;
//     const isExpanded = expandedKeys[node.key] || false;
//     const hasChildren = node.children && node.children.length > 0;

//     let paddingLeft = `${level * 1.5}rem`;

//     if (hasChildren) {
//       paddingLeft = `${level * 1}rem`;
//     }

//     return (
//       <div
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           paddingLeft: paddingLeft,
//           border: 'none',
//           cursor: hasChildren ? 'pointer' : 'default',
//         }}
//       >
//         <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => hasChildren && toggleNode(node.key)}>
//           {hasChildren && (
//             <span style={{ marginRight: '0.5rem' }}>
//               {isExpanded ? <i className="pi pi-chevron-down" /> : <i className="pi pi-chevron-right" />}
//             </span>
//           )}
//           <span>{node.data.name || node.data.type}</span>
//         </div>
//       </div>
//     );
//   };

//   const secondCellTemplate = (node) => {
//     if (!node.data.address && node.data.author) {
//       return node.data.author;
//     }

//     return `${node.data.address.country}, ${node.data.address.city}, ${node.data.address.street}, ${node.data.address.postalCode}`;
//   }

//   const thirdCellTemplate = (node) => {
//     if (!node.data.gps && node.data.status) {
//       return node.data.status;
//     }

//     return `${node.data.contact.name}, ${node.data.contact.phone}`
//   }

//   const fourthCellTemplate = (node) => {
//     if (!node.data.contact && node.data.dates) {
//       return `${node.data.dates.startDate}/${node.data.dates.endDate}`;
//     }

//     return `${node.data.gps.lat}, ${node.data.gps.lon}`;
//   }

//   const actionTemplate = (node) => {

//     return (
// <i
//   className="pi pi-ellipsis-v"
//   style={{ cursor: 'pointer', padding: '0 0.5rem' }}
//   onClick={(e) => handleMenuClick(e, node)}
// />
//     )
//   }

//   const customHeader = (
//     <div className={styles.expandCaptionWrapper}>
//       <div className={styles.expandCaption} onClick={expandFirstLevel}>
//         Expand 1st level
//       </div>
//       <div className={styles.expandCaption} onClick={expandAll}>
//         Expand all
//       </div>
//     </div>
//   );

// const getOptionsForOverlay = () => {
//   const closeOptionsHandler = () => opRef.current.toggle(false)

//   if (!selectedNode) {
//     return null;
//   }

//   if (selectedNode.data.type === "Location") {
//     return (
//       <div onClick={closeOptionsHandler} className={styles.overlayOption}>
//         + Create new org-node
//       </div>
//     )
//   }


//     return (
//       <>
//         <div onClick={closeOptionsHandler} className={styles.overlayOption}>
//           print report
//         </div>
//         {selectedNode.data.status == "Open" ? (
//           <div onClick={closeOptionsHandler} className={styles.overlayOption}>open</div>
//         ) : null}
//         <div onClick={closeOptionsHandler} className={styles.overlayOption}>view</div>
//       </>
//     )
//   }

//   const nodeTemplate = (node, options) => {


//     return (
//       <div className="custom-node">
//         {node.children && (
//           <span className="custom-toggler" onClick={() => {
//             toggleNode(node.key);
//             options.onTogglerClick();
//           }}>
//             {/* {node.expanded ? (
//               <i className="pi pi-chevron-down" />
//             ) : (
//               <i className="pi pi-chevron-right" />
//             )} */}
//           </span>
//         )}
//         <span>{node.data.name}</span>
//       </div>
//     );
//   };

//   return (
//     <div style={{
//       width: "100%"
//     }}>
//       <CreateNewOrgNode visible={isModalVisible} />
//       <Tree
//         nodeTemplate={nodeTemplate}
//         value={nodes}
//         onToggle={(e) => setExpandedKeys(e.value)}
//         togglerTemplate={(node, options) => {
//           const level = node.level || 0;
//           const isExpanded = expandedKeys[node.key] || false;
//           const hasChildren = node.children && node.children.length > 0;

//           console.log(node, options, "2222")
//           return <div onClick={options.onClick}>
//             {
//               isExpanded ? (
//                 <i className="pi pi-chevron-down" />
//               ) : (
//                 <i className="pi pi-chevron-right" />
//               )
//             }
//           </div>
//         }}
//       />
//       {/* <TreeTable
//         value={filteredData}
//         expandedKeys={expandedKeys}
//         onToggle={(e) => setExpandedKeys(e.value)}
//         onRowClick={(e) => {
//           console.log(e.node)
//           if (e.node.data.type === "Risk-transfer") {
//             return;
//           }
//           props.setSelectedNode(e.node)
//         }}
//         tableStyle={{ minWidth: '100%' }}
//         rowClassName={(e) => {
//           if (props.selectedNode && e.key === props.selectedNode.key) {
//             return styles.rowSelected;
//           }

//           return styles.row;
//         }}
//       >
//         <Column
//           field="name"
//           header={customHeader}
//           body={cellTemplate}
//           style={{ width: "25%" }}
//         />
//         <Column
//           header="Address"
//           body={secondCellTemplate}
//           style={{ width: '25%' }}
//         />
//         <Column
//           header="Contact"
//           body={thirdCellTemplate}
//           style={{ width: '20%' }}
//         />
//         <Column
//           header="Coordinates"
//           body={fourthCellTemplate}
//           style={{ width: '15%' }}
//         />
//         <Column style={{
//           width: "5%"
//         }} body={actionTemplate} />
//       </TreeTable> */}
// <OverlayPanel className={styles.customOverlay} ref={opRef}>
//   <div
//     style={{
//       cursor: 'pointer'
//     }}
//     onClick={() => setModalVisible(true)}
//   >
//     {getOptionsForOverlay()}
//   </div>
// </OverlayPanel>

//     </div>
//   );
// };
