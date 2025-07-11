import React from 'react';
import { Search, Bell, Settings, User, BarChart3, Wrench, Menu } from 'lucide-react';

const Header = ({ onToggleSidebar }) => {
  return (
    <div className="bg-white border-b border-gray-200">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded mr-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-gray-800">CARA LIFE SCIENCES PLATFORM</span>
          </div>
          <nav className="flex space-x-4 text-sm">
            <button className="hover:text-blue-600">File</button>
            <button className="hover:text-blue-600">Edit</button>
            <button className="hover:text-blue-600">Tasks</button>
            <button className="hover:text-blue-600">Tools</button>
            <button className="hover:text-blue-600">Settings</button>
            <button className="hover:text-blue-600">Help</button>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-sm hover:text-blue-600">
            <Wrench size={16} className="mr-1" />
            Control Panel
          </button>
          <button className="flex items-center text-sm hover:text-blue-600">
            <BarChart3 size={16} className="mr-1" />
            Analytics
          </button>
          <button className="flex items-center text-sm hover:text-blue-600">
            <Settings size={16} className="mr-1" />
            Utilities
          </button>
          <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-semibold">
            NB
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="flex items-center px-4 py-2">
        <button 
          onClick={onToggleSidebar}
          className="mr-4 p-1 hover:bg-gray-100 rounded"
        >
          <Menu size={16} className="text-gray-600" />
        </button>
        <div className="flex items-center space-x-2 mr-6">
          <Bell size={16} className="text-gray-600" />
          <span className="text-sm text-gray-600">Inbox</span>
        </div>
        <div className="flex-1 flex items-center space-x-4">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-1 border border-gray-300 rounded-md text-sm w-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;