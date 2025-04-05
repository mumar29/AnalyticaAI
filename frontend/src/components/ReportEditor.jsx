import React, { useState, useEffect } from "react";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

const ReportEditor = ({ initialContent, htmlReport, onClose, onSave }) => {
  const [content, setContent] = useState("");
  const [isHtmlReport, setIsHtmlReport] = useState(false);
  
  // Set content based on HTML report or initial content
  useEffect(() => {
    console.log("ReportEditor initialized with:", {
      hasInitialContent: !!initialContent,
      hasHtmlReport: !!htmlReport
    });
    
    // If HTML report exists, convert it to plain text for editing
    if (htmlReport) {
      // Create a temporary div to parse HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlReport;
      setContent(tempDiv.textContent || tempDiv.innerText || "");
      setIsHtmlReport(true);
    } else {
      setContent(initialContent || "");
      setIsHtmlReport(false);
    }
  }, [initialContent, htmlReport]);
  
  const handleSave = () => {
    console.log("Saving edited content:", content.substring(0, 100) + "...");
    // Pass along whether this was originally an HTML report to help maintain state consistency
    onSave(content, isHtmlReport);
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex justify-end pointer-events-auto">
      <div 
        className="bg-gray-900 shadow-lg w-1/3 min-w-[400px] max-w-[600px] border-l border-gray-700 pointer-events-auto"
        style={{ 
          height: '100vh',
          animation: 'slide-in 0.3s ease-out forwards'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center shadow-md">
          <h2 className="text-xl font-semibold text-white">Edit Report</h2>
          <div className="flex items-center space-x-3">
            {/* Save button */}
            <button 
              onClick={handleSave}
              className="p-1 text-green-500 hover:text-green-400 rounded-md"
              title="Save changes"
            >
              <CheckIcon className="w-5 h-5" />
            </button>
            
            {/* Close button */}
            <button 
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-white rounded-md"
              title="Close without saving"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Editor area */}
        <div className="p-6 h-[calc(100vh-70px)] flex flex-col">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="flex-1 bg-gray-800 text-white p-4 rounded-lg resize-none border border-gray-700 focus:border-purple-500 focus:outline-none"
            placeholder="Edit your report content here..."
            autoFocus
          />
          
          {isHtmlReport && (
            <div className="mt-2 text-yellow-400 text-sm">
              <p>Note: You are editing HTML content in text form. Saving will convert this to plain text.</p>
            </div>
          )}
          
          <div className="flex justify-end mt-4 space-x-3">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportEditor;