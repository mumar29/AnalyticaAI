
// ------------------------------------------------------------------------------------
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";
// import ReportEditor from "./ReportEditor";
// import ReportViewer from "./ReportViewer";
// import Visualization from "./Visualization";
// import {
//   PaperAirplaneIcon,
//   PencilSquareIcon,
//   ChartBarIcon,
//   DocumentArrowDownIcon,
//   BookOpenIcon,
// } from "@heroicons/react/24/outline";

// const API_BASE_URL = "http://localhost:8000/api/v1";
// const token = localStorage.getItem("token");

// const ChatInterface = () => {
//   const [messages, setMessages] = useState([
//     { role: "system", content: "How can I assist you today?" },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [report, setReport] = useState("");
//   const [plotPath, setPlotPath] = useState(null);
//   const [sessionId, setSessionId] = useState(null);
//   const [requestId, setRequestId] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [charts, setCharts] = useState({});
//   const [htmlReport, setHtmlReport] = useState(null);
//   const [generatingReport, setGeneratingReport] = useState(false);
//   const [isReportOpen, setIsReportOpen] = useState(false);
  
//   // Debug state changes
//   useEffect(() => {
//     console.log("State updated:", { 
//       hasReport: !!report,
//       hasHtmlReport: !!htmlReport,
//       isEditing,
//       isReportOpen,
//       generatingReport
//     });
//   }, [report, htmlReport, isEditing, isReportOpen, generatingReport]);

//   // Handle safely making API calls to avoid browser-polyfill errors
//   const safeApiCall = async (apiCall) => {
//     try {
//       return await apiCall();
//     } catch (error) {
//       // Check for extension context invalidated error
//       if (error.message && error.message.includes("Extension context invalidated")) {
//         console.warn("Extension context error encountered. This may happen during development or hot reloading.");
//         return { error: "Extension context invalidated" };
//       }
//       throw error;
//     }
//   };

//   // 🔹 Handle user query
//   const handleSend = async () => {
//     if (!input.trim() || loading) return;

//     const newMessages = [...messages, { role: "user", content: input }];
//     setMessages(newMessages);
//     setInput("");
//     setLoading(true);

//     try {
//       // If it's the first message, call /query, else use /query/{session_id}
//       const endpoint = sessionId ? `/query/${sessionId}` : "/query";

//       const res = await safeApiCall(() => 
//         axios.post(
//           `${API_BASE_URL}${endpoint}`,
//           { text: input },
//           { headers: { "X-API-Key": "123", Authorization: `Bearer ${token}` } }
//         )
//       );
      
//       if (res.error) {
//         throw new Error(res.error);
//       }

//       console.log("API Response:", res.data);

//       // Extract text response based on response structure
//       let systemResponse = "No response available.";
//       if (res.data.text_response) {
//         systemResponse = res.data.text_response;
//       } else if (res.data.chart_configs && res.data.chart_configs.text_response) {
//         systemResponse = res.data.chart_configs.text_response;
//       }

//       setMessages([
//         ...newMessages,
//         { role: "system", content: systemResponse },
//       ]);
//       setReport(systemResponse);

//       // Store session_id from the response
//       if (!sessionId) {
//         if (res.data.session_id) {
//           setSessionId(res.data.session_id);
//         } else if (res.data.chart_configs && res.data.chart_configs.session_id) {
//           setSessionId(res.data.chart_configs.session_id);
//         }
//       }

//       // Store request_id if available
//       if (res.data.request_id) {
//         setRequestId(res.data.request_id);
//       } else if (res.data.chart_configs && res.data.chart_configs.request_id) {
//         setRequestId(res.data.chart_configs.request_id);
//       }

//       // Store chart config if available
//       const currentMessageIndex = newMessages.length;
//       if (res.data.chart_configs) {
//         setCharts((prevCharts) => ({
//           ...prevCharts,
//           [currentMessageIndex]: res.data.chart_configs,
//         }));
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessages([
//         ...newMessages,
//         { role: "system", content: "Error processing request. Try again." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🔹 Generate Structured HTML Report
//   const generateReport = async () => {
//     if (!requestId) {
//       alert("No request ID available. Please send a query first.");
//       return;
//     }

//     setGeneratingReport(true);
//     // Open the report panel to show the loading state
//     setIsReportOpen(true);

//     try {
//       const res = await safeApiCall(() => 
//         axios.get(
//           `${API_BASE_URL}/generate-report/${requestId}`,
//           { 
//             headers: { 
//               "X-API-Key": "123", 
//               Authorization: `Bearer ${token}` 
//             }
//           }
//         )
//       );
      
//       if (res.error) {
//         throw new Error(res.error);
//       }

//       console.log("Report Response:", res.data);
      
//       if (res.data && res.data.html) {
//         setHtmlReport(res.data.html);
//         // Important: update the report state with the text version of the HTML
//         const tempDiv = document.createElement('div');
//         tempDiv.innerHTML = res.data.html;
//         setReport(tempDiv.textContent || tempDiv.innerText || "");
//       } else {
//         alert("No HTML report content received from the server.");
//       }
//     } catch (error) {
//       console.error("Error generating report:", error);
//       alert(`Error generating report: ${error.response?.data?.detail || error.message}`);
//     } finally {
//       setGeneratingReport(false);
//     }
//   };

//   // 🔹 Download Report as PDF
//   const downloadPDF = () => {
//     if (!report && !htmlReport) {
//       alert("No report to download.");
//       return;
//     }

//     const content = htmlReport || report;
//     const element = document.createElement("a");
//     const file = new Blob([content], { type: "application/pdf" });
//     element.href = URL.createObjectURL(file);
//     element.download = "Report.pdf";
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };

//   // 🔹 Handle saving edited report
//   const handleSaveReport = (updatedContent) => {
//     console.log("Saving updated report content");
//     setReport(updatedContent);
//     // Clear HTML report when text is edited to maintain consistency
//     setHtmlReport(null);
//     setIsEditing(false);
//   };

//   // 🔹 Toggle report panel
//   const toggleReportPanel = () => {
//     setIsReportOpen(!isReportOpen);
//   };

//   // 🔹 Handle edit button click
//   const handleEditClick = () => {
//     console.log("Edit button clicked, opening editor");
//     setIsEditing(true);
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-900 text-white px-8">
//       {/* Chat Messages */}
//       <div 
//         className="flex-1 flex flex-col p-6 space-y-4 overflow-auto"
//         style={{
//           marginRight: isReportOpen ? "33.333%" : "0",
//           transition: "margin-right 0.3s ease-in-out"
//         }}
//       >
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`p-2 ${
//               message.role === "user" ? "text-right" : "text-left"
//             }`}
//           >
//             <div
//               className={`inline-block p-3 rounded-lg max-w-2xl ${
//                 message.role === "user"
//                   ? "bg-purple-600 text-white"
//                   : "bg-gray-800 text-gray-200"
//               }`}
//             >
//               {message.role === "system" ? (
//                 <ReactMarkdown>{message.content}</ReactMarkdown>
//               ) : (
//                 message.content
//               )}
//             </div>
            
//             {/* Render Chart if available for this response */}
//             {charts[index] && (
//               <div className="mt-4 w-full">
//                 <Visualization chartConfig={charts[index]} />
//               </div>
//             )}
//           </div>
//         ))}

//         {loading && (
//           <div className="text-center text-gray-400 mt-2 animate-pulse">
//             Thinking...
//           </div>
//         )}
//       </div>

//       {/* Input Area with Two Rows */}
//       <div 
//         className="fixed bottom-6 left-[280px] right-6 flex flex-col bg-gray-800 rounded-lg p-3 shadow-lg"
//         style={{
//           maxWidth: isReportOpen ? "calc(66.667% - 300px)" : "calc(100% - 300px)",
//           transition: "max-width 0.3s ease-in-out"
//         }}
//       >
//         {/* 🔹 Top Row: Input Field + Send Button */}
//         <div className="flex items-center">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask a question..."
//             onKeyPress={(e) => e.key === "Enter" && handleSend()}
//             className="flex-1 bg-transparent text-white outline-none p-2"
//             disabled={loading || generatingReport}
//           />
//           <button
//             onClick={handleSend}
//             className="p-3 bg-purple-600 text-white rounded-lg"
//             disabled={loading || generatingReport}
//           >
//             {loading ? (
//               <span className="animate-spin">⏳</span>
//             ) : (
//               <PaperAirplaneIcon className="w-5 h-5" />
//             )}
//           </button>
//         </div>

//         {/* 🔹 Bottom Row: Action Buttons (Centered) */}
//         <div className="flex justify-center space-x-4 mt-2">
//           <button
//             onClick={toggleReportPanel}
//             className={`p-3 rounded-lg flex items-center ${
//               isReportOpen ? "bg-purple-600 text-white" : "bg-blue-600 text-white"
//             }`}
//           >
//             <BookOpenIcon className="w-5 h-5" />
//           </button>
//           <button
//             onClick={generateReport}
//             className={`p-3 rounded-lg flex items-center ${
//               requestId ? "bg-blue-600 text-white" : "bg-gray-600 text-gray-400"
//             }`}
//             disabled={!requestId || generatingReport}
//           >
//             {generatingReport ? (
//               <span className="animate-spin">⏳</span>
//             ) : (
//               <ChartBarIcon className="w-5 h-5" />
//             )}
//           </button>
//           <button
//             onClick={handleEditClick}
//             className="p-3 bg-blue-600 text-white rounded-lg flex items-center"
//             disabled={generatingReport}
//           >
//             <PencilSquareIcon className="w-5 h-5" />
//           </button>
//           <button
//             onClick={downloadPDF}
//             className="p-3 bg-gray-600 text-white rounded-lg flex items-center"
//             disabled={generatingReport || (!report && !htmlReport)}
//           >
//             <DocumentArrowDownIcon className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Report Viewer */}
//       <ReportViewer 
//         isOpen={isReportOpen}
//         onClose={() => setIsReportOpen(false)}
//         reportContent={report}
//         htmlReport={htmlReport}
//         onEdit={handleEditClick}
//         onDownload={downloadPDF}
//         isGenerating={generatingReport}
//       />

//       {/* Report Editor */}
//       {isEditing && (
//         <ReportEditor
//           initialContent={report}
//           htmlReport={htmlReport}
//           onClose={() => setIsEditing(false)}
//           onSave={handleSaveReport}
//         />
//       )}

//       {/* CSS for animations */}
//       <style jsx global>{`
//         @keyframes slide-in {
//           from { transform: translateX(100%); }
//           to { transform: translateX(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ChatInterface;

import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import ReportEditor from "./ReportEditor";
import ReportViewer from "./ReportViewer";
import Visualization from "./Visualization";
import {
  PaperAirplaneIcon,
  PencilSquareIcon,
  ChartBarIcon,
  DocumentArrowDownIcon,
  BookOpenIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const API_BASE_URL = "http://127.0.0.1:8000/api/v1";
const token = localStorage.getItem("token");

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { role: "system", content: "How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Report states
  const [report, setReport] = useState("");
  const [htmlReport, setHtmlReport] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [generatingReport, setGeneratingReport] = useState(false);
  const [updatingReport, setUpdatingReport] = useState(false);
  const [updateInstructions, setUpdateInstructions] = useState("");
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  
  // Session states
  const [plotPath, setPlotPath] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [requestId, setRequestId] = useState(null);
  const [charts, setCharts] = useState({});
  
  // Debug state changes
  useEffect(() => {
    console.log("State updated:", { 
      hasReport: !!report,
      hasHtmlReport: !!htmlReport,
      isEditing,
      isReportOpen,
      generatingReport,
      updatingReport
    });
  }, [report, htmlReport, isEditing, isReportOpen, generatingReport, updatingReport]);

  // Handle safely making API calls to avoid browser-polyfill errors
  const safeApiCall = async (apiCall) => {
    try {
      return await apiCall();
    } catch (error) {
      // Check for extension context invalidated error
      if (error.message && error.message.includes("Extension context invalidated")) {
        console.warn("Extension context error encountered. This may happen during development or hot reloading.");
        return { error: "Extension context invalidated" };
      }
      throw error;
    }
  };

  // Update report content consistently
  const updateReportContent = (textContent, htmlContent = null) => {
    setReport(textContent || "");
    setHtmlReport(htmlContent);
    
    // If we have a report, make sure the report panel is open
    if (textContent || htmlContent) {
      setIsReportOpen(true);
    }
  };

  // 🔹 Handle user query
  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      // If it's the first message, call /query, else use /query/{session_id}
      const endpoint = sessionId ? `/query/${sessionId}` : "/query";

      const res = await safeApiCall(() => 
        axios.post(
          `${API_BASE_URL}${endpoint}`,
          { text: input },
          { headers: { "X-API-Key": "123", Authorization: `Bearer ${token}` } }
        )
      );
      
      if (res.error) {
        throw new Error(res.error);
      }

      console.log("API Response:", res.data);

      // Extract text response based on response structure
      let systemResponse = "No response available.";
      if (res.data.text_response) {
        systemResponse = res.data.text_response;
      } else if (res.data.chart_configs && res.data.chart_configs.text_response) {
        systemResponse = res.data.chart_configs.text_response;
      }

      setMessages([
        ...newMessages,
        { role: "system", content: systemResponse },
      ]);
      
      // Update report content
      updateReportContent(systemResponse);

      // Store session_id from the response
      if (!sessionId) {
        if (res.data.session_id) {
          setSessionId(res.data.session_id);
        } else if (res.data.chart_configs && res.data.chart_configs.session_id) {
          setSessionId(res.data.chart_configs.session_id);
        }
      }

      // Store request_id if available
      if (res.data.request_id) {
        setRequestId(res.data.request_id);
      } else if (res.data.chart_configs && res.data.chart_configs.request_id) {
        setRequestId(res.data.chart_configs.request_id);
      }

      // Store chart config if available
      const currentMessageIndex = newMessages.length;
      if (res.data.chart_configs) {
        setCharts((prevCharts) => ({
          ...prevCharts,
          [currentMessageIndex]: res.data.chart_configs,
        }));
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages([
        ...newMessages,
        { role: "system", content: "Error processing request. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Generate Structured HTML Report
  const generateReport = async () => {
    if (!requestId) {
      alert("No request ID available. Please send a query first.");
      return;
    }

    setGeneratingReport(true);
    // Open the report panel to show the loading state
    setIsReportOpen(true);

    try {
      const res = await safeApiCall(() => 
        axios.get(
          `${API_BASE_URL}/generate-report/${requestId}`,
          { 
            headers: { 
              "X-API-Key": "123", 
              Authorization: `Bearer ${token}` 
            }
          }
        )
      );
      
      if (res.error) {
        throw new Error(res.error);
      }

      console.log("Report Response:", res.data);
      
      if (res.data && res.data.html) {
        // Extract text content from HTML for consistent state
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = res.data.html;
        const textContent = tempDiv.textContent || tempDiv.innerText || "";
        
        // Update both states consistently
        updateReportContent(textContent, res.data.html);
      } else {
        alert("No HTML report content received from the server.");
      }
    } catch (error) {
      console.error("Error generating report:", error);
      alert(`Error generating report: ${error.response?.data?.detail || error.message}`);
    } finally {
      setGeneratingReport(false);
    }
  };

  // 🔹 NEW: Function to update existing report
  const updateReport = async () => {
    if (!htmlReport) {
      alert("No HTML report available to update. Please generate a report first.");
      return;
    }

    setUpdatingReport(true);

    try {
      const res = await safeApiCall(() =>
        axios.post(
          `${API_BASE_URL}/update_strutured_report`,
          {
            originalHtml: htmlReport,
            generalInstruction: updateInstructions
          },
          {
            headers: {
              "X-API-Key": "123",
              Authorization: `Bearer ${token}`
            }
          }
        )
      );

      if (res.error) {
        throw new Error(res.error);
      }

      console.log("Update Report Response:", res.data);

      if (res.data && res.data.html) {
        // Extract text content from HTML for consistent state
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = res.data.html;
        const textContent = tempDiv.textContent || tempDiv.innerText || "";
        
        // Update both states consistently
        updateReportContent(textContent, res.data.html);
        
        // Add a system message about the update
        setMessages([
          ...messages,
          { 
            role: "system", 
            content: `Report updated successfully according to: "${updateInstructions}"` 
          },
        ]);
        
        // Close the update modal
        setIsUpdateModalOpen(false);
        setUpdateInstructions("");
      } else {
        alert("No updated HTML report content received from the server.");
      }
    } catch (error) {
      console.error("Error updating report:", error);
      alert(`Error updating report: ${error.response?.data?.detail || error.message}`);
    } finally {
      setUpdatingReport(false);
    }
  };

  // 🔹 Download Report as PDF
  const downloadPDF = () => {
    if (!report && !htmlReport) {
      alert("No report to download.");
      return;
    }

    const content = htmlReport || report;
    const element = document.createElement("a");
    const file = new Blob([content], { type: "application/pdf" });
    element.href = URL.createObjectURL(file);
    element.download = "Report.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // 🔹 Handle saving edited report
  const handleSaveReport = (updatedContent, wasHtmlReport) => {
    console.log("Saving updated report content", { wasHtmlReport });
    
    // If editing an HTML report, we need to mark the HTML version as invalid
    if (wasHtmlReport) {
      updateReportContent(updatedContent, null);
    } else {
      updateReportContent(updatedContent, htmlReport);
    }
    
    setIsEditing(false);
  };

  // 🔹 Toggle report panel
  const toggleReportPanel = () => {
    setIsReportOpen(!isReportOpen);
  };

  // 🔹 Handle edit button click
  const handleEditClick = () => {
    console.log("Edit button clicked, opening editor");
    setIsEditing(true);
  };

  // 🔹 Toggle update report modal
  const toggleUpdateModal = () => {
    setIsUpdateModalOpen(!isUpdateModalOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white px-8">
      {/* Chat Messages */}
      <div 
        className="flex-1 flex flex-col p-6 space-y-4 overflow-auto"
        style={{
          marginRight: isReportOpen ? "33.333%" : "0",
          transition: "margin-right 0.3s ease-in-out"
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 ${
              message.role === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg max-w-2xl ${
                message.role === "user"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 text-gray-200"
              }`}
            >
              {message.role === "system" ? (
                <ReactMarkdown>{message.content}</ReactMarkdown>
              ) : (
                message.content
              )}
            </div>
            
            {/* Render Chart if available for this response */}
            {charts[index] && (
              <div className="mt-4 w-full">
                <Visualization chartConfig={charts[index]} />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="text-center text-gray-400 mt-2 animate-pulse">
            Thinking...
          </div>
        )}
      </div>

      {/* Input Area with Two Rows */}
      <div 
        className="fixed bottom-6 left-[280px] right-6 flex flex-col bg-gray-800 rounded-lg p-3 shadow-lg"
        style={{
          maxWidth: isReportOpen ? "calc(66.667% - 300px)" : "calc(100% - 300px)",
          transition: "max-width 0.3s ease-in-out"
        }}
      >
        {/* 🔹 Top Row: Input Field + Send Button */}
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 bg-transparent text-white outline-none p-2"
            disabled={loading || generatingReport || updatingReport}
          />
          <button
            onClick={handleSend}
            className="p-3 bg-purple-600 text-white rounded-lg"
            disabled={loading || generatingReport || updatingReport}
          >
            {loading ? (
              <span className="animate-spin">⏳</span>
            ) : (
              <PaperAirplaneIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* 🔹 Bottom Row: Action Buttons (Centered) */}
        <div className="flex justify-center space-x-4 mt-2">
          <button
            onClick={toggleReportPanel}
            className={`p-3 rounded-lg flex items-center ${
              isReportOpen ? "bg-purple-600 text-white" : "bg-blue-600 text-white"
            }`}
          >
            <BookOpenIcon className="w-5 h-5" />
          </button>
          <button
            onClick={generateReport}
            className={`p-3 rounded-lg flex items-center ${
              requestId ? "bg-blue-600 text-white" : "bg-gray-600 text-gray-400"
            }`}
            disabled={!requestId || generatingReport || updatingReport}
          >
            {generatingReport ? (
              <span className="animate-spin">⏳</span>
            ) : (
              <ChartBarIcon className="w-5 h-5" />
            )}
          </button>
          {/* Update Report Button */}
          <button
            onClick={toggleUpdateModal}
            className={`p-3 rounded-lg flex items-center ${
              htmlReport ? "bg-green-600 text-white" : "bg-gray-600 text-gray-400"
            }`}
            disabled={!htmlReport || updatingReport || generatingReport}
          >
            {updatingReport ? (
              <span className="animate-spin">⏳</span>
            ) : (
              <ArrowPathIcon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={handleEditClick}
            className={`p-3 rounded-lg flex items-center ${
              report || htmlReport ? "bg-blue-600 text-white" : "bg-gray-600 text-gray-400"
            }`}
            disabled={generatingReport || updatingReport || (!report && !htmlReport)}
          >
            <PencilSquareIcon className="w-5 h-5" />
          </button>
          <button
            onClick={downloadPDF}
            className={`p-3 rounded-lg flex items-center ${
              report || htmlReport ? "bg-gray-600 text-white" : "bg-gray-600 text-gray-400"
            }`}
            disabled={generatingReport || updatingReport || (!report && !htmlReport)}
          >
            <DocumentArrowDownIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Report Viewer */}
      <ReportViewer 
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        reportContent={report}
        htmlReport={htmlReport}
        onEdit={handleEditClick}
        onDownload={downloadPDF}
        onUpdate={toggleUpdateModal}
        isGenerating={generatingReport}
        isUpdating={updatingReport}
      />

      {/* Report Editor */}
      {isEditing && (
        <ReportEditor
          initialContent={report}
          htmlReport={htmlReport}
          onClose={() => setIsEditing(false)}
          onSave={handleSaveReport}
        />
      )}

      {/* Update Report Modal */}
      {isUpdateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-2/3 max-w-2xl">
            <h3 className="text-xl font-bold mb-4">Update Report</h3>
            <p className="text-gray-300 mb-4">
              Enter instructions for updating the current report:
            </p>
            <textarea
              value={updateInstructions}
              onChange={(e) => setUpdateInstructions(e.target.value)}
              placeholder="E.g., Change the text color to red, add a new section about market trends, etc."
              className="w-full h-32 p-2 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              disabled={updatingReport}
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={toggleUpdateModal}
                className="px-4 py-2 bg-gray-700 text-white rounded-lg"
                disabled={updatingReport}
              >
                Cancel
              </button>
              <button
                onClick={updateReport}
                className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center"
                disabled={!updateInstructions.trim() || updatingReport}
              >
                {updatingReport ? (
                  <span className="animate-spin mr-2">⏳</span>
                ) : null}
                Update Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;