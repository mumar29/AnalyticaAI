"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMessageCircle } from "react-icons/fi";
import axios from "axios";

export default function History() {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchConversations = async () => {
      setLoading(true);
      setError("");
  
      const token = localStorage.getItem("token");
      const API_KEY = "123"; // Replace with actual API key
      const BASE_URL = "http://127.0.0.1:8000/api/v1";
  
      if (!token) {
        setError("No authentication token found.");
        setLoading(false);
        return;
      }
  
      try {
        // Fetch all conversations for the user
        const { data } = await axios.get(`${BASE_URL}/get-conversations/`, {
          headers: {
            "X-API-Key": API_KEY,
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log(data); // Debugging: Check what data looks like
  
        // Map conversations to extract titles
        const formattedConversations = data.map((conversation) => ({
          id: conversation.id, // Use `id` instead of `session_id` if that's correct
          title: conversation.title || "Untitled Chat", // Use API title if available
        }));
  
        setConversations(formattedConversations);
      } catch (err) {
        console.error("Error fetching conversations:", err);
        setError("Failed to load conversations.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchConversations();
  }, []);
  

  if (loading) {
    return <div className="text-center text-gray-400">Loading history...</div>;
  }

  if (error) {
    return <div className="text-center text-red-400">{error}</div>;
  }

  return (
    <div className="relative p-10">
      {/* Animated Glow Effect */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute left-[20%] top-[-30%] h-[500px] w-[500px] rounded-full bg-[#0ffff1] blur-[150px]" />
      </div>

      <h2 className="mb-6 text-3xl font-bold text-[#0ffff1]">Conversation History</h2>

      {/* History Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {conversations.map((conversation) => (
          <motion.div
            key={conversation.id}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-lg p-6 bg-[#131323] shadow-md text-gray-300 hover:bg-[#0ffff1] hover:text-black transition-all cursor-pointer"
            onClick={() => alert(`Open chat: ${conversation.id}`)}
          >
            <FiMessageCircle className="absolute top-4 right-4 text-xl text-[#0ffff1]" />
            <h3 className="text-lg font-semibold">{conversation.title}</h3>
            <p className="text-sm text-gray-400 mt-2">Session ID: {conversation.id}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
