import React, { useState, useEffect } from 'react';
import { TreeTableComponent } from "../components/TreeTable";
import { TREE_DATA } from '../constants/tableData';
import { OrganizationInfo } from "../components/OrganizationInfo";
import styles from "./Main.module.css";

export const Main = () => {

  return (
    <div className={styles.Main}>
      <div className={styles.MainFlex}>
        <div className={styles.SideBar}>
          <div className={styles.TreeWrapper}>
            <TreeTableComponent treeData={TREE_DATA} />
            <TreeTableComponent treeData={TREE_DATA} />
            <TreeTableComponent treeData={TREE_DATA} />
          </div>
        </div>
        <div className={styles.RightPane}>
          <OrganizationInfo />
        </div>
      </div>
    </div>
  );
};

