import { Dialog, } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import React, {useState} from 'react';
import {Button} from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';


const selectOptions = [
  { label: 'Organization', value: 'Organization' },
  { label: 'Location', value: 'Location' },
  { label: 'Entity', value: 'Entity' },
  { label: 'Division', value: 'Division' },
];

export const CreateNewOrgNode = ({isModalVisible, selectedNode, setNodes, nodes, setModalVisible} = props) => {
  const [newNodeName, setNewNodeName] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [street, setStreet] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [contact, setContact] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');

  let disabled = newNodeName && selectedOption && city && country && street && postalCode && contact && contactPhone && lat && long;

  const handleAddNewOrgNode = () => {
    if (!disabled) return;

    const newNode = {
      key: `node-${Date.now()}`,
      data: {
        name: newNodeName.trim(),
        type: selectedOption,
        address: {city: city, country: country, street: street, postalCode: postalCode},
        contact: { name: contact, phone: contactPhone},
        gps: { lat: lat, lon: long }
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

    setModalVisible(false);
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
        disabled={!disabled}
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
          Name
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
        <label htmlFor="selectField" className="p-d-block">
          Type
        </label>
        <Dropdown
          id="selectField"
          value={selectedOption}
          options={selectOptions}
          onChange={(e) => setSelectedOption(e.value)}
          placeholder="Select one"
          style={{ width: '100%' }}
        />
      </div>
      <div className="p-field">
        <label htmlFor="adressName" className="p-d-block">
          City
        </label>
        <InputText
          id="adressName"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          autoFocus
          className="p-d-block"
          style={{ width: '100%' }}
          onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
        />
      </div>
      <div className="p-field">
        <label htmlFor="adressName" className="p-d-block">
          Country
        </label>
        <InputText
          id="adressName"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          autoFocus
          className="p-d-block"
          style={{ width: '100%' }}
          onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
        />
      </div>
      <div className="p-field">
        <label htmlFor="adressName" className="p-d-block">
          Street
        </label>
        <InputText
          id="adressName"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          autoFocus
          className="p-d-block"
          style={{ width: '100%' }}
          onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
        />
      </div>
      <div className="p-field">
        <label htmlFor="adressName" className="p-d-block">
          Postal code
        </label>
        <InputText
          id="adressName"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          autoFocus
          className="p-d-block"
          style={{ width: '100%' }}
          onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
        />
      </div>
      <div className="p-field">
        <label htmlFor="adressName" className="p-d-block">
          Contact Name
        </label>
        <InputText
          id="ContestName"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          autoFocus
          className="p-d-block"
          style={{ width: '100%' }}
          onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
        />
      </div>
      <div className="p-field">
        <label htmlFor="ContestPhone" className="p-d-block">
          Contact Phone
        </label>
        <InputText
          id="ContestPhone"
          value={contactPhone}
          onChange={(e) => setContactPhone(e.target.value)}
          autoFocus
          className="p-d-block"
          style={{ width: '100%' }}
          onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
        />
      </div>
      <div className="p-field">
        <label htmlFor="GPSName" className="p-d-block">
        latitude
        </label>
        <InputText
          id="GPSName"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          autoFocus
          className="p-d-block"
          style={{ width: '100%' }}
          onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
        />
      </div>
      <div className="p-field">
        <label htmlFor="GPSName" className="p-d-block">
        Longitude
        </label>
        <InputText
          id="GPSName"
          value={long}
          onChange={(e) => setLong(e.target.value)}
          autoFocus
          className="p-d-block"
          style={{ width: '100%' }}
          onKeyPress={(e) => e.key === 'Enter' && handleAddNewOrgNode()}
        />
      </div>
    </Dialog>
  )
}