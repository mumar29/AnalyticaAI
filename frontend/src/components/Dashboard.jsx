// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { FiHome, FiUser, FiSettings, FiBarChart2, FiLogOut, FiMessageSquare } from "react-icons/fi";
// import ChatInterface from "@/components/ChatInterface"; // Chat Component
// import History from "@/components/History"; // History Component
// // import AdminPanel from "@/components/AdminPanel"; // Admin Panel Component
// // import Profile from "@/components/Profile"; // Profile Component

// export default function Dashboard() {
//   const [role, setRole] = useState("user"); // Default role
//   const [currentView, setCurrentView] = useState("dashboard"); // Default view
//   const navigate = useNavigate();
//   const [stars, setStars] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login"); // Redirect if not logged in
//     }

//     // Fetch user role from API or local storage
//     const storedRole = localStorage.getItem("role") || "user";
//     setRole(storedRole);

//     // Generate animated stars for background
//     const generateStars = () => {
//       const newStars = [];
//       for (let i = 0; i < 100; i++) {
//         newStars.push({
//           x: Math.random() * 100,
//           y: Math.random() * 100,
//           size: Math.random() * 2 + 1,
//           opacity: Math.random() * 0.8 + 0.2,
//         });
//       }
//       setStars(newStars);
//     };

//     generateStars();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     navigate("/login");
//   };

//   return (
//     <div className="relative min-h-screen bg-[#0a0a18] text-white">
//       {/* Animated Stars Background */}
//       <div className="absolute inset-0 z-0">
//         {stars.map((star, index) => (
//           <div
//             key={index}
//             className="absolute rounded-full bg-white"
//             style={{
//               left: `${star.x}%`,
//               top: `${star.y}%`,
//               width: `${star.size}px`,
//               height: `${star.size}px`,
//               opacity: star.opacity,
//             }}
//           />
//         ))}
//       </div>

//       {/* Sci-Fi Glow Effect */}
//       <div className="absolute left-[-15%] top-[-10%] z-0 h-[700px] w-[700px]">
//         <div className="relative h-full w-full">
//           <div
//             className="absolute h-full w-full rounded-full opacity-80"
//             style={{
//               background:
//                 "radial-gradient(circle at center, rgba(0, 255, 241, 0.3) 0%, rgba(0, 255, 241, 0.2) 50%, rgba(0, 255, 241, 0.1) 100%)",
//               boxShadow: "0 0 100px 20px rgba(0, 255, 241, 0.4)",
//             }}
//           />
//         </div>
//       </div>

//       {/* Sidebar */}
//       <aside className="fixed left-0 top-0 z-20 flex h-full w-64 flex-col bg-[#131323] shadow-lg">
//         <div className="p-6">
//           <h1 className="text-2xl font-bold tracking-wider text-[#0ffff1]">Analytica AI</h1>
//         </div>
//         <nav className="mt-6 flex flex-col space-y-2 px-4">
//           <SidebarItem icon={<FiHome />} label="Dashboard" onClick={() => setCurrentView("dashboard")} />
//           <SidebarItem icon={<FiMessageSquare />} label="Chat" onClick={() => setCurrentView("chat")} />
//           <SidebarItem icon={<FiBarChart2 />} label="History" onClick={() => setCurrentView("history")} />
//           {role === "admin" && <SidebarItem icon={<FiSettings />} label="Admin Panel" onClick={() => setCurrentView("admin")} />}
//           <SidebarItem icon={<FiUser />} label="Profile" onClick={() => setCurrentView("profile")} />
//         </nav>
//         <div className="mt-auto p-4">
//           <Button onClick={handleLogout} className="w-full bg-red-600 hover:bg-red-700">
//             <FiLogOut className="mr-2" /> Logout
//           </Button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="ml-64 p-10">
       
//           {/* Switch Between Views */}
//           {currentView === "dashboard" && (
//              <motion.div
//              initial={{ opacity: 0, y: 20 }}
//              animate={{ opacity: 1, y: 0 }}
//              transition={{ duration: 0.8 }}
//              className="rounded-lg bg-[#1a1a2f] p-10 shadow-xl"
//            >
//             <>
//               <h2 className="mb-6 text-3xl font-bold text-[#0ffff1]">Welcome, {role === "admin" ? "Admin" : "User"}!</h2>
//               <p className="text-gray-400">Here's your overview:</p>

//               {/* Dashboard Content (Your Existing Content) */}
//               <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                 <DashboardCard title="Active Users" value="1,234" />
//                 <DashboardCard title="New Signups" value="56" />
//                 <DashboardCard title="Revenue" value="$12,345" />
//               </div>
//             </>
//             </motion.div>
//           )}

//           {currentView === "chat" && <ChatInterface />}
//           {currentView === "history" && <History />}
//           {/* {currentView === "admin" && role === "admin" && <AdminPanel />} */}
//           {/* {currentView === "profile" && <Profile />} */}
        
//       </main>
//     </div>
//   );
// }

// // Sidebar Navigation Item Component
// function SidebarItem({ icon, label, onClick }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="flex cursor-pointer items-center rounded-lg px-4 py-3 text-gray-300 transition-colors hover:bg-[#0ffff1] hover:text-black"
//       onClick={onClick}
//     >
//       {icon} <span className="ml-3">{label}</span>
//     </motion.div>
//   );
// }

// // Dashboard Metric Card Component
// function DashboardCard({ title, value }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="rounded-lg bg-[#131323] p-6 shadow-md"
//     >
//       <h3 className="text-lg font-semibold text-gray-300">{title}</h3>
//       <p className="mt-2 text-2xl font-bold text-[#0ffff1]">{value}</p>
//     </motion.div>
//   );
// }
export default function Dashboard() {
  return (
    <>
      <h2 className="text-3xl font-bold text-[#0ffff1]">Welcome!</h2>
      <p className="text-gray-400">Here's your overview:</p>
    </>
  );
}
