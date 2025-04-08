// import React, { useState, useEffect } from "react";
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   PieChart,
//   Pie,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   ChevronDown,
//   Search,
//   Download,
//   RefreshCw,
//   Calendar,
//   Activity,
//   ShoppingCart,
//   Users,
//   DollarSign,
//   TrendingUp,
//   AlertCircle,
//   BarChart2,
//   PieChart as PieChartIcon,
//   LineChart as LineChartIcon,
// } from "lucide-react";

// const CompanyHealthDashboard = () => {
//   // Sample data from the API response
//   const [loading, setLoading] = useState(true);
//   const [dashboardData, setDashboardData] = useState(null);

//  useEffect(() => {
//     const fetchCompanyHealthData = async () => {
//         try {
//           const response = await fetch('/api/get-company-health');

//           if (!response.ok) {
//             throw new Error(`API request failed with status ${response.status}`);
//           }

//           const data = await response.json();
//           return {
//             textResponse: data.text_response,
//             chartConfigs: data.chart_configs
//           };
//         } catch (error) {
//           console.error('Error fetching company health data:', error);
//           throw error;
//         }
//       };
//    }, []);

//   // Format data for charts
//   const productSalesData = [
//     { name: "Reusable Silicone Food Bags", total_sales: 5 },
//     { name: "Smart Water Bottle", total_sales: 3 },
//     { name: "Google Nest Hub", total_sales: 2 },
//     { name: "PlayStation 5", total_sales: 2 },
//     { name: "Adjustable Standing Desk", total_sales: 1 },
//   ];

//   const revenueData = [{ year: "2025", total_revenue: 4699.85 }];

//   const categorySalesData = [
//     { category_id: "9", category_sales: 3, name: "Category 9" },
//     { category_id: "3", category_sales: 3, name: "Category 3" },
//     { category_id: "5", category_sales: 3, name: "Category 5" },
//     { category_id: "1", category_sales: 3, name: "Category 1" },
//     { category_id: "6", category_sales: 2, name: "Category 6" },
//     { category_id: "2", category_sales: 2, name: "Category 2" },
//     { category_id: "4", category_sales: 1, name: "Category 4" },
//     { category_id: "7", category_sales: 1, name: "Category 7" },
//     { category_id: "8", category_sales: 1, name: "Category 8" },
//   ];

//   // Extended revenue data for visualization purposes
//   const extendedRevenueData = [
//     { month: "Jan", revenue: 980.5 },
//     { month: "Feb", revenue: 1230.75 },
//     { month: "Mar", revenue: 875.2 },
//     { month: "Apr", revenue: 1613.4 },
//   ];

//   // Colors for charts
//   const COLORS = [
//     "#8A43FF",
//     "#FF56E1",
//     "#43B4FF",
//     "#4CD471",
//     "#FFB443",
//     "#FF6243",
//   ];

//   // For animation demonstration
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//       setDashboardData({
//         totalRevenue: 4699.85,
//         orders: 12,
//         avgOrderValue: 391.65,
//         activeUsers: 8,
//       });
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen w-full bg-gray-900">
//         <div className="text-violet-500 flex flex-col items-center">
//           <RefreshCw className="h-12 w-12 animate-spin mb-4" />
//           <p className="text-lg font-medium">Loading dashboard data...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Header */}
//       <header className="px-6 py-4 border-b border-gray-800 bg-gray-900 sticky top-0 z-10">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <h1 className="font-bold text-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
//               AnalyticaAI
//             </h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 focus:outline-none text-sm"
//               />
//             </div>
//             <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
//               <AlertCircle className="h-5 w-5 text-gray-400" />
//             </button>
//             <div className="flex items-center space-x-2">
//               <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center">
//                 <span className="font-medium text-sm">JD</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="flex">
//         {/* Sidebar */}
//         <aside className="w-64 hidden lg:block bg-gray-900 border-r border-gray-800 min-h-screen p-4">
//           <nav className="space-y-1 mt-6">
//             <a className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-violet-900 bg-opacity-20 text-violet-500">
//               <Activity className="h-5 w-5" />
//               <span>Dashboard</span>
//             </a>
//             <a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 transition">
//               <BarChart2 className="h-5 w-5" />
//               <span>Analytics</span>
//             </a>
//             <a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 transition">
//               <ShoppingCart className="h-5 w-5" />
//               <span>Products</span>
//             </a>
//             <a className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 transition">
//               <Users className="h-5 w-5" />
//               <span>Customers</span>
//             </a>
//           </nav>
//         </aside>

//         {/* Main content */}
//         <main className="flex-1 p-6">
//           <div className="flex justify-between items-center mb-6">
//             <div>
//               <h2 className="text-xl font-semibold">
//                 Company Health Dashboard
//               </h2>
//               <p className="text-gray-400 text-sm">
//                 View key metrics and performance data
//               </p>
//             </div>
//             <div className="flex space-x-3">
//               <div className="flex items-center bg-gray-800 rounded-lg px-3 py-1">
//                 <Calendar className="h-4 w-4 text-gray-400 mr-2" />
//                 <span className="text-sm">Last 30 days</span>
//                 <ChevronDown className="h-4 w-4 text-gray-400 ml-2" />
//               </div>
//               <button className="bg-violet-600 hover:bg-violet-700 transition px-4 py-2 rounded-lg text-sm font-medium flex items-center">
//                 <RefreshCw className="h-4 w-4 mr-2" />
//                 Refresh Data
//               </button>
//             </div>
//           </div>

//           {/* Stats overview */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//             <Card className="bg-gray-800 border-gray-700 hover:border-violet-500 transition-all duration-300 overflow-hidden relative">
//               <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-fuchsia-500"></div>
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-sm font-medium text-gray-400 flex items-center">
//                   <DollarSign className="h-4 w-4 mr-1 text-violet-500" />
//                   Total Revenue
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">
//                   ${dashboardData.totalRevenue.toLocaleString()}
//                 </div>
//                 <p className="text-sm text-green-400 flex items-center mt-1">
//                   <TrendingUp className="h-4 w-4 mr-1" />
//                   +12.5% from previous period
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-800 border-gray-700 hover:border-violet-500 transition-all duration-300 overflow-hidden relative">
//               <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-fuchsia-500"></div>
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-sm font-medium text-gray-400 flex items-center">
//                   <ShoppingCart className="h-4 w-4 mr-1 text-violet-500" />
//                   Total Orders
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">{dashboardData.orders}</div>
//                 <p className="text-sm text-green-400 flex items-center mt-1">
//                   <TrendingUp className="h-4 w-4 mr-1" />
//                   +8.2% from previous period
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-800 border-gray-700 hover:border-violet-500 transition-all duration-300 overflow-hidden relative">
//               <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-fuchsia-500"></div>
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-sm font-medium text-gray-400 flex items-center">
//                   <DollarSign className="h-4 w-4 mr-1 text-violet-500" />
//                   Avg. Order Value
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">
//                   ${dashboardData.avgOrderValue.toLocaleString()}
//                 </div>
//                 <p className="text-sm text-green-400 flex items-center mt-1">
//                   <TrendingUp className="h-4 w-4 mr-1" />
//                   +5.3% from previous period
//                 </p>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-800 border-gray-700 hover:border-violet-500 transition-all duration-300 overflow-hidden relative">
//               <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-fuchsia-500"></div>
//               <CardHeader className="pb-2">
//                 <CardTitle className="text-sm font-medium text-gray-400 flex items-center">
//                   <Users className="h-4 w-4 mr-1 text-violet-500" />
//                   Active Users
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold">
//                   {dashboardData.activeUsers}
//                 </div>
//                 <p className="text-sm text-green-400 flex items-center mt-1">
//                   <TrendingUp className="h-4 w-4 mr-1" />
//                   +15.7% from previous period
//                 </p>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Report summary */}
//           <Card className="mb-6 bg-gray-800 border-gray-700">
//             <CardHeader>
//               <CardTitle className="flex items-center">
//                 <Activity className="h-5 w-5 mr-2 text-violet-500" />
//                 Performance Summary
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-gray-300 leading-relaxed">
//                 The shopping store has generated a total revenue of{" "}
//                 <span className="text-violet-400 font-medium">
//                   ${dashboardData.totalRevenue.toLocaleString()}
//                 </span>
//                 . The store has received{" "}
//                 <span className="text-violet-400 font-medium">
//                   {dashboardData.orders} orders
//                 </span>{" "}
//                 with an average order value of
//                 <span className="text-violet-400 font-medium">
//                   {" "}
//                   ${dashboardData.avgOrderValue.toLocaleString()}
//                 </span>
//                 . There are{" "}
//                 <span className="text-violet-400 font-medium">
//                   {dashboardData.activeUsers} active users
//                 </span>
//                 . The top-selling products include{" "}
//                 <span className="text-violet-400 font-medium">
//                   Reusable Silicone Food Bags
//                 </span>{" "}
//                 with 5 units sold, followed by{" "}
//                 <span className="text-violet-400 font-medium">
//                   Smart Water Bottle
//                 </span>{" "}
//                 with 3 units sold, and other products with fewer sales. The
//                 sales by category indicate that categories{" "}
//                 <span className="text-violet-400 font-medium">1, 3, and 9</span>{" "}
//                 are the strongest with 3 sales each.
//               </p>
//             </CardContent>
//           </Card>

//           {/* Charts section with tabs */}
//           <Tabs defaultValue="sales" className="mb-6">
//             <div className="flex justify-between items-center mb-4">
//               <TabsList className="bg-gray-800">
//                 <TabsTrigger
//                   value="sales"
//                   className="data-[state=active]:bg-violet-900 data-[state=active]:text-white"
//                 >
//                   Sales Analytics
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="products"
//                   className="data-[state=active]:bg-violet-900 data-[state=active]:text-white"
//                 >
//                   Product Performance
//                 </TabsTrigger>
//                 <TabsTrigger
//                   value="categories"
//                   className="data-[state=active]:bg-violet-900 data-[state=active]:text-white"
//                 >
//                   Category Breakdown
//                 </TabsTrigger>
//               </TabsList>

//               <DropdownMenu>
//                 <DropdownMenuTrigger className="flex items-center bg-gray-800 px-3 py-1 rounded-lg text-sm text-gray-300">
//                   <Download className="h-4 w-4 mr-2" />
//                   Export
//                   <ChevronDown className="h-4 w-4 ml-2" />
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="bg-gray-800 border-gray-700">
//                   <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 cursor-pointer">
//                     Export as PDF
//                   </DropdownMenuItem>
//                   <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 cursor-pointer">
//                     Export as CSV
//                   </DropdownMenuItem>
//                   <DropdownMenuItem className="text-gray-300 hover:bg-gray-700 cursor-pointer">
//                     Export as Excel
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>

//             <TabsContent value="sales" className="mt-0">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 <Card className="bg-gray-800 border-gray-700">
//                   <CardHeader className="pb-2">
//                     <CardTitle className="flex items-center text-base">
//                       <LineChartIcon className="h-5 w-5 mr-2 text-violet-500" />
//                       Revenue Over Time
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="pt-0">
//                     <div className="h-72">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <LineChart data={extendedRevenueData}>
//                           <CartesianGrid
//                             strokeDasharray="3 3"
//                             stroke="#374151"
//                           />
//                           <XAxis dataKey="month" stroke="#9CA3AF" />
//                           <YAxis stroke="#9CA3AF" />
//                           <Tooltip
//                             contentStyle={{
//                               backgroundColor: "#1F2937",
//                               borderColor: "#374151",
//                             }}
//                           />
//                           <Line
//                             type="monotone"
//                             dataKey="revenue"
//                             stroke="#8A43FF"
//                             strokeWidth={2}
//                             dot={{ fill: "#8A43FF", strokeWidth: 2 }}
//                             activeDot={{ r: 6, fill: "#8A43FF" }}
//                           />
//                         </LineChart>
//                       </ResponsiveContainer>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="bg-gray-800 border-gray-700">
//                   <CardHeader className="pb-2">
//                     <CardTitle className="flex items-center text-base">
//                       <BarChart2 className="h-5 w-5 mr-2 text-violet-500" />
//                       Top Selling Products
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="pt-0">
//                     <div className="h-72">
//                       <ResponsiveContainer width="100%" height="100%">
//                         <BarChart data={productSalesData}>
//                           <CartesianGrid
//                             strokeDasharray="3 3"
//                             stroke="#374151"
//                           />
//                           <XAxis
//                             dataKey="name"
//                             stroke="#9CA3AF"
//                             tick={{ fontSize: 12 }}
//                             tickFormatter={(value) =>
//                               value.length > 10
//                                 ? `${value.substring(0, 10)}...`
//                                 : value
//                             }
//                           />
//                           <YAxis stroke="#9CA3AF" />
//                           <Tooltip
//                             contentStyle={{
//                               backgroundColor: "#1F2937",
//                               borderColor: "#374151",
//                             }}
//                           />
//                           <Bar dataKey="total_sales" fill="#8A43FF">
//                             {productSalesData.map((entry, index) => (
//                               <Cell
//                                 key={`cell-${index}`}
//                                 fill={COLORS[index % COLORS.length]}
//                               />
//                             ))}
//                           </Bar>
//                         </BarChart>
//                       </ResponsiveContainer>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </TabsContent>

//             <TabsContent value="products" className="mt-0">
//               <Card className="bg-gray-800 border-gray-700">
//                 <CardHeader>
//                   <CardTitle>Product Sales Breakdown</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="overflow-auto">
//                     <table className="w-full text-left">
//                       <thead>
//                         <tr className="border-b border-gray-700">
//                           <th className="py-3 px-4 font-medium">
//                             Product Name
//                           </th>
//                           <th className="py-3 px-4 font-medium">Product ID</th>
//                           <th className="py-3 px-4 font-medium">Units Sold</th>
//                           <th className="py-3 px-4 font-medium">Status</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {[
//                           {
//                             name: "Reusable Silicone Food Bags",
//                             id: 12,
//                             sales: 5,
//                             status: "High",
//                           },
//                           {
//                             name: "Smart Water Bottle",
//                             id: 14,
//                             sales: 3,
//                             status: "Medium",
//                           },
//                           {
//                             name: "Google Nest Hub",
//                             id: 1,
//                             sales: 2,
//                             status: "Medium",
//                           },
//                           {
//                             name: "PlayStation 5",
//                             id: 3,
//                             sales: 2,
//                             status: "Medium",
//                           },
//                           {
//                             name: "Adjustable Standing Desk",
//                             id: 6,
//                             sales: 1,
//                             status: "Low",
//                           },
//                         ].map((product, i) => (
//                           <tr
//                             key={i}
//                             className="border-b border-gray-700 hover:bg-gray-700"
//                           >
//                             <td className="py-3 px-4">{product.name}</td>
//                             <td className="py-3 px-4">{product.id}</td>
//                             <td className="py-3 px-4">{product.sales}</td>
//                             <td className="py-3 px-4">
//                               <span
//                                 className={`px-2 py-1 rounded-full text-xs font-medium ${
//                                   product.status === "High"
//                                     ? "bg-green-900 text-green-300"
//                                     : product.status === "Medium"
//                                     ? "bg-blue-900 text-blue-300"
//                                     : "bg-yellow-900 text-yellow-300"
//                                 }`}
//                               >
//                                 {product.status}
//                               </span>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </CardContent>
//               </Card>
//             </TabsContent>

//             <TabsContent value="categories" className="mt-0">
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                 <div className="lg:col-span-1">
//                   <Card className="bg-gray-800 border-gray-700 h-full">
//                     <CardHeader>
//                       <CardTitle className="flex items-center">
//                         <PieChartIcon className="h-5 w-5 mr-2 text-violet-500" />
//                         Category Sales
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="h-64">
//                         <ResponsiveContainer width="100%" height="100%">
//                           <PieChart>
//                             <Pie
//                               data={categorySalesData}
//                               cx="50%"
//                               cy="50%"
//                               labelLine={false}
//                               outerRadius={80}
//                               fill="#8884d8"
//                               dataKey="category_sales"
//                               nameKey="name"
//                               label={({ name, percent }) =>
//                                 `${name} ${(percent * 100).toFixed(0)}%`
//                               }
//                             >
//                               {categorySalesData.map((entry, index) => (
//                                 <Cell
//                                   key={`cell-${index}`}
//                                   fill={COLORS[index % COLORS.length]}
//                                 />
//                               ))}
//                             </Pie>
//                             <Tooltip
//                               contentStyle={{
//                                 backgroundColor: "#1F2937",
//                                 borderColor: "#374151",
//                               }}
//                               formatter={(value, name, props) => [
//                                 `${value} sales`,
//                                 `Category ${props.payload.category_id}`,
//                               ]}
//                             />
//                           </PieChart>
//                         </ResponsiveContainer>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>

//                 <div className="lg:col-span-2">
//                   <Card className="bg-gray-800 border-gray-700 h-full">
//                     <CardHeader>
//                       <CardTitle>Category Performance</CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="space-y-4">
//                         {categorySalesData.slice(0, 5).map((category, i) => (
//                           <div key={i}>
//                             <div className="flex justify-between items-center mb-1">
//                               <span className="text-sm">
//                                 Category {category.category_id}
//                               </span>
//                               <span className="text-sm font-medium">
//                                 {category.category_sales} sales
//                               </span>
//                             </div>
//                             <div className="w-full bg-gray-700 rounded-full h-2">
//                               <div
//                                 className="h-2 rounded-full"
//                                 style={{
//                                   width: `${
//                                     (category.category_sales / 3) * 100
//                                   }%`,
//                                   backgroundColor: COLORS[i % COLORS.length],
//                                 }}
//                               ></div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </TabsContent>
//           </Tabs>

//           {/* Recent insights */}
//           <Card className="bg-gray-800 border-gray-700">
//             <CardHeader>
//               <CardTitle>Recent Insights</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <Alert className="bg-gray-700 border-violet-500">
//                 <AlertCircle className="h-4 w-4 text-violet-500" />
//                 <AlertTitle>Sales trend detected</AlertTitle>
//                 <AlertDescription>
//                   Reusable products are showing increased sales in the last
//                   week.
//                 </AlertDescription>
//               </Alert>

//               <Alert className="bg-gray-700 border-green-500">
//                 <TrendingUp className="h-4 w-4 text-green-500" />
//                 <AlertTitle>Revenue milestone</AlertTitle>
//                 <AlertDescription>
//                   Your store has reached $4,500 in revenue for this period.
//                 </AlertDescription>
//               </Alert>
//             </CardContent>
//             <CardFooter>
//               <button className="text-violet-400 hover:text-violet-300 text-sm font-medium">
//                 View all insights
//               </button>
//             </CardFooter>
//           </Card>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default CompanyHealthDashboard;
// -----------------------------------------------------------
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Zap,
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Package,
  BarChart2,
} from "lucide-react";
import axios from "axios";

const CompanyHealthDashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [animateCharts, setAnimateCharts] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const API_KEY = "123"; 
  const BASE_URL = "http://127.0.0.1:8000/api/v1";

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      setError("No authentication token found.");
      setLoading(false);
      return;
    }

    const fetchCompanyHealth = async () => {
      try {
        setLoading(true);

        // Fetch company health data
        const { data } = await axios.get(`${BASE_URL}/get-company-health/`, {
          headers: {
            "X-API-KEY": API_KEY,
            Authorization: `Bearer ${token}`,
          },
        });

        setDashboardData(data);
        setLoading(false);

        // Trigger animations after data load
        setTimeout(() => setAnimateCharts(true), 500);
      } catch (err) {
        setError(err.message || "Failed to fetch company health data");
        setLoading(false);
      }
    };

    fetchCompanyHealth();
  }, [BASE_URL, API_KEY]);

  // Parse CSV data for charts
  const parseCSVData = (csvContent) => {
    if (!csvContent) return [];

    const lines = csvContent.trim().split("\r\n");
    const headers = lines[0].split(",");

    return lines.slice(1).map((line) => {
      const values = line.split(",");
      const entry = {};

      headers.forEach((header, index) => {
        entry[header] = isNaN(values[index])
          ? values[index]
          : Number(values[index]);
      });

      return entry;
    });
  };

  // Handle item selection for interactive highlighting
  const handleItemClick = (item) => {
    setSelectedItem(selectedItem?.name === item.name ? null : item);
  };

  // Extract metrics from text response
  const extractMetrics = (textResponse) => {
    const metrics = {
      totalRevenue: "$0",
      totalOrders: "0",
      avgOrderValue: "$0",
      activeUsers: "0",
    };

    if (!textResponse) return metrics;

    // Extract numbers using regex
    const revenueMatch = textResponse.match(/total revenue of \$(\d+(\.\d+)?)/i);
    const orderMatch = textResponse.match(/(\d+) orders/i);
    const avgOrderMatch = textResponse.match(/average order value( is)? \$(\d+(\.\d+)?)/i);
    const userMatch = textResponse.match(/(\d+) active users/i);

    if (revenueMatch) metrics.totalRevenue = `$${revenueMatch[1]}`;
    if (orderMatch) metrics.totalOrders = orderMatch[1];
    if (avgOrderMatch) metrics.avgOrderValue = `$${avgOrderMatch[2]}`;
    if (userMatch) metrics.activeUsers = userMatch[1];

    return metrics;
  };

  // Find CSV data by index
  const findCsvDataByIndex = (csvIndex) => {
    if (!dashboardData || !dashboardData.chart_configs.csv_collection.csvs) return [];
    
    const csvData = dashboardData.chart_configs.csv_collection.csvs.find(
      csv => csv.csv_index === csvIndex
    );
    
    return csvData ? parseCSVData(csvData.content) : [];
  };

  // If still loading, show loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-purple-300">Loading company insights...</p>
      </div>
    );
  }

  // If error occurred, show error state
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="bg-red-900/30 p-6 rounded-lg text-center max-w-md">
          <h2 className="text-xl font-bold text-red-400 mb-2">
            Error Loading Data
          </h2>
          <p className="text-gray-300">{error}</p>
          <button
            className="mt-4 bg-purple-600 hover:bg-purple-700 transition-colors px-4 py-2 rounded-md"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  // If no data yet, return empty state
  if (!dashboardData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <p>No data available.</p>
      </div>
    );
  }

  // Extract metrics from text response
  const metrics = extractMetrics(dashboardData.text_response);

  // Custom colors that match the landing page theme
  const COLORS = [
    "#9333EA",
    "#A855F7",
    "#C084FC",
    "#E9D5FF",
    "#F3E8FF",
    "#DDD6FE",
    "#C4B5FD",
    "#8B5CF6",
    "#7C3AED",
  ];
  const PRIMARY_COLOR = "#9333EA";
  const SECONDARY_COLOR = "#C084FC";

  // Render chart based on configuration
  const renderChart = (chartConfig,type) => {
    const data = findCsvDataByIndex(chartConfig.csv_index);
    const labelKey = chartConfig.mapping.label_column;
    const valueKey = chartConfig.mapping.value_column;
    
    // Get top 5 items for better visualization if data has more than 5 items
    const displayData = chartConfig.type === "pie" ? data : 
      [...data].sort((a, b) => b[valueKey] - a[valueKey]).slice(0, 5);
    
    switch (type.toLowerCase()) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={displayData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis type="number" stroke="#aaa" />
              <YAxis
                dataKey={labelKey}
                type="category"
                width={120}
                stroke="#aaa"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  borderColor: "#4B5563",
                  borderRadius: "0.25rem",
                  color: "#F9FAFB",
                }}
                cursor={{ fill: "rgba(147, 51, 234, 0.1)" }}
              />
              <Bar
                dataKey={valueKey}
                fill={PRIMARY_COLOR}
                onClick={handleItemClick}
                className="cursor-pointer"
              >
                {displayData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      selectedItem?.name === entry[labelKey]
                        ? "#F472B6"
                        : COLORS[index % COLORS.length]
                    }
                    opacity={
                      selectedItem && selectedItem.name !== entry[labelKey]
                        ? 0.6
                        : 1
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
      case "line":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={data}
              margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey={labelKey} stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  borderColor: "#4B5563",
                  borderRadius: "0.25rem",
                  color: "#F9FAFB",
                }}
              />
              <Line
                type="monotone"
                dataKey={valueKey}
                stroke={SECONDARY_COLOR}
                strokeWidth={3}
                dot={{
                  r: 6,
                  fill: SECONDARY_COLOR,
                  strokeWidth: 2,
                  stroke: "#1F2937",
                }}
                activeDot={{
                  r: 8,
                  fill: "#F472B6",
                  strokeWidth: 2,
                  stroke: "#1F2937",
                }}
                isAnimationActive={animateCharts}
                animationDuration={1500}
              />
            </LineChart>
          </ResponsiveContainer>
        );
      case "pie":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                innerRadius={40}
                paddingAngle={3}
                dataKey={valueKey}
                nameKey={labelKey}
                isAnimationActive={animateCharts}
                animationDuration={1500}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  percent,
                  index,
                  name,
                }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = outerRadius * 1.1;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);
                  return (
                    <text
                      x={x}
                      y={y}
                      fill={COLORS[index % COLORS.length]}
                      textAnchor={x > cx ? "start" : "end"}
                      dominantBaseline="central"
                      fontSize={12}
                    >
                      {name}
                    </text>
                  );
                }}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  borderColor: "#4B5563",
                  borderRadius: "0.25rem",
                  color: "#F9FAFB",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        );
      default:
        return (
          <div className="flex items-center justify-center h-64 bg-gray-800 rounded-lg">
            <p>Unsupported chart type: {chartConfig.type}</p>
          </div>
        );
    }
  };

  // Get all chart data for the product table
  const getAllProductData = () => {
    const productChart = dashboardData.chart_configs.primary_charts.find(
      chart => chart.title.toLowerCase().includes("product")
    );
    
    if (!productChart) return [];
    return findCsvDataByIndex(productChart.csv_index);
  };

  const productData = getAllProductData();

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-[20%] top-[-30%] h-[500px] w-[500px] rounded-full bg-[#8A2BE2] blur-[150px]" />
      </div>
      {/* Header */}
      <header className="bg-gray-800 p-4 border-b border-[#131323]">
        <div className="container mx-auto flex justify-between items-center">
          <span className="ml-2 px-3 py-1 font-bold text-gray-300 rounded-full text-3xl">
            Company Health
          </span>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-300">
              Last updated: {new Date().toLocaleDateString()}
            </span>
            <button
              className="bg-purple-600 hover:bg-purple-700 transition-colors px-3 py-1 rounded-md text-sm flex items-center"
              onClick={() => window.location.reload()}
            >
              <Zap size={16} className="mr-1" /> Refresh Data
            </button>
          </div>
        </div>
      </header>

      {/* Main dashboard content */}
      <main className="container mx-auto bg-gray-800 p-4 flex-1">
        {/* Key Metrics */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 transition-all duration-500 ${
            animateCharts
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-[#131323] rounded-lg p-4 border-l-4 border-purple-500 shadow-lg hover:shadow-purple-900/20 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold mt-1">
                  {metrics.totalRevenue}
                </p>
              </div>
              <div className="bg-purple-900/30 p-2 rounded-lg">
                <DollarSign size={24} className="text-purple-400" />
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-400">Current period</div>
          </div>

          <div className="bg-[#131323] rounded-lg p-4 border-l-4 border-indigo-500 shadow-lg hover:shadow-indigo-900/20 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Total Orders</p>
                <p className="text-2xl font-bold mt-1">{metrics.totalOrders}</p>
              </div>
              <div className="bg-indigo-900/30 p-2 rounded-lg">
                <ShoppingBag size={24} className="text-indigo-400" />
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-400">
              Across all channels
            </div>
          </div>

          <div className="bg-[#131323] rounded-lg p-4 border-l-4 border-violet-500 shadow-lg hover:shadow-violet-900/20 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Avg Order Value</p>
                <p className="text-2xl font-bold mt-1">
                  {metrics.avgOrderValue}
                </p>
              </div>
              <div className="bg-violet-900/30 p-2 rounded-lg">
                <TrendingUp size={24} className="text-violet-400" />
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-400">Per transaction</div>
          </div>

          <div className="bg-[#131323] rounded-lg p-4 border-l-4 border-fuchsia-500 shadow-lg hover:shadow-fuchsia-900/20 transition-all">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm">Active Users</p>
                <p className="text-2xl font-bold mt-1">{metrics.activeUsers}</p>
              </div>
              <div className="bg-fuchsia-900/30 p-2 rounded-lg">
                <Users size={24} className="text-fuchsia-400" />
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-400">Currently engaging</div>
          </div>
        </div>

        {/* Primary Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {dashboardData.chart_configs.primary_charts.map((chartConfig, index) => (
            <div
              key={`primary-chart-${index}`}
              className={`bg-[#131323] rounded-lg p-4 shadow-lg transition-all duration-700 ${
                animateCharts
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${100 * (index + 1)}ms` }}
            >
              <h2 className="text-lg font-medium mb-4 text-purple-300 flex items-center">
                <BarChart2 size={20} className="mr-2" /> {chartConfig.title}
              </h2>
              {renderChart(chartConfig,"bar")}
            </div>
          ))}
        </div>

        {/* Secondary Charts Section */}
        {dashboardData.chart_configs.secondary_charts && dashboardData.chart_configs.secondary_charts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {dashboardData.chart_configs.secondary_charts.map((chartConfig, index) => (
              <div
                key={`secondary-chart-${index}`}
                className={`bg-[#131323] rounded-lg p-4 shadow-lg transition-all duration-700 ${
                  animateCharts
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${100 * (index + 3)}ms` }}
              >
                <h2 className="text-lg font-medium mb-4 text-purple-300 flex items-center">
                  <BarChart2 size={20} className="mr-2" /> {chartConfig.title}
                </h2>
                {renderChart(chartConfig,"line")}
              </div>
            ))}
          </div>
        )}

        {/* Insights Section */}
        <div
          className={`bg-[#131323] rounded-lg p-6 shadow-lg mb-6 transition-all duration-700 ${
            animateCharts
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <h2 className="text-lg font-medium mb-2 text-purple-300 flex items-center">
            <Zap size={20} className="mr-2" /> AI Insights
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {dashboardData.text_response}
          </p>
        </div>

        {/* Full Products Table (if product data exists) */}
        {productData && productData.length > 0 && (
          <div
            className={`bg-[#131323] rounded-lg p-4 shadow-lg mb-6 transition-all duration-700 ${
              animateCharts
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <h2 className="text-lg font-medium mb-4 text-purple-300 flex items-center">
              <Package size={20} className="mr-2" /> Product Performance
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-700 text-left">
                    <th className="p-3 rounded-tl-lg">Product Name</th>
                    <th className="p-3 rounded-tr-lg">Total Sales</th>
                  </tr>
                </thead>
                <tbody>
                  {productData.map((product, index) => {
                    // Find the highest value to calculate percentage
                    const maxValue = Math.max(...productData.map(p => p.total_sales));
                    
                    return (
                      <tr
                        key={index}
                        className={`border-b border-gray-700 hover:bg-gray-700/50 transition-colors ${
                          selectedItem?.name === product.name
                            ? "bg-purple-900/20"
                            : ""
                        }`}
                        onClick={() => handleItemClick(product)}
                      >
                        <td className="p-3 font-medium">{product.name}</td>
                        <td className="p-3">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                              <div
                                className="bg-purple-500 h-2 rounded-full"
                                style={{
                                  width: `${
                                    (product.total_sales / maxValue) * 100
                                  }%`,
                                }}
                              ></div>
                            </div>
                            {product.total_sales}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 border-t border-[#131323] text-center text-gray-400 text-sm">
        <p>Powered by AnalyticaAI • LLM Powered Data Analytics Solution</p>
      </footer>
    </div>
  );
};

export default CompanyHealthDashboard;