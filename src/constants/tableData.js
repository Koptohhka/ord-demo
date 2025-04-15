// Organization Location Entity Division
// Location=Location


export const TREE_DATA = [
  {
    key: "global-corporation-inc",
    data: {
      name: "Global Corporation Inc.",
      address: { city: 'Chicago', country: 'US', street: '227 Pine St', postalCode: '1010' },
      contact: { name: 'Annual Innovation Contest', phone: '+1-312-555-0101' },
      gps: { lat: 41.881832, lon: -87.623177 },
      type: "Entity",
      tags: [
        {
          label: 'Fu',
          color: "#c32b37"
        }, {
          label: 'Ru',
          color: "#cb6e83"
        }, {
          label: 'Cu',
          color: "#ac7027"
        }
      ]
    },
    children: [
      {
        key: "europe-division",
        data: {
          name: "Europe Division (Austria HQ - Vienna)",
          address: { city: 'Wien', country: 'Austria', street: '798 Elm St', postalCode: '1010' },
          contact: { name: 'European Tech Challenge', phone: '+43-1-555-2345' },
          gps: { lat: 48.208174, lon: 16.373819 },
          type: "Organization"
        },
        children: [
          {
            key: "rnd-center-graz",
            data: {
              name: "R&D Center (Graz)",
              address: { city: '208 Main St', country: 'US', street: 'Los Angeles', postalCode: '' },
              contact: { name: 'NextGen Research Awards', phone: '+43-316-555-1122' },
              gps: { lat: 47.070714, lon: 15.439504 },
              coWorkers: [
                {
                  "coWorkerId": "015806be-e9ec-48bf-88d0-a123100bab1c",
                  "firstName": "Elena",
                  "lastName": "Gehre",
                  "role": "RM-Agent",
                  "email": "Elena.Gehre@riskonmind.eu"
                },
                {
                  "coWorkerId": "015806be-e9ec-48bf-88d0-a123100bab1c",
                  "firstName": "Cecilia",
                  "lastName": "Garatva",
                  "role": "Invited Guest",
                  "email": "Cecilia.Garatva@riskonmind.eu"
                },
                {
                  "coWorkerId": "015806be-e9ec-48bf-88d0-a123100bab1c",
                  "firstName": "Christopher",
                  "lastName": "Plauk",
                  "role": "RM-Agent",
                  "email": "Christopher.Plauk@riskonmind.eu"
                },
                {
                  "coWorkerId": "015806be-e9ec-48bf-88d0-a123100bab1c",
                  "firstName": "Maik",
                  "lastName": "Spitzmüller",
                  "role": "Contributor",
                  "email": "Maik.Spitzmueller@riskonmind.eu"
                }
              ],
              tags: [
                {
                  label: "Bu",
                  color: "#1f4381"
                }, {
                  label: 'Mu',
                  color: "#119073"
                },
              ],
              type: "Location"
            },
            children: [
              {
                key: "rnd-center-graz-a1",
                data: {
                  author: 'Melisa Zanner',
                  dates: { startDate: 'Tue Feb 04 2025', endDate: 'Tue Feb 11 2025' },
                  status: 'Finalized',
                  type: "Assessment"
                },
              },
              {
                key: "rnd-center-graz-a2",
                data: {
                  author: 'Fabio Möhsner',
                  dates: { startDate: 'Thu Feb 20 2025', endDate: '-' },
                  status: 'Open',
                  type: "Assessment"
                },
              },
              // {
              //   key: "rnd-center-graz-a3",
              //   data: {
              //     author: ' ',
              //     dates: { startDate: ' ', endDate: ' ' },
              //     status: ' ',
              //     type: "Risk-transfer"
              //   },
              // }
            ]
          }, {
            key: "manufacturing-plants",
            data: {
              name: "Manufacturing Plants",
              address: { city: '8 Pine St', country: 'US', street: ' Phoenix', postalCode: '' },
              contact: { name: 'Industrial Excellence Cup', phone: '+43-1-999-3000' },
              gps: { lat: 47.516231, lon: 14.550072 },
              type: "Location"
            },
            children: [{
              key: "plant-a-linz",
              data: {
                name: "Plant A - Linz",
                address: { city: '684 Oak Rd', country: 'US', street: ' Chicago', postalCode: '' },
                contact: { name: 'Smart Factory Challenge', phone: '+43-732-123-456' },
                gps: { lat: 48.30694, lon: 14.28583 },
                type: "Location"
              }
            }, {
              key: "plant-b-innsbruck",
              data: {
                name: "Plant B - Innsbruck",
                address: { city: '100 Park Ave', country: 'US', street: ' Houston', postalCode: '' },
                contact: { name: 'Sustainable Manufacturing Contest', phone: '+43-512-987-654' },
                gps: { lat: 47.269212, lon: 11.404102 },
                type: "Location"
              }
            }, {
              key: "plant-c-salzburg",
              data: {
                name: "Plant C - Salzburg",
                address: { city: '468 Park Ave', country: 'US', street: ' Chicago', postalCode: '' },
                contact: { name: 'CleanTech Plant Awards', phone: '+43-662-333-222' },
                gps: { lat: 47.80949, lon: 13.05501 },
                type: "Location"
              }
            }]
          }]
      }, {
        key: "european-distribution-hub",
        data: {
          name: "European Distribution Hub (Klagenfurt)",
          address: { city: '420 Oak Rd', country: 'US', street: ' Chicago', postalCode: '' },
          contact: { name: 'Logistics & Efficiency Prize', phone: '+43-463-400-900' },
          gps: { lat: 46.624722, lon: 14.305278 },
          type: "Location"
        }
      }, {
        key: "tech-support-service-center",
        data: {
          name: "Tech Support & Service Center (Villach)",
          address: { city: '349 Park Ave', country: 'US', street: ' Phoenix', postalCode: '' },
          contact: { name: 'Support Excellence Award', phone: '+43-4242-123-000' },
          gps: { lat: 46.610278, lon: 13.855833 },
          type: "Location"
        }
      }]
  }, {
    key: "globaltech-industries",
    data: {
      name: "GlobalTech Industries",
      address: { city: '214 Oak Rd', country: 'US', street: ' New York', postalCode: '' },
      contact: { name: 'Future Tech Hackathon', phone: '+1-212-555-2020' },
      gps: { lat: 40.712776, lon: -74.005974 },
      type: "Division"
    }
  }, {
    key: "green-energy-corp",
    data: {
      name: "Green Energy Corp.",
      address: { city: '346 Park Ave', country: 'US', street: ' New York', postalCode: '' },
      contact: { name: 'Green Innovation Award', phone: '+1-212-555-3030' },
      gps: { lat: 40.758896, lon: -73.985130 },
      tags: [
       {
          label: 'Mu',
          color: "#119073"
        }, {
          label: 'Ru',
          color: "#cb6e83"
        }, {
          label: 'Cu',
          color: "#ac7027"
        }
      ],
      type: "Entity"
    }
  }];