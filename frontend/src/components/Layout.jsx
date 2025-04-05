import { useState } from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import ChatInterface from "./ChatInterface";
import History from "./History";

function Layout() {
  const [currentView, setCurrentView] = useState("dashboard");

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Fixed Sidebar */}
      <Sidebar setCurrentView={setCurrentView} />
      
      {/* Main Content */}
      <main className="flex-grow min-h-screen ml-64 p-6 bg-gray-800 text-white scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-800">
        {currentView === "dashboard" && <Dashboard />}
        {currentView === "chat" && <ChatInterface />}
        {currentView === "history" && <History />}
      </main>
    </div>
  );
}

export default Layout;
