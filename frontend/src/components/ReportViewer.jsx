import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { 
  XMarkIcon, 
  PencilIcon, 
  DocumentArrowDownIcon, 
  ArrowPathIcon 
} from "@heroicons/react/24/outline";

const ReportViewer = ({ 
  isOpen, 
  onClose, 
  reportContent, 
  htmlReport, 
  onEdit, 
  onDownload,
  onUpdate,
  isGenerating,
  isUpdating
}) => {
  const [isPinned, setIsPinned] = useState(false);
  const [displayContent, setDisplayContent] = useState(null);
  const panelRef = useRef(null);
  
  // Debugging
  useEffect(() => {
    console.log("ReportViewer render state:", { 
      isOpen, 
      hasReportContent: !!reportContent, 
      hasHtmlReport: !!htmlReport,
      isGenerating,
      isUpdating
    });
  }, [isOpen, reportContent, htmlReport, isGenerating, isUpdating]);
  
  // Update display content whenever props change
  useEffect(() => {
    if (htmlReport) {
      setDisplayContent({ type: 'html', content: htmlReport });
    } else if (reportContent) {
      setDisplayContent({ type: 'markdown', content: reportContent });
    } else {
      setDisplayContent(null);
    }
  }, [htmlReport, reportContent]);
  
  // Close on escape key press
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen && !isPinned) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose, isPinned]);
  
  // Close on outside click unless pinned
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        panelRef.current && 
        !panelRef.current.contains(e.target) && 
        isOpen && 
        !isPinned
      ) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onClose, isPinned]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-40 flex justify-end pointer-events-none">
      <div 
        ref={panelRef}
        className="bg-gray-900 shadow-lg w-1/3 min-w-[400px] max-w-[600px] border-l border-gray-700 transition-all duration-300 transform pointer-events-auto"
        style={{ 
          height: '100vh', 
          overflowY: 'auto',
          animation: 'slide-in 0.3s ease-out forwards'
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-800 p-4 border-b border-gray-700 flex justify-between items-center shadow-md z-10">
          <h2 className="text-xl font-semibold text-white">Report</h2>
          <div className="flex items-center space-x-3">
            {/* Pin toggle */}
            <button 
              onClick={() => setIsPinned(!isPinned)} 
              className={`p-1 rounded-md ${isPinned ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'}`}
              title={isPinned ? "Unpin panel" : "Pin panel"}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h14M5 12h14m-7-7v14" />
              </svg>
            </button>
            
            {/* Update button - NEW */}
            {htmlReport && onUpdate && (
              <button 
                onClick={onUpdate} 
                className={`p-1 ${isUpdating ? 'text-green-400' : 'text-gray-400 hover:text-white'} rounded-md`}
                title="Update report"
                disabled={isUpdating || isGenerating}
              >
                {isUpdating ? (
                  <span className="inline-block animate-spin">⟳</span>
                ) : (
                  <ArrowPathIcon className="w-5 h-5" />
                )}
              </button>
            )}
            
            {/* Edit button */}
            <button 
              onClick={onEdit} 
              className="p-1 text-gray-400 hover:text-white rounded-md"
              title="Edit report"
              disabled={isUpdating || isGenerating}
            >
              <PencilIcon className="w-5 h-5" />
            </button>
            
            {/* Download button */}
            <button 
              onClick={onDownload} 
              className="p-1 text-gray-400 hover:text-white rounded-md"
              title="Download report"
              disabled={isUpdating || isGenerating || !displayContent}
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
            </button>
            
            {/* Close button */}
            <button 
              onClick={onClose} 
              className="p-1 text-gray-400 hover:text-white rounded-md"
              title="Close panel"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Content area */}
        <div className="p-6">
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"></div>
              <p className="text-gray-400">Generating report...</p>
            </div>
          ) : isUpdating ? (
            <div className="flex flex-col items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500 mb-4"></div>
              <p className="text-gray-400">Updating report...</p>
            </div>
          ) : displayContent?.type === 'html' ? (
            <div 
              className="prose prose-invert max-w-none" 
              dangerouslySetInnerHTML={{ __html: displayContent.content }}
            />
          ) : displayContent?.type === 'markdown' ? (
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{displayContent.content}</ReactMarkdown>
            </div>
          ) : (
            <div className="text-gray-400 italic">No report content available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportViewer;