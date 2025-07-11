import React from 'react';
import { ChevronDown, ChevronRight, Building2, Users, FileText, Shield, Database, Settings } from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection, openTabs, setOpenTabs }) => {
  const menuItems = [
    {
      id: 'cara-config',
      label: 'CARA Configuration',
      icon: Settings,
      children: []
    },
    {
      id: 'cara-controlled-vocab',
      label: 'CARA Controlled Vocab...',
      icon: Database,
      children: []
    },
    {
      id: 'cara-product-admin',
      label: 'CARA Product Adminis...',
      icon: Building2,
      children: []
    },
    {
      id: 'cara-system',
      label: 'CARA System',
      icon: Settings,
      children: []
    },
    {
      id: 'clinical',
      label: 'Clinical',
      icon: FileText,
      children: [
        { id: 'clinical-etmf', label: 'eTMF' },
        { id: 'clinical-trial-manage', label: 'Trial Manage...' }
      ]
    },
    {
      id: 'quality',
      label: 'Quality',
      icon: Shield,
      children: [
        { id: 'quality-audit-manage', label: 'Audit Manage...' },
        { id: 'quality-lms', label: 'LMS' },
        { id: 'quality-project-manage', label: 'Project Manag...' },
        { id: 'quality-quality-manage', label: 'Quality Manag...' }
      ]
    },
    {
      id: 'regulatory',
      label: 'Regulatory',
      icon: FileText,
      children: [
        { id: 'regulatory-correspon', label: 'Correspon...' },
        { id: 'regulatory-labelling', label: 'Labelling' },
        { id: 'regulatory-promotion', label: 'Promotion...' },
        { id: 'regulatory-submission', label: 'Submission...' }
      ]
    },
    {
      id: 'safety',
      label: 'Safety',
      icon: Shield,
      children: [
        { id: 'safety-case-manage', label: 'Case Manage...' },
        { id: 'safety-medical-inform', label: 'Medical Inform...' },
        { id: 'safety-psmf', label: 'PSMF' },
        { id: 'safety-sdeas', label: 'SDEAs', isActive: true, children: [
          { id: 'partner-sites', label: 'Partner Sites' },
          { id: 'partners', label: 'Partners' },
          { id: 'safety-documents', label: 'Safety Documents' }
        ]}
      ]
    }
  ];

  const [expandedItems, setExpandedItems] = React.useState({
    'safety': true,
    'safety-sdeas': true
  });

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleItemClick = (item) => {
    if (item.children && item.children.length > 0) {
      toggleExpanded(item.id);
    } else {
      setActiveSection(item.id);
      if (!openTabs.find(tab => tab.id === item.id)) {
        setOpenTabs(prev => [...prev, { id: item.id, label: item.label }]);
      }
    }
  };

  const renderMenuItem = (item, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.id];
    const Icon = item.icon;

    return (
      <div key={item.id}>
        <div
          className={`flex items-center px-3 py-1 text-sm cursor-pointer hover:bg-blue-700 ${
            item.isActive ? 'bg-blue-600' : ''
          } ${level > 0 ? 'ml-4' : ''}`}
          onClick={() => handleItemClick(item)}
          style={{ paddingLeft: `${12 + level * 16}px` }}
        >
          {hasChildren && (
            <span className="mr-1">
              {isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
            </span>
          )}
          {Icon && level === 0 && <Icon size={16} className="mr-2" />}
          <span className="text-white truncate">{item.label}</span>
        </div>
        {hasChildren && isExpanded && (
          <div>
            {item.children.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-blue-800 text-white h-full overflow-y-auto">
      <div className="p-4 border-b border-blue-700">
        <div className="flex items-center">
          <Building2 className="mr-2" size={20} />
          <span className="font-semibold">CARA Life Sciences - DE...</span>
        </div>
      </div>
      <div className="py-2">
        {menuItems.map(item => renderMenuItem(item))}
      </div>
    </div>
  );
};

export default Sidebar;