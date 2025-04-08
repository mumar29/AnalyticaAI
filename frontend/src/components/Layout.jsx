import { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import ChatInterface from "./ChatInterface";
import History from "./History";
import CompanyHealthDashboard from "./CompanyHealthDashboard";

function Layout() {
  const [currentView, setCurrentView] = useState("dashboard");
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  
  // Function to handle chat selection from history
  const handleChatSelect = (sessionId) => {
    setSelectedSessionId(sessionId);
    setCurrentView("chat");
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Fixed Sidebar */}
      <Sidebar setCurrentView={setCurrentView} />
      
      {/* Main Content */}
      <main className="flex-grow min-h-screen ml-64 p-6 bg-gray-800 text-white scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800">
      {currentView === "dashboard" && <CompanyHealthDashboard />}
        {currentView === "chat" && <ChatInterface sessionId={selectedSessionId} />}
        {currentView === "history" && <History onChatSelect={handleChatSelect} />}
        {/* {currentView === "dashboard" && <CompanyHealthDashboard />}
        {currentView === "chat" && <ChatInterface />}
        {currentView === "history" && <History />} */}
      </main>
    </div>
  );
}

export default Layout;
