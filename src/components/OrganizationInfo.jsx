import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';

import styles from './OrganizationInfo.module.css';
import mapImage from "../assets/img/completed-google-places-label.png";

export const OrganizationInfo = ({ selectedNode }) => {
  if (!selectedNode) {
    return null;
  }
  const { data } = selectedNode;
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
      <section className={styles.section}>
        <div className={styles.TitleContainer}>
          <h2 className={styles.sectionTitle}>General</h2>
          <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDisabled}`}>Coworkers</h2>
        </div>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>Name:</span>
          <div className="card flex justify-content-center">
            <InputText value={orgName} onChange={(e) => setOrgName(e.target.value)} />
          </div>
        </div>

        <span className={styles.fieldLabel}>Address:</span>
        <div style={{
          paddingLeft: "20px",
          paddingTop: "20px"
        }}>
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
        <div style={{
          paddingLeft: "20px",
          paddingTop: "20px"
        }}>
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

        {/* <div className={styles.field}>
          <span className={styles.fieldLabel}>Latitude:</span>
          <div className="card flex justify-content-center">
            <InputText value={orgGPSLat} onChange={(e) => setOrgGPSLat(e.target.value)} />
          </div>
        </div>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>Longitude:</span>
          <div className="card flex justify-content-center">
            <InputText value={orgGPSLon} onChange={(e) => setOrgGPSLon(e.target.value)} />
          </div>
        </div> */}
      </section>
      <img className={styles.mapImage} src={mapImage} alt="google-maps" />
    </div>
  );
};
