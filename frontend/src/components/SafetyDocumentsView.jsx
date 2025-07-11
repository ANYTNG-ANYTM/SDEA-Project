import React from 'react';
import DataTable from './DataTable';
import { safetyDocumentsData } from '../data/mockData';

const SafetyDocumentsView = () => {
  const columns = [
    {
      key: 'title',
      label: 'Title',
      render: (value) => (
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded mr-2"></div>
          {value}
        </div>
      )
    },
    {
      key: 'type',
      label: 'Document Type'
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => (
        <span className={`px-2 py-1 rounded text-xs font-medium ${
          value === 'Approved' ? 'bg-green-100 text-green-800' :
          value === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {value}
        </span>
      )
    },
    {
      key: 'lastModified',
      label: 'Last Modified'
    },
    {
      key: 'assignedTo',
      label: 'Assigned To'
    }
  ];

  const handleRowClick = (row) => {
    console.log('Row clicked:', row);
  };

  return (
    <div className="h-full">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Safety Documents</h2>
      </div>
      <DataTable
        data={safetyDocumentsData}
        columns={columns}
        title="Safety Documents"
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default SafetyDocumentsView;