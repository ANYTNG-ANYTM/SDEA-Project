export const partnersData = [
  {
    id: 1,
    name: 'Generis Enterprise Technology Limited',
    organisationType: 'Contract Organisation, Design Centre, Educational Institution, Ethics Committee, General Supplier, Health care, Hospital/Clinic/Other Health Care Facility, Investigator, Laboratory, Manufacturer / Establishment, Marketing Authorisation Holder, Master File Holder, Medium, Non-Pharmaceutical company, Other Supplier, Patient Organisation/Association, Pharmaceutical association/federation, Safety Data Exchange Partner, Small, Sponsor, Study Institution, Subsidiary, Substance Manufacturer, Substance Owner',
    location: 'Generis London, UK\nGeneris Tokyo, Japan\nGeneris Enterprise Technology Limited - 85 Gracechurch Street, London, United Kingdom',
    informationClassification: 'Public',
    sourceLinked: 'Yes'
  },
  {
    id: 2,
    name: 'Qdossier',
    organisationType: 'Contract Organisation, Sponsor, Safety Data Exchange Partner',
    location: '',
    informationClassification: 'Public',
    sourceLinked: 'No'
  },
  {
    id: 3,
    name: 'Test Organisation1',
    organisationType: 'Hospital/Clinic/Other Health Care Facility, Study Institution, Safety Data Exchange Partner',
    location: 'Test Site2',
    informationClassification: 'Public',
    sourceLinked: 'Yes'
  }
];

export const partnerSitesData = [
  {
    id: 1,
    value: 'Generis Enterprise Technology Limited - 85 Gracechurch Street',
    country: 'United Kingdom',
    locationRole: '',
    geographicalReference: '51.512745, -0.084415',
    referenceSource: 'SPOR',
    sourceId: 'LOC-100051'
  },
  {
    id: 2,
    value: 'Generis London, UK',
    country: 'United Kingdom',
    locationRole: 'Head Office',
    geographicalReference: '51.4990434, -0.1981585',
    referenceSource: 'SPOR',
    sourceId: ''
  },
  {
    id: 3,
    value: 'Generis Tokyo, Japan',
    country: 'Japan',
    locationRole: 'Subsidiary Office, Distribution Centre',
    geographicalReference: '35.6921603, 139.7499032',
    referenceSource: '',
    sourceId: ''
  },
  {
    id: 4,
    value: 'Test Site2',
    country: 'Poland',
    locationRole: 'Head Office',
    geographicalReference: '',
    referenceSource: '',
    sourceId: ''
  }
];

export const safetyDocumentsData = [
  {
    id: 1,
    title: 'PSUR Q1 2024',
    type: 'Periodic Safety Update Report',
    status: 'Draft',
    lastModified: '2024-03-15',
    assignedTo: 'Dr. Smith'
  },
  {
    id: 2,
    title: 'Risk Management Plan v2.1',
    type: 'Risk Management Plan',
    status: 'Approved',
    lastModified: '2024-03-10',
    assignedTo: 'Dr. Johnson'
  },
  {
    id: 3,
    title: 'DSUR Annual Report 2023',
    type: 'Development Safety Update Report',
    status: 'Under Review',
    lastModified: '2024-03-08',
    assignedTo: 'Dr. Williams'
  }
];

export const sdeasData = [
  {
    id: 1,
    title: 'SDEA-2024-001',
    partner: 'Generis Enterprise Technology Limited',
    status: 'Active',
    effectiveDate: '2024-01-01',
    expiryDate: '2024-12-31',
    lastUpdated: '2024-03-15'
  },
  {
    id: 2,
    title: 'SDEA-2024-002',
    partner: 'Qdossier',
    status: 'Pending',
    effectiveDate: '2024-04-01',
    expiryDate: '2025-03-31',
    lastUpdated: '2024-03-12'
  }
];