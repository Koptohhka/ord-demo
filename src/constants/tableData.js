export const TREE_DATA = [
  {
    key: "global-corporation-inc",
    icon: 'pi pi-fw pi-inbox',
    data: {
      name: "Global Corporation Inc.",
      address: { city: 'Chicago', country: 'US', street: '227 Pine St', postalCode: '1010' },
      contact: { name: 'Annual Innovation Contest', phone: '+1-312-555-0101' },
      gps: { lat: 41.881832, lon: -87.623177 }
    },
    children: [{
      key: "europe-division",
      icon: 'pi pi-fw pi-inbox',
      data: {
        name: "Europe Division (Austria HQ - Vienna)",
        address: { city: 'Wien', country: 'Austria', street: '798 Elm St', postalCode: '1010' },
        contact: { name: 'European Tech Challenge', phone: '+43-1-555-2345' },
        gps: { lat: 48.208174, lon: 16.373819 }
      },
      children: [{
        key: "rnd-center-graz",
        data: {
          name: "R&D Center (Graz)",
          address: { city: '208 Main St', country: 'US', street: 'Los Angeles', postalCode: '' },
          contact: { name: 'NextGen Research Awards', phone: '+43-316-555-1122' },
          gps: { lat: 47.070714, lon: 15.439504 }
        }
      }, {
        key: "manufacturing-plants",
        data: {
          name: "Manufacturing Plants",
          address: { city: '8 Pine St', country: 'US', street: ' Phoenix', postalCode: '' },
          contact: { name: 'Industrial Excellence Cup', phone: '+43-1-999-3000' },
          gps: { lat: 47.516231, lon: 14.550072 }
        },
        children: [{
          key: "plant-a-linz",
          data: {
            name: "Plant A - Linz",
            address: { city: '684 Oak Rd', country: 'US', street: ' Chicago', postalCode: '' },
            contact: { name: 'Smart Factory Challenge', phone: '+43-732-123-456' },
            gps: { lat: 48.30694, lon: 14.28583 }
          }
        }, {
          key: "plant-b-innsbruck",
          data: {
            name: "Plant B - Innsbruck",
            address: { city: '100 Park Ave', country: 'US', street: ' Houston', postalCode: '' },
            contact: { name: 'Sustainable Manufacturing Contest', phone: '+43-512-987-654' },
            gps: { lat: 47.269212, lon: 11.404102 }
          }
        }, {
          key: "plant-c-salzburg",
          data: {
            name: "Plant C - Salzburg",
            address: { city: '468 Park Ave', country: 'US', street: ' Chicago', postalCode: '' },
            contact: { name: 'CleanTech Plant Awards', phone: '+43-662-333-222' },
            gps: { lat: 47.80949, lon: 13.05501 }
          }
        }]
      }]
    }, {
      key: "european-distribution-hub",
      data: {
        name: "European Distribution Hub (Klagenfurt)",
        address: { city: '420 Oak Rd', country: 'US', street: ' Chicago', postalCode: '' },
        contact: { name: 'Logistics & Efficiency Prize', phone: '+43-463-400-900' },
        gps: { lat: 46.624722, lon: 14.305278 }
      }
    }, {
      key: "tech-support-service-center",
      data: {
        name: "Tech Support & Service Center (Villach)",
        address: { city: '349 Park Ave', country: 'US', street: ' Phoenix', postalCode: '' },
        contact: { name: 'Support Excellence Award', phone: '+43-4242-123-000' },
        gps: { lat: 46.610278, lon: 13.855833 }
      }
    }]
  }, {
    key: "globaltech-industries",
    data: {
      name: "GlobalTech Industries",
      address: { city: '214 Oak Rd', country: 'US', street: ' New York', postalCode: '' },
      contact: { name: 'Future Tech Hackathon', phone: '+1-212-555-2020' },
      gps: { lat: 40.712776, lon: -74.005974 }
    }
  }, {
    key: "green-energy-corp",

    data: {
      name: "Green Energy Corp.",
      address: { city: '346 Park Ave', country: 'US', street: ' New York', postalCode: '' },
      contact: { name: 'Green Innovation Award', phone: '+1-212-555-3030' },
      gps: { lat: 40.758896, lon: -73.985130 }
    }
  }];