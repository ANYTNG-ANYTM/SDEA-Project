import React from 'react';
import { ChevronUp, ChevronDown, Filter, Search, MoreHorizontal } from 'lucide-react';

const DataTable = ({ data, columns, title, onRowClick }) => {
  const [sortColumn, setSortColumn] = React.useState(null);
  const [sortDirection, setSortDirection] = React.useState('asc');
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSort = (columnKey) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  const filteredData = data.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    const aVal = a[sortColumn];
    const bVal = b[sortColumn];
    if (sortDirection === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });

  return (
    <div className="bg-white">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onRowClick}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
          >
            Create
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50">
            Properties
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50">
            Subscribe
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50">
            Tags...
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50">
            Where Used
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
            <option>All Organisations</option>
          </select>
          <Filter size={16} className="text-gray-400" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search For..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm w-64"
            />
            <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="text-blue-600 text-sm hover:underline">Advanced Search</button>
          <div className="text-sm text-gray-600">
            Found {sortedData.length} documents in 12ms
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-3 text-left text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSort(column.key)}
                >
                  <div className="flex items-center">
                    {column.label}
                    {sortColumn === column.key && (
                      <span className="ml-1">
                        {sortDirection === 'asc' ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                onClick={() => onRowClick && onRowClick(row)}
              >
                {columns.map((column) => (
                  <td key={column.key} className="px-4 py-3 text-sm text-gray-900">
                    {column.render ? column.render(row[column.key], row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronUp size={16} className="rotate-90" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronDown size={16} className="rotate-90" />
          </button>
          <span className="text-sm text-gray-600">Page</span>
          <input type="number" value="1" className="w-12 text-center border border-gray-300 rounded text-sm" />
          <span className="text-sm text-gray-600">of 1</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronDown size={16} className="-rotate-90" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronUp size={16} className="-rotate-90" />
          </button>
        </div>
        <div className="text-sm text-gray-600">
          Displaying 1 - {sortedData.length} of {sortedData.length}
        </div>
      </div>
    </div>
  );
};

export default DataTable;