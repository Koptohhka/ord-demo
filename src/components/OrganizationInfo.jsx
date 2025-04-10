import styles from './OrganizationInfo.module.css';
import mapImage from "../assets/img/completed-google-places-label.png";

export const OrganizationInfo = ({ selectedNode }) => {
  if (!selectedNode) {
    return null;
  }

  const { data } = selectedNode;

  console.log(selectedNode.data, "props.selectedNode")

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
          <span className={styles.fieldValue}>{data.name}</span>
        </div>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>Address:</span>
          <span className={styles.fieldValue}>{data.address}</span>
        </div>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>Contest name:</span>
          <span className={styles.fieldValue}>{data["Contest name"]}</span>
        </div>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>Contest phone:</span>
          <span className={styles.fieldValue}>{data["Contest phone"]}</span>
        </div>

        <div className={styles.field}>
          <span className={styles.fieldLabel}>GPS:</span>
        </div>

        <div className={styles.coordinates}>
          <div className={styles.coordItem}>
            Latitude, Longitude: {data["Latitude, Longitude"]}
          </div>
        </div>
      </section>
      {/* <section className={styles.section}>        
        <div className={styles.metadataGrid}>
        <h2 className={styles.metadataGridTitle}>Metadata of choosen org-node</h2>
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
      </section> */}
      <img className={styles.mapImage} src={mapImage} alt="google-maps" />
    </div>
  );
};
