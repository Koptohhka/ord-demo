// import React, { useEffect, useState } from 'react';
// import { InputText } from 'primereact/inputtext';
// import { TabView, TabPanel } from 'primereact/tabview';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';

// import styles from './OrganizationInfo.module.css';
// import mapImage from "../../assets/img/completed-google-places-label.png";
// import heatmapImg from "../../assets/img/heatmap.jpg";
// import risksImg from "../../assets/img/risks.jpg";
// import controlsImg from "../../assets/img/controls.jpg";

// const coworkersData = [
//     { id: 1, name: 'Alice Johnson', role: 'Developer', email: 'alice.j@example.com' },
//     { id: 2, name: 'Bob Smith', role: 'Designer', email: 'bob.s@example.com' },
//     { id: 3, name: 'Carol White', role: 'Project Manager', email: 'carol.w@example.com' }
// ];

// export const OrganizationInfo = ({ selectedNode }) => {
//     return (
//         <div className={styles.columnWrapper}>
//             <div className={styles.column}>
//                 <div className={styles.field}>
//                     <span className={styles.fieldLabel}>Location:</span>
//                     <div className="card flex justify-content-center">
//                         <InputText className={styles.Input} value={orgName} onChange={(e) => setOrgName(e.target.value)} />
//                     </div>
//                 </div>
//                 <div className={styles.field}>
//                     <span className={styles.fieldLabel}>Logo:</span>
//                 </div>
//                 <div className={styles.field}>
//                     <span className={styles.fieldLabel}>Photo:</span>
//                 </div>
//                 <div className={styles.field}>
//                     <span className={styles.fieldLabel}>Location NACE code:</span>
//                     <div className="card flex justify-content-center">
//                         <InputText className={styles.Input} value={orgName} onChange={(e) => setOrgName(e.target.value)} />
//                     </div>
//                 </div>
//                 <div className={styles.field}>
//                     <span className={styles.fieldLabel}>Contact name:</span>
//                     <div className="card flex justify-content-center">
//                         <InputText className={styles.Input} value={orgName} onChange={(e) => setOrgName(e.target.value)} />
//                     </div>
//                 </div>
//                 <div className={styles.field}>
//                     <span className={styles.fieldLabel}>Contact person phone:</span>
//                     <div className="card flex justify-content-center">
//                         <InputText className={styles.Input} value={orgName} onChange={(e) => setOrgName(e.target.value)} />
//                     </div>
//                 </div>
//                 <div className={styles.field}>
//                     <span className={styles.fieldLabel}>Contact email:</span>
//                     <div className="card flex justify-content-center">
//                         <InputText className={styles.Input} value={orgName} onChange={(e) => setOrgName(e.target.value)} />
//                     </div>
//                 </div>
//             </div>
//             <div className={styles.column}>
//                 <span className={styles.fieldLabel}>Adress:</span>
//                 <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
//                     <div className={styles.field}>
//                         <span className={styles.fieldLabelSecondary}>Country:</span>
//                         <div className="card flex justify-content-center">
//                             <InputText className={styles.Input} value={orgGPSLat} onChange={(e) => setOrgGPSLat(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className={styles.field}>
//                         <span className={styles.fieldLabelSecondary}>Postal code:</span>
//                         <div className="card flex justify-content-center">
//                             <InputText className={styles.Input} value={orgGPSLon} onChange={(e) => setOrgGPSLon(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className={styles.field}>
//                         <span className={styles.fieldLabelSecondary}>City:</span>
//                         <div className="card flex justify-content-center">
//                             <InputText className={styles.Input} value={orgGPSLon} onChange={(e) => setOrgGPSLon(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className={styles.field}>
//                         <span className={styles.fieldLabelSecondary}>Street:</span>
//                         <div className="card flex justify-content-center">
//                             <InputText className={styles.Input} value={orgGPSLon} onChange={(e) => setOrgGPSLon(e.target.value)} />
//                         </div>
//                     </div>
//                 </div>
//                 <span className={styles.fieldLabel}>Main GPS:</span>
//                 <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
//                     <div className={styles.field}>
//                         <span className={styles.fieldLabelSecondary}>Latitude:</span>
//                         <div className="card flex justify-content-center">
//                             <InputText className={styles.Input} value={orgGPSLat} onChange={(e) => setOrgGPSLat(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className={styles.field}>
//                         <span className={styles.fieldLabelSecondary}>Longitude:</span>
//                         <div className="card flex justify-content-center">
//                             <InputText className={styles.Input} value={orgGPSLon} onChange={(e) => setOrgGPSLon(e.target.value)} />
//                         </div>
//                     </div>
//                 </div>
//                 <span className={styles.fieldLabel}>NATCAT GPS:</span>
//                 <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
//                     <div className={styles.field}>
//                         <span className={styles.fieldLabelSecondary}>Latitude:</span>
//                         <div className="card flex justify-content-center">
//                             <InputText className={styles.Input} value={orgGPSLat} onChange={(e) => setOrgGPSLat(e.target.value)} />
//                         </div>
//                     </div>
//                     <div className={styles.field}>
//                         <span className={styles.fieldLabelSecondary}>Longitude:</span>
//                         <div className="card flex justify-content-center">
//                             <InputText className={styles.Input} value={orgGPSLon} onChange={(e) => setOrgGPSLon(e.target.value)} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// };
