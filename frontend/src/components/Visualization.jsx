// import React from "react";
// import { Pie, Bar, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register required Chart.js components
// ChartJS.register(
//   ArcElement,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend
// );

// /**
//  * Renders a chart using the provided configuration.
//  *
//  * @param {Object} chartConfig - Configuration containing chart details.
//  * @returns {JSX.Element} - Rendered chart.
//  */
// const Visualization = ({ chartConfig }) => {
//   if (!chartConfig) return null;

//   const { title, type, labels, values } = chartConfig;

//   // Generate dynamic colors for the chart
//   const colors = labels.map((_, index) => {
//     const hue = Math.floor((360 / labels.length) * index);
//     return `hsl(${hue}, 70%, 50%)`;
//   });

//   // Prepare chart data
//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: title,
//         data: values,
//         backgroundColor: colors,
//         borderColor: colors.map((color) => color.replace("70%", "50%")),
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Render the appropriate chart type
//   let ChartComponent;
//   switch (type) {
//     case "pie":
//       ChartComponent = <Pie data={chartData} />;
//       break;
//     case "bar":
//       ChartComponent = <Bar data={chartData} />;
//       break;
//     case "line":
//       ChartComponent = <Line data={chartData} />;
//       break;
//     default:
//       return <p className="text-red-500">Unsupported chart type: {type}</p>;
//   }

//   return (
//     <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-md">
//       <h3 className="text-lg font-semibold text-white text-center mb-3">{title}</h3>
//       {ChartComponent}
//     </div>
//   );
// };

// export default Visualization;



// -------------------------------------------------------------------------

// import React from "react";
// import { Pie, Bar, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register required Chart.js components
// ChartJS.register(
//   ArcElement,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend
// );

// /**
//  * Renders a chart using the provided configuration.
//  *
//  * @param {Object} chartConfig - Configuration containing chart details.
//  * @returns {JSX.Element} - Rendered chart.
//  */
// const Visualization = ({ chartConfig }) => {
//   if (!chartConfig) return null;

//   const { title, type, labels, values } = chartConfig;

//   // Generate dynamic colors for the chart
//   const colors = labels.map((_, index) => `hsl(${(360 / labels.length) * index}, 70%, 50%)`);

//   // Prepare chart data
//   const chartData = {
//     labels: labels,
//     datasets: [
//       {
//         label: title,
//         data: values,
//         backgroundColor: colors,
//         borderColor: colors.map((color) => color.replace("70%", "50%")),
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Render the appropriate chart type
//   let ChartComponent;
//   switch (type) {
//     case "pie":
//       ChartComponent = <Pie data={chartData} />;
//       break;
//     case "bar":
//       ChartComponent = <Bar data={chartData} />;
//       break;
//     case "line":
//       ChartComponent = <Line data={chartData} />;
//       break;
//     default:
//       return <p className="text-red-500">Unsupported chart type: {type}</p>;
//   }

//   return (
//     <div className="mt-4 p-4 bg-gray-700 rounded-lg shadow-md">
//       <h3 className="text-lg font-semibold text-white text-center mb-3">{title}</h3>
//       {ChartComponent}
//     </div>
//   );
// };

// export default Visualization;

// ------------------------------------------------------------------------------------------

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
 * @param {Object} mapping - The mapping to extract label and value columns.
 * @returns {Object} - Parsed labels and values.
 */
const parseCSV = (csvContent, mapping) => {
  if (!csvContent) return { labels: [], values: [] };
  
  const rows = csvContent.split("\r\n").filter(row => row.trim() !== '');
  const headerRow = rows[0].split(",");
  
  // Find column indices based on mapping names
  const labelColumnIndex = headerRow.indexOf(mapping.label_column);
  const valueColumnIndex = headerRow.indexOf(mapping.value_column);
  
  if (labelColumnIndex === -1 || valueColumnIndex === -1) {
    console.error("Column mapping error:", mapping, headerRow);
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
        labels.push(label);
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
  if (!chartConfig || !chartConfig.charts || !chartConfig.csv_collection) {
    return null;
  }

  return (
    <div className="space-y-6">
      {chartConfig.charts.map((chart, index) => {
        // Find the corresponding CSV data for this chart
        const csvData = chartConfig.csv_collection.csvs.find(
          (csv) => csv.csv_index === chart.csv_index
        );
        
        if (!csvData) {
          console.error(`CSV data not found for index ${chart.csv_index}`);
          return null;
        }
        
        // Parse CSV to extract labels and values
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
              backgroundColor: colors,
              borderColor: colors.map((color) => color.replace("70%", "50%")),
              borderWidth: 1,
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
            ChartComponent = <Bar data={chartData} options={{
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }} />;
            break;
          case "line":
            ChartComponent = <Line data={chartData} />;
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
            {ChartComponent}
          </div>
        );
      })}
    </div>
  );
};

export default Visualization;