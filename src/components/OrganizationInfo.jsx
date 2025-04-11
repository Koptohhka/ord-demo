import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { TabView, TabPanel } from 'primereact/tabview';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import styles from './OrganizationInfo.module.css';
import mapImage from "../assets/img/completed-google-places-label.png";

const coworkersData = [
  { id: 1, name: 'Alice Johnson', role: 'Developer', email: 'alice.j@example.com' },
  { id: 2, name: 'Bob Smith', role: 'Designer', email: 'bob.s@example.com' },
  { id: 3, name: 'Carol White', role: 'Project Manager', email: 'carol.w@example.com' }
];

export const OrganizationInfo = ({ selectedNode }) => {

  if (!selectedNode) {
    return null;
  }

  const { data } = selectedNode;

  if (data.type === "Assessment") {
    const { author, dates, status, type } = data;

    return (
      <div className={styles.container}>
        <section style={{
          width: "100%"
        }} className={styles.section}>
          <div className={styles.field}>
            <span className={styles.fieldLabel}>Type:</span>
            <span>{type}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.fieldLabel}>Author:</span>
            <span>{author}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.fieldLabel}>Status:</span>
            <span>{status}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.fieldLabel}>Start:</span>
            <span>{`${dates.startDate}`}</span>
          </div>
          <div className={styles.field}>
            <span className={styles.fieldLabel}>Finish:</span>
            <span>{`${dates.endDate}`}</span>
          </div>
        </section>
      </div>
    )
  }

  const [orgName, setOrgName] = useState(data.name);
  const [orgAddressCity, setOrgAddressCity] = useState(data.address.city);
  const [orgAddressCountry, setOrgAddressCountry] = useState(data.address.country);
  const [orgAddressStreet, setOrgAddressStreet] = useState(data.address.street);
  const [orgAddressPostalCode, setOrgAddressPostalCode] = useState(data.address.postalCode);
  const [orgContactName, setOrgContactName] = useState(data.contact.name);
  const [orgContactPhone, setOrgContactPhone] = useState(data.contact.phone);
  const [orgGPSLat, setOrgGPSLat] = useState(data.gps.lat);
  const [orgGPSLon, setOrgGPSLon] = useState(data.gps.lon);

  useEffect(() => {
    if (!selectedNode) {
      return null;
    }

    if (selectedNode.type === "Assessment") {
      return null;
    }

    const { data } = selectedNode;

    setOrgName(data.name);
    setOrgAddressCity(data.address.city);
    setOrgAddressCountry(data.address.country);
    setOrgAddressStreet(data.address.street);
    setOrgAddressPostalCode(data.address.postalCode);
    setOrgContactName(data.contact.name);
    setOrgContactPhone(data.contact.phone);
    setOrgGPSLat(data.gps.lat);
    setOrgGPSLon(data.gps.lon);
  }, [selectedNode]);

  return (
    <div className={styles.container}>
      <TabView panelContainerStyle={{
        padding: "0px"
      }} style={{
        width: "100%",
        padding: "0px"
      }}>
        <TabPanel headerClassName={styles.sectionTitle} header="General">
          <section className={styles.section}>
            <div className={styles.field}>
              <span className={styles.fieldLabel}>Name:</span>
              <div className="card flex justify-content-center">
                <InputText value={orgName} onChange={(e) => setOrgName(e.target.value)} />
              </div>
            </div>

            <span className={styles.fieldLabel}>Address:</span>
            <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
              <div className={styles.field}>
                <span className={styles.fieldLabelSecondary}>Street:</span>
                <div className="card flex justify-content-center">
                  <InputText value={orgAddressStreet} onChange={(e) => setOrgAddressStreet(e.target.value)} />
                </div>
              </div>
              <div className={styles.field}>
                <span className={styles.fieldLabelSecondary}>Postal code:</span>
                <div className="card flex justify-content-center">
                  <InputText value={orgAddressPostalCode} onChange={(e) => setOrgAddressPostalCode(e.target.value)} />
                </div>
              </div>
              <div className={styles.field}>
                <span className={styles.fieldLabelSecondary}>City:</span>
                <div className="card flex justify-content-center">
                  <InputText value={orgAddressCity} onChange={(e) => setOrgAddressCity(e.target.value)} />
                </div>
              </div>
              <div className={styles.field}>
                <span className={styles.fieldLabelSecondary}>Country:</span>
                <div className="card flex justify-content-center">
                  <InputText value={orgAddressCountry} onChange={(e) => setOrgAddressCountry(e.target.value)} />
                </div>
              </div>
            </div>

            <div className={styles.field}>
              <span className={styles.fieldLabel}>Contact name:</span>
              <div className="card flex justify-content-center">
                <InputText value={orgContactName} onChange={(e) => setOrgContactName(e.target.value)} />
              </div>
            </div>

            <div className={styles.field}>
              <span className={styles.fieldLabel}>Contact phone:</span>
              <div className="card flex justify-content-center">
                <InputText value={orgContactPhone} onChange={(e) => setOrgContactPhone(e.target.value)} />
              </div>
            </div>

            <span className={styles.fieldLabel}>Coordinates:</span>
            <div style={{ paddingLeft: "20px", paddingTop: "20px" }}>
              <div className={styles.field}>
                <span className={styles.fieldLabelSecondary}>Latitude:</span>
                <div className="card flex justify-content-center">
                  <InputText value={orgGPSLat} onChange={(e) => setOrgGPSLat(e.target.value)} />
                </div>
              </div>
              <div className={styles.field}>
                <span className={styles.fieldLabelSecondary}>Longitude:</span>
                <div className="card flex justify-content-center">
                  <InputText value={orgGPSLon} onChange={(e) => setOrgGPSLon(e.target.value)} />
                </div>
              </div>
            </div>
          </section>
          <img className={styles.mapImage} src={mapImage} alt="google-maps" />

        </TabPanel>
        <TabPanel style={{
          padding: "0px",
          margin: "0px"
        }} headerClassName={styles.sectionTitle} header="Coworkers">
          <DataTable value={data.coWorkers ? data.coWorkers : []} responsiveLayout="scroll">
            <Column field="name" header="Name" body={(item) => {
              return `${item.firstName} ${item.lastName}`
            }} />
            <Column field="role" header="Role" />
            <Column field="email" header="Email" />
          </DataTable>
        </TabPanel>
      </TabView>
    </div>
  );
};
