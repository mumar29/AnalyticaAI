import { useEffect, useState } from 'react'
import './App.css'
import ChatInterface from './components/ChatInterface';
import "tailwindcss";
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const [query, setQuery] = useState("")
  const [queryResult, setQueryResult] = useState("")
  const [report, setReport] = useState("")
  const [image, setImage] = useState(null)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        {/* Protected routes */}
          <Route element={<ProtectedRoute/>}>
            <Route path='/userDashboard' element={<Layout/>}/>
            {/* <Route path="/chat" element={<ChatInterface />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App
