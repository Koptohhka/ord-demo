import styles from './OrganizationInfo.module.css';

export const OrganizationInfo = () => {
  const organizationData = {
    general: {
      name: 'AVA',
      logo: '',
      address: {
        street: 'osiside 1tarcensko',
        postalCode: '84-200',
        city: 'Welperowo',
        country: 'Poland'
      },
      contest: {
        name: 'Team member/slips',
        phone: 'Mop Sorellino',
        email: '@Ryjr-0'
      },
      gps: '@Ryjr-0',
      coordinates: {
        lat: 54.603,
        lng: 18.2245
      }
    },
    metadata: {
      nace: '',
      subordinateNodes: '?locations',
      level: '1..n',
      nodeType: 'Org-node-type',
      levelType: 'Level-Type (standardized name...)'
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>General</h2>
        
        <div className={styles.field}>
          <span className={styles.fieldLabel}>Name:</span>
          <span className={styles.fieldValue}>{organizationData.general.name}</span>
        </div>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>Address:</span>
          <div className={styles.nestedField}>
            <div>Street: {organizationData.general.address.street}</div>
            <div>Postal code: {organizationData.general.address.postalCode}</div>
            <div>City: {organizationData.general.address.city}</div>
            <div>Country: {organizationData.general.address.country}</div>
          </div>
        </div>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>Contest name:</span>
          <span className={styles.fieldValue}>{organizationData.general.contest.name}</span>
        </div>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>Contest phone:</span>
          <span className={styles.fieldValue}>{organizationData.general.contest.phone}</span>
        </div>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>GPS:</span>
          <span className={styles.fieldValue}>{organizationData.general.gps}</span>
        </div>

        <div className={styles.coordinates}>
          <div className={styles.coordItem}>
            Latitude: {organizationData.general.coordinates.lat}
          </div>
          <div className={styles.coordItem}>
            Longitude: {organizationData.general.coordinates.lng}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Metadata</h2>
        
        <div className={styles.metadataGrid}>
          <div className={styles.metadataItem}>
            <span>NACE:</span>
            <span>{organizationData.metadata.nace || '-'}</span>
          </div>
          <div className={styles.metadataItem}>
            <span>Subordinate org-nodes:</span>
            <span>{organizationData.metadata.subordinateNodes}</span>
          </div>
          <div className={styles.metadataItem}>
            <span>Level:</span>
            <span>{organizationData.metadata.level}</span>
          </div>
          <div className={styles.metadataItem}>
            <span>Org-node-type:</span>
            <span>{organizationData.metadata.nodeType}</span>
          </div>
          <div className={styles.metadataItem}>
            <span>Level-Type:</span>
            <span>{organizationData.metadata.levelType}</span>
          </div>
        </div>
      </section>
    </div>
  );
};
