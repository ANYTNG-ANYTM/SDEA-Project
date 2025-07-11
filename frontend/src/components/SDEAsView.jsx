import React from 'react';
import DataTable from './DataTable';
import { sdeasData } from '../data/mockData';

const SDEAsView = () => {
  const columns = [
    {
      key: 'title',
      label: 'SDEA Title',
      render: (value) => (
        <div className="flex items-center">
          <div className="w-4 h-4 bg-purple-500 rounded mr-2"></div>
          {value}
        </div>
      )
    },
    {
      key: 'partner',
      label: 'Partner Organisation'
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span className={`px-2 py-1 rounded text-xs font-medium ${
          value === 'Active' ? 'bg-green-100 text-green-800' :
          value === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {value}
        </span>
      )
    },
    {
      key: 'effectiveDate',
      label: 'Effective Date'
    },
    {
      key: 'expiryDate',
      label: 'Expiry Date'
    },
    {
      key: 'lastUpdated',
      label: 'Last Updated'
    }
  ];

  const handleRowClick = (row) => {
    console.log('Row clicked:', row);
  };

  return (
    <div className="h-full">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Safety Data Exchange Agreements</h2>
      </div>
      <DataTable
        data={sdeasData}
        columns={columns}
        title="SDEAs"
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default SDEAsView;