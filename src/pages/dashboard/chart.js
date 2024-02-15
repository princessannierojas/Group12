import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DashboardChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    let chartInstance = null;
  
    if (chartInstance) {
      chartInstance.destroy();
    }
  
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Users', 'Posts', 'Comments', 'Todos'],
        datasets: [{
          label: 'Total',
          data: data,
          backgroundColor: [
            'rgba(236, 237, 238, 0.2)',
            'rgba(236, 237, 238, 0.2)',
            'rgba(236, 237, 238, 0.2)',
            'rgba(236, 237, 238, 0.2)'
          ],
          borderColor: [
            '#ecedee',
            '#ecedee',
            '#ecedee',
            '#ecedee'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);
  
  return <canvas ref={chartRef} />;
  
};

export default DashboardChart;
