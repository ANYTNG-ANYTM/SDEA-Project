import React from 'react';
import DataTable from './DataTable';
import { partnersData } from '../data/mockData';

const PartnersView = ({ onNewOrganisation, onRowClick }) => {
  const columns = [
    {
      key: 'name',
      label: 'Name',
      render: (value) => (
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
          {value}
        </div>
      )
    },
    {
      key: 'organisationType',
      label: 'Organisation Type'
    },
    {
      key: 'location',
      label: 'Location'
    },
    {
      key: 'informationClassification',
      label: 'Information Classification'
    },
    {
      key: 'sourceLinked',
      label: 'Source Linked?'
    }
  ];

  return (
    <div className="h-full">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Search Results</h2>
      </div>
      <DataTable
        data={partnersData}
        columns={columns}
        title="Partners"
        onRowClick={onNewOrganisation}
      />
    </div>
  );
};

export default PartnersView;