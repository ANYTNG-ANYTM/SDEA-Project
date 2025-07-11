import React from 'react';
import { X } from 'lucide-react';

const TabBar = ({ tabs, activeTab, setActiveTab, onCloseTab }) => {
  if (tabs.length === 0) return null;

  return (
    <div className="flex bg-gray-100 border-b border-gray-200">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex items-center px-4 py-2 border-r border-gray-200 cursor-pointer ${
            activeTab === tab.id ? 'bg-white border-b-2 border-blue-500' : 'hover:bg-gray-50'
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          <span className="text-sm mr-2">{tab.label}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCloseTab(tab.id);
            }}
            className="hover:bg-gray-200 rounded p-1"
          >
            <X size={12} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TabBar;