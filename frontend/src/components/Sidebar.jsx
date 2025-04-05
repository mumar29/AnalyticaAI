import {
  FiHome,
  FiMessageSquare,
  FiBarChart2,
  FiUser,
  FiLogOut,
} from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Sidebar({ setCurrentView }) {
  // const [currentView, setCurrentView] = useState("dashboard"); // Default view
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };
  return (
    // {/* Sidebar */}
    <aside className="fixed left-0 top-0 z-20 flex h-full w-64 flex-col bg-[#131323] shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-wider text-[#0ffff1]">
          Analytica AI
        </h1>
      </div>
      <nav className="mt-6 flex flex-col space-y-2 px-4">
        <SidebarItem
          icon={<FiHome />}
          label="Dashboard"
          onClick={() => setCurrentView("dashboard")}
        />
        <SidebarItem
          icon={<FiMessageSquare />}
          label="Chat"
          onClick={() => setCurrentView("chat")}
        />
        <SidebarItem
          icon={<FiBarChart2 />}
          label="History"
          onClick={() => setCurrentView("history")}
        />
        {/* {role === "admin" && <SidebarItem icon={<FiSettings />} label="Admin Panel" onClick={() => setCurrentView("admin")} />} */}
        <SidebarItem
          icon={<FiUser />}
          label="Profile"
          onClick={() => setCurrentView("profile")}
        />
      </nav>
      <div className="mt-auto p-4">
        <Button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700"
        >
          <FiLogOut className="mr-2" /> Logout
        </Button>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, label, onClick }) {
  return (
    <div
      className="flex cursor-pointer items-center rounded-lg px-4 py-3 text-gray-300 hover:bg-[#0ffff1] hover:text-black"
      onClick={onClick}
    >
      {icon} <span className="ml-3">{label}</span>
    </div>
  );
}

export default Sidebar;
