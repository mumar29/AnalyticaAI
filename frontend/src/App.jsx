// import { useEffect, useState } from 'react'
import "./App.css";
import ChatInterface from "./components/ChatInterface";
import "tailwindcss";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./Components/AdminDashboard";
import ManageUsers from "./Components/ManageUsers";
import ManageDatabases from "./Components/ManageDatabases";
import SQLTab from "./Components/SQLTab";
import DocumentsTab from "./Components/DocumentsTab";
import ManageApiKeys from "./Components/ManageApiKeys";

function App() {
  // const [query, setQuery] = useState("")
  // const [queryResult, setQueryResult] = useState("")
  // const [report, setReport] = useState("")
  // const [image, setImage] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/userDashboard" element={<Layout />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/manage-users" element={<ManageUsers />} />
            <Route path="/manage-databases" element={<ManageDatabases />}>
              <Route index element={<SQLTab />} />
              <Route path="sql" element={<SQLTab />} />
              <Route path="documents" element={<DocumentsTab />} />
            </Route>
            <Route path="/sql" element={<SQLTab />} />
            <Route path="/documents" element={<DocumentsTab />} />
            <Route path="/manage-api-keys" element={<ManageApiKeys />} />
            {/* <Route path="/chat" element={<ChatInterface />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
