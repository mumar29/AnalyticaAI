import React, { useState } from "react";
import axios from "axios";
import ReportEditor from "./ReportEditor";
import ReactMarkdown from "react-markdown";
import { PaperAirplaneIcon, PencilSquareIcon, ChartBarIcon, DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(""); 
  const [plotPath, setPlotPath] = useState(null); 
  const [isEditing, setIsEditing] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://127.0.0.1:5000/query", { query: input });

      console.log("API Response:", res.data);
      const systemResponse = res.data.report || "Sorry, I couldn't process that.";
      const image = res.data.visualization || null;

      setMessages([...newMessages, { role: "system", content: systemResponse }]);
      setReport(systemResponse);
      setPlotPath(image);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { role: "system", content: "Error processing request. Try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Chat Messages Section */}
      <div className="flex-1 flex flex-col p-6 space-y-4 overflow-auto">
        {messages.map((message, index) => (
          <div key={index} className={`p-2 ${message.role === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block p-3 rounded-lg max-w-2xl ${message.role === "user" ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-200"}`}>
              {message.role === "system" ? <ReactMarkdown >{message.content}</ReactMarkdown> : message.content}
            </div>
          </div>
        ))}
        {loading && <div className="text-center text-gray-400 mt-2 animate-pulse">Thinking...</div>}
      </div>

      {/* Input & Send Button */}
      <div className="absolute bottom-6 left-64 right-6 flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 p-3 bg-gray-800 text-white rounded-lg focus:outline-none"
          disabled={loading}
        />
        <button onClick={handleSend} className="bg-purple-600 p-3 rounded-lg" disabled={loading}>
          {loading ? <span className="animate-spin">⏳</span> : <PaperAirplaneIcon className="w-5 h-5 text-white" />}
        </button>
      </div>

      {/* Report Section */}
      {report && (
        <div className="absolute bottom-20 left-64 right-6 bg-gray-800 p-4 rounded-lg max-h-[300px] overflow-auto shadow-lg">
          <h3 className="text-lg font-semibold">Generated Report</h3>
          <ReactMarkdown className="prose text-gray-300">{report}</ReactMarkdown>
        </div>
      )}

      {/* Action Buttons */}
      <div className="absolute bottom-6 right-6 flex space-x-2">
        <button
          onClick={() => plotPath && window.open(`http://127.0.0.1:5000/${plotPath}`, "_blank")}
          className={`p-3 rounded-lg flex items-center ${plotPath ? "bg-green-600 text-white" : "bg-gray-600 text-gray-400"}`}
          disabled={!plotPath}
        >
          <ChartBarIcon className="w-5 h-5" />
        </button>
        <button onClick={() => setIsEditing(true)} className="p-3 bg-blue-600 text-white rounded-lg flex items-center">
          <PencilSquareIcon className="w-5 h-5" />
        </button>
        <button className="p-3 bg-gray-600 text-white rounded-lg flex items-center">
          <DocumentArrowDownIcon className="w-5 h-5" />
        </button>
      </div>

      {/* Report Editor */}
      {isEditing && (
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-900 shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Edit Report</h2>
          <ReportEditor initialContent={report} onClose={() => setIsEditing(false)} />
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
