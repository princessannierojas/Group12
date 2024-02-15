import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DashboardChart2 = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const userTodosCounts = users.map(user => {
          return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`)
            .then(response => response.json())
            .then(todos => todos.length);
        });

        Promise.all(userTodosCounts).then(counts => {
          const ctx = chartRef.current.getContext('2d');

          const firstNames = users.map(user => user.name.split(' ')[0]);

          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }

          chartInstanceRef.current = new Chart(ctx, {
            type: 'bar',
            data: {
            labels: firstNames,
              datasets: [{
                label: 'Total TODOS of each user',
                data: counts,
                backgroundColor: 'rgba(236, 237, 238, 0.2)',
                borderColor: '#ecedee',
                borderWidth: 1
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              layout: {
                padding: {
                  bottom: 20 
                }
              },
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
        });
      });
  }, []);

  return (
    <canvas ref={chartRef} />
  );
};

export default DashboardChart2;
