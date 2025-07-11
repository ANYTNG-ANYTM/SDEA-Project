import React from 'react';
import { X, Plus, Edit, Trash2 } from 'lucide-react';

const OrganisationModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = React.useState({
    organisationName: 'TEST',
    organisationType: ['General Supplier', 'EU Institution/Body/Agency'],
    supplierClassification: 'General',
    locations: [
      { location: '', country: '', primary: false }
    ],
    informationClassification: 'Public',
    securityDomain: 'Standard Regulatory Vocabulary'
  });

  const [activeTab, setActiveTab] = React.useState('general');

  const tabs = [
    { id: 'general', label: 'General' },
    { id: 'key-properties', label: 'Key Properties' },
    { id: 'supplier-certification', label: 'Supplier Certification' },
    { id: 'supporting-documents', label: 'Supporting Documents' },
    { id: 'change-requests', label: 'Change Requests' },
    { id: 'system-properties', label: 'System Properties' },
    { id: 'source-mapping', label: 'Source Mapping' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addLocation = () => {
    setFormData(prev => ({
      ...prev,
      locations: [...prev.locations, { location: '', country: '', primary: false }]
    }));
  };

  const updateLocation = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      locations: prev.locations.map((loc, i) => 
        i === index ? { ...loc, [field]: value } : loc
      )
    }));
  };

  const removeLocation = (index) => {
    setFormData(prev => ({
      ...prev,
      locations: prev.locations.filter((_, i) => i !== index)
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl h-5/6 flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">New Organisation</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm border-b-2 ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organisation Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.organisationName}
                    onChange={(e) => handleInputChange('organisationName', e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                  <X size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organisation Type *
                </label>
                <div className="flex flex-wrap gap-2">
                  {formData.organisationType.map((type, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm flex items-center">
                      {type}
                      <X size={12} className="ml-1 cursor-pointer" />
                    </span>
                  ))}
                  <button className="text-blue-600 text-sm hover:underline">+ Add</button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Supplier Classification *
                </label>
                <div className="relative">
                  <select
                    value={formData.supplierClassification}
                    onChange={(e) => handleInputChange('supplierClassification', e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="General">General</option>
                    <option value="Preferred">Preferred</option>
                    <option value="Strategic">Strategic</option>
                  </select>
                  <X size={16} className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Locations</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-700">
                    <div>Location</div>
                    <div>Country</div>
                    <div>Primary?</div>
                  </div>
                  {formData.locations.map((location, index) => (
                    <div key={index} className="grid grid-cols-3 gap-4 items-center">
                      <input
                        type="text"
                        value={location.location}
                        onChange={(e) => updateLocation(index, 'location', e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2"
                        placeholder="Location"
                      />
                      <input
                        type="text"
                        value={location.country}
                        onChange={(e) => updateLocation(index, 'country', e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2"
                        placeholder="Country"
                      />
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={location.primary}
                          onChange={(e) => updateLocation(index, 'primary', e.target.checked)}
                          className="mr-2"
                        />
                        <button
                          onClick={() => removeLocation(index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="flex space-x-2">
                    <button
                      onClick={addLocation}
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <Plus size={16} className="mr-1" />
                      Add
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-gray-800">
                      <Edit size={16} className="mr-1" />
                      Edit
                    </button>
                    <button className="flex items-center text-red-600 hover:text-red-800">
                      <Trash2 size={16} className="mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Security</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Information Classification *
                    </label>
                    <div className="relative">
                      <select
                        value={formData.informationClassification}
                        onChange={(e) => handleInputChange('informationClassification', e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      >
                        <option value="Public">Public</option>
                        <option value="Internal">Internal</option>
                        <option value="Confidential">Confidential</option>
                        <option value="Restricted">Restricted</option>
                      </select>
                      <X size={16} className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Security Domain *
                    </label>
                    <div className="relative">
                      <select
                        value={formData.securityDomain}
                        onChange={(e) => handleInputChange('securityDomain', e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                      >
                        <option value="Standard Regulatory Vocabulary">Standard Regulatory Vocabulary</option>
                        <option value="Extended Vocabulary">Extended Vocabulary</option>
                      </select>
                      <X size={16} className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <Settings size={16} className="mr-1" />
              Configure...
            </button>
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Redirect to the document after creation
            </label>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={onSave}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganisationModal;