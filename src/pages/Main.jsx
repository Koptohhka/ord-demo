import React, { useState, useEffect } from 'react';
import { TreeTableComponent, OrganizationInfo } from "../components";
import { TREE_DATA } from '../constants/tableData';
import styles from "./Main.module.css";

export const Main = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  return (
    <div className={styles.Main}>
      <div className={styles.MainFlex}>
        <div className={styles.SideBar}>
          <TreeTableComponent selectedNode={selectedNode} setSelectedNode={setSelectedNode} treeData={TREE_DATA} />
        </div>
        <div className={styles.RightPane}>
          <OrganizationInfo selectedNode={selectedNode} />
        </div>
      </div>
    </div>
  );
};

