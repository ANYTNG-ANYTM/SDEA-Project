import React from 'react';
import DataTable from './DataTable';
import { partnerSitesData } from '../data/mockData';

const PartnerSitesView = () => {
  const columns = [
    {
      key: 'value',
      label: 'Value',
      render: (value) => (
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
          {value}
        </div>
      )
    },
    {
      key: 'country',
      label: 'Country'
    },
    {
      key: 'locationRole',
      label: 'Location Role'
    },
    {
      key: 'geographicalReference',
      label: 'Geographical Reference'
    },
    {
      key: 'referenceSource',
      label: 'Reference Source'
    },
    {
      key: 'sourceId',
      label: 'Source ID'
    }
  ];

  const handleRowClick = (row) => {
    console.log('Row clicked:', row);
  };

  return (
    <div className="h-full">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Search Results</h2>
      </div>
      <DataTable
        data={partnerSitesData}
        columns={columns}
        title="Partner Sites"
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default PartnerSitesView;