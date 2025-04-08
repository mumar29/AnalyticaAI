import React from "react";
import { Pie, Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

/**
 * Function to parse CSV content into labels and values
 *
 * @param {string} csvContent - The raw CSV content from API response.
 * @param {Object} mapping - The mapping object containing label_column and value_column.
 * @returns {Object} - Parsed labels and values.
 */
const parseCSV = (csvContent, mapping) => {
  if (!csvContent) return { labels: [], values: [] };
  
  const rows = csvContent.split("\r\n").filter(row => row.trim() !== '');
  if (rows.length === 0) return { labels: [], values: [] };
  
  const headerRow = rows[0].split(",");
  
  // Get column names from mapping or use defaults
  const labelColumn = mapping && mapping.label_column ? mapping.label_column : "order_month";
  const valueColumn = mapping && mapping.value_column ? mapping.value_column : "monthly_revenue";
  
  // Find column indices
  const labelColumnIndex = headerRow.indexOf(labelColumn);
  const valueColumnIndex = headerRow.indexOf(valueColumn);
  
  if (labelColumnIndex === -1 || valueColumnIndex === -1) {
    console.error("Column mapping error:", headerRow);
    return { labels: [], values: [] };
  }
  
  const labels = [];
  const values = [];
  
  // Skip the header row (index 0)
  for (let i = 1; i < rows.length; i++) {
    const columns = rows[i].split(",");
    
    if (columns.length > Math.max(labelColumnIndex, valueColumnIndex)) {
      const label = columns[labelColumnIndex];
      const value = parseFloat(columns[valueColumnIndex]);
      
      if (label && !isNaN(value)) {
        // Format date labels if they look like dates (YYYY-MM-DD)
        const formattedLabel = /^\d{4}-\d{2}-\d{2}/.test(label) 
          ? label.substring(0, 7).replace("-", "/") 
          : label;
        
        labels.push(formattedLabel);
        values.push(value);
      }
    }
  }
  
  return { labels, values };
};

/**
 * Renders a chart using the provided configuration.
 *
 * @param {Object} chartConfig - Configuration containing chart details and CSV data.
 * @returns {JSX.Element} - Rendered chart.
 */
const Visualization = ({ chartConfig }) => {
  if (!chartConfig || !chartConfig.csv_collection || 
      (!chartConfig.primary_charts && !chartConfig.secondary_charts)) {
    console.log("Missing chart configuration");
    return null;
  }

  // Combine primary and secondary charts
  const allCharts = [
    ...(chartConfig.primary_charts || []),
    ...(chartConfig.secondary_charts || [])
  ];
  
  return (
    <div className="space-y-6">
      {allCharts.map((chart, index) => {
        // Find the corresponding CSV data for this chart
        const csvData = chartConfig.csv_collection.csvs.find(
          (csv) => csv.csv_index === chart.csv_index
        );
        
        if (!csvData) {
          console.error(`CSV data not found for index ${chart.csv_index}`);
          return null;
        }
        
        // Parse CSV to extract labels and values using the mapping from the chart config
        const { labels, values } = parseCSV(csvData.content, chart.mapping);
        
        if (labels.length === 0 || values.length === 0) {
          return <p key={index} className="text-red-500">No data available for {chart.title}</p>;
        }
        
        // Generate dynamic colors for the chart
        const colors = labels.map(
          (_, i) => `hsl(${(360 / labels.length) * i}, 70%, 50%)`
        );
        
        // Prepare chart data
        const chartData = {
          labels: labels,
          datasets: [
            {
              label: chart.title,
              data: values,
              backgroundColor: chart.type !== "line" ? colors : "rgba(75, 192, 192, 0.2)",
              borderColor: chart.type === "line" ? "rgba(75, 192, 192, 1)" : colors.map((color) => color.replace("70%", "50%")),
              borderWidth: 1,
              tension: 0.3 // Smooth line charts
            },
          ],
        };
        
        // Render the appropriate chart type
        let ChartComponent;
        switch (chart.type) {
          case "pie":
            ChartComponent = <Pie data={chartData} />;
            break;
          case "bar":
            ChartComponent = <Bar 
              data={chartData} 
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: "rgba(255, 255, 255, 0.1)"
                    },
                    ticks: {
                      color: "rgba(255, 255, 255, 0.7)"
                    }
                  },
                  x: {
                    grid: {
                      color: "rgba(255, 255, 255, 0.1)"
                    },
                    ticks: {
                      color: "rgba(255, 255, 255, 0.7)",
                      maxRotation: 45,
                      minRotation: 45
                    }
                  }
                },
                plugins: {
                  legend: {
                    labels: {
                      color: "rgba(255, 255, 255, 0.7)"
                    }
                  }
                },
                maintainAspectRatio: false
              }} 
            />;
            break;
          case "line":
            ChartComponent = <Line 
              data={chartData} 
              options={{
                scales: {
                  y: {
                    beginAtZero: false,
                    grid: {
                      color: "rgba(255, 255, 255, 0.1)"
                    },
                    ticks: {
                      color: "rgba(255, 255, 255, 0.7)"
                    }
                  },
                  x: {
                    grid: {
                      color: "rgba(255, 255, 255, 0.1)"
                    },
                    ticks: {
                      color: "rgba(255, 255, 255, 0.7)",
                      maxRotation: 45,
                      minRotation: 45
                    }
                  }
                },
                plugins: {
                  legend: {
                    labels: {
                      color: "rgba(255, 255, 255, 0.7)"
                    }
                  }
                },
                maintainAspectRatio: false
              }} 
            />;
            break;
          default:
            return (
              <p key={index} className="text-red-500">
                Unsupported chart type: {chart.type}
              </p>
            );
        }
        
        return (
          <div key={index} className="mt-4 p-4 bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-white text-center mb-3">
              {chart.title}
            </h3>
            <div className="h-64">
              {ChartComponent}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Visualization;