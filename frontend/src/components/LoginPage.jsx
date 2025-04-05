// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { motion } from "framer-motion"

// export default function LoginPage() {
//   const [stars, setStars] = useState([])

//   useEffect(() => {
//     const generateStars = () => {
//       const newStars = []
//       for (let i = 0; i < 100; i++) {
//         newStars.push({
//           x: Math.random() * 100,
//           y: Math.random() * 100,
//           size: Math.random() * 2 + 1,
//           opacity: Math.random() * 0.8 + 0.2,
//         })
//       }
//       setStars(newStars)
//     }

//     generateStars()
//   }, [])

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#0a0a18] text-white">
//       {/* Stars background */}
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

//       {/* Enhanced semi-sphere at right */}
//       <div className="absolute right-[-20%] top-[10%] z-0 h-[800px] w-[800px]">
//         <div className="relative h-full w-full">
//           {/* Main semi-sphere */}
//           <div
//             className="absolute h-full w-full rounded-full opacity-90"
//             style={{
//               background:
//                 "radial-gradient(circle at center, rgba(138, 43, 226, 0.4) 0%, rgba(103, 58, 183, 0.8) 50%, rgba(81, 45, 168, 0.9) 100%)",
//               boxShadow: "0 0 100px 20px rgba(138, 43, 226, 0.4)",
//             }}
//           />
//           {/* Glow effect */}
//           <div
//             className="absolute h-full w-full rounded-full opacity-50 blur-xl"
//             style={{
//               background:
//                 "radial-gradient(circle at center, rgba(156, 66, 245, 0.5) 0%, rgba(103, 58, 183, 0.3) 60%, transparent 100%)",
//             }}
//           />
//           {/* Highlight */}
//           <div
//             className="absolute h-full w-full rounded-full opacity-20 blur-lg"
//             style={{
//               background:
//                 "radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(156, 66, 245, 0.2) 40%, transparent 70%)",
//             }}
//           />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Header/Navigation */}
//         <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
//           <div className="flex items-center">
//             <div className="mr-2 h-10 w-10">
//               <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M20 0L40 10V30L20 40L0 30V10L20 0Z" fill="url(#paint0_linear)" />
//                 <path d="M20 5L35 13V27L20 35L5 27V13L20 5Z" fill="#0a0a18" />
//                 <path d="M20 10L30 15V25L20 30L10 25V15L20 10Z" fill="url(#paint1_linear)" />
//                 <defs>
//                   <linearGradient id="paint0_linear" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
//                     <stop stopColor="#9C42F5" />
//                     <stop offset="1" stopColor="#673AB7" />
//                   </linearGradient>
//                   <linearGradient id="paint1_linear" x1="10" y1="10" x2="30" y2="30" gradientUnits="userSpaceOnUse">
//                     <stop stopColor="#9C42F5" />
//                     <stop offset="1" stopColor="#673AB7" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </div>
//             <h1 className="text-2xl font-bold tracking-wider text-purple-400">EVOLVION</h1>
//           </div>

//           <nav className="hidden space-x-10 md:flex">
//             <a href="#" className="border-b-2 border-white pb-1 text-white">
//               Home
//             </a>
//             <a href="#" className="border-b-2 border-transparent pb-1 text-gray-300 transition-colors hover:text-white">
//               Portfolio
//             </a>
//             <a href="#" className="border-b-2 border-transparent pb-1 text-gray-300 transition-colors hover:text-white">
//               Contact Us
//             </a>
//           </nav>

//           <Button className="hidden rounded-full bg-[#0ffff1] px-6 py-2 text-[#0a0a18] hover:bg-[#0ee6d9] md:block">
//             Login
//           </Button>
//         </header>

//         {/* Main Content - Login Form */}
//         <main className="mx-auto mt-20 max-w-md px-6">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="rounded-lg bg-[#1a1a2e] p-8 shadow-xl"
//           >
//             <h2 className="mb-8 text-4xl font-bold">Welcome.</h2>
//             <form className="space-y-6">
//               <div>
//                 <Input
//                   type="text"
//                   placeholder="Username"
//                   className="h-12 w-full rounded-md border border-gray-700 bg-[#0a0a18] px-4 text-white placeholder-gray-400 focus:border-[#0ffff1] focus:outline-none"
//                 />
//               </div>
//               <div>
//                 <Input
//                   type="password"
//                   placeholder="Password"
//                   className="h-12 w-full rounded-md border border-gray-700 bg-[#0a0a18] px-4 text-white placeholder-gray-400 focus:border-[#0ffff1] focus:outline-none"
//                 />
//               </div>
//               <Button className="w-full rounded-md bg-[#0ffff1] py-3 text-lg font-semibold text-[#0a0a18] hover:bg-[#0ee6d9]">
//                 Log in
//               </Button>
//               <div className="mt-4 flex items-center justify-between text-sm">
//                 <a href="#" className="text-gray-400 hover:text-[#0ffff1]">
//                   Forgot password?
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-[#0ffff1]">
//                   Sign up
//                 </a>
//               </div>
//             </form>
//           </motion.div>
//         </main>
//       </div>
//     </div>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginRegisterPage() {
  const [stars, setStars] = useState([]);
  const navigate =useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("user"); // Default to user
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "", // Only for signup
  });

  useEffect(() => {

    const token = localStorage.getItem("token");
      if (token) {
        navigate("/userDashboard");  // ✅ Redirect logged-in users
      }

    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.8 + 0.2,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, [navigate]);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? "/api/v1/login" : "/api/v1/register";
      const data = isLogin
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, admin_email: formData.email, admin_password: formData.password };

      const res = await axios.post(`http://127.0.0.1:8000${endpoint}`, data,
        {
          headers: {
            "X-API-Key": "123", // Use the same API key from Postman
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Auth Response:", res.data);

      if (res.data.access_token) {
        localStorage.setItem("token", res.data.access_token);
        alert("Login Successful!");
        navigate("/userDashboard")
      } else if (res.data.organization_id) {
        alert("Signup Successful!");
      }
    } catch (error) {
      console.error("Auth Error:", error);
      alert("Authentication failed");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a18] text-white">
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        {stars.map((star, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>

      {/* Semi-Sphere Glow Effect */}
      <div className="absolute right-[-20%] top-[10%] z-0 h-[800px] w-[800px]">
        <div className="relative h-full w-full">
          <div
            className="absolute h-full w-full rounded-full opacity-90"
            style={{
              background:
                "radial-gradient(circle at center, rgba(138, 43, 226, 0.4) 0%, rgba(103, 58, 183, 0.8) 50%, rgba(81, 45, 168, 0.9) 100%)",
              boxShadow: "0 0 100px 20px rgba(138, 43, 226, 0.4)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <h1 className="text-2xl font-bold tracking-wider text-purple-400">EVOLVION</h1>
          <nav className="hidden space-x-10 md:flex">
            <a href="#" className="border-b-2 border-white pb-1 text-white">Home</a>
            <a href="#" className="border-b-2 border-transparent pb-1 text-gray-300 hover:text-white">Portfolio</a>
            <a href="#" className="border-b-2 border-transparent pb-1 text-gray-300 hover:text-white">Contact</a>
          </nav>
          <Button className="hidden rounded-full bg-[#0ffff1] px-6 py-2 text-[#0a0a18] hover:bg-[#0ee6d9] md:block">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </header>

        {/* Form Section */}
        <main className="mx-auto mt-20 max-w-md px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-lg bg-[#1a1a2e] p-8 shadow-xl"
          >
            <h2 className="mb-8 text-4xl font-bold">{isLogin ? "Welcome Back" : "Sign Up"}</h2>
            <form className="space-y-6" onSubmit={handleAuth}>
              {!isLogin && (
                <Input
                  type="text"
                  placeholder="Organization Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 w-full rounded-md border border-gray-700 bg-[#0a0a18] px-4 text-white placeholder-gray-400 focus:border-[#0ffff1]"
                />
              )}
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 w-full rounded-md border border-gray-700 bg-[#0a0a18] px-4 text-white placeholder-gray-400 focus:border-[#0ffff1]"
              />
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="h-12 w-full rounded-md border border-gray-700 bg-[#0a0a18] px-4 text-white placeholder-gray-400 focus:border-[#0ffff1]"
              />

              {/* Role Selection */}
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-300">Sign in as:</label>
                <div className="flex space-x-2">
                  <Button
                    type="button"
                    onClick={() => setRole("user")}
                    className={`px-4 py-2 text-sm ${role === "user" ? "bg-[#0ffff1] text-black" : "bg-gray-600"}`}
                  >
                    User
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setRole("admin")}
                    className={`px-4 py-2 text-sm ${role === "admin" ? "bg-[#0ffff1] text-black" : "bg-gray-600"}`}
                  >
                    Admin
                  </Button>
                </div>
              </div>

              <Button className="w-full rounded-md bg-[#0ffff1] py-3 text-lg font-semibold text-[#0a0a18] hover:bg-[#0ee6d9]">
                {isLogin ? "Log in" : "Sign up"}
              </Button>

              {/* Toggle Login/Signup */}
              <div className="mt-4 text-center text-sm">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                <span
                  className="cursor-pointer text-[#0ffff1] hover:underline"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Sign up" : "Log in"}
                </span>
              </div>
            </form>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
