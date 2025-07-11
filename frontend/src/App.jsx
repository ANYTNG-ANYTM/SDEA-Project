import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TabBar from './components/TabBar';
import PartnersView from './components/PartnersView';
import PartnerSitesView from './components/PartnerSitesView';
import SafetyDocumentsView from './components/SafetyDocumentsView';
import SDEAsView from './components/SDEAsView';
import OrganisationModal from './components/OrganisationModal';

function App() {
  const [activeSection, setActiveSection] = useState('partners');
  const [openTabs, setOpenTabs] = useState([
    { id: 'partner-sites', label: 'Partner Sites' },
    { id: 'partners', label: 'Partners' },
    { id: 'safety-documents', label: 'Safety Documents' },
    { id: 'sdeas', label: 'SDEAs' }
  ]);
  const [activeTab, setActiveTab] = useState('partners');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleCloseTab = (tabId) => {
    const newTabs = openTabs.filter(tab => tab.id !== tabId);
    setOpenTabs(newTabs);
    
    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[newTabs.length - 1].id);
    }
  };

  const handleNewOrganisation = () => {
    setIsModalOpen(true);
  };

  const handleSaveOrganisation = () => {
    setIsModalOpen(false);
    // Handle save logic here
  };

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const renderActiveContent = () => {
    switch (activeTab) {
      case 'partners':
        return <PartnersView onNewOrganisation={handleNewOrganisation} onRowClick={handleNewOrganisation} />;
      case 'partner-sites':
        return <PartnerSitesView />;
      case 'safety-documents':
        return <SafetyDocumentsView />;
      case 'sdeas':
        return <SDEAsView />;
      default:
        return <PartnersView onNewOrganisation={handleNewOrganisation} onRowClick={handleNewOrganisation} />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header onToggleSidebar={handleToggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <div className={`transition-all duration-300 ${sidebarCollapsed ? 'w-0' : 'w-64'} overflow-hidden`}>
          <Sidebar 
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            openTabs={openTabs}
            setOpenTabs={setOpenTabs}
          />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <TabBar 
            tabs={openTabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onCloseTab={handleCloseTab}
          />
          <div className="flex-1 overflow-auto bg-white">
            {renderActiveContent()}
          </div>
        </div>
      </div>
      
      <OrganisationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveOrganisation}
      />
    </div>
  );
}

export default App;