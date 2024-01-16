"use client"

// BarChart.js
import React from 'react';
import { useEffect, useState } from 'react';
import styles from './barchart.module.css'
import { Bar } from 'react-chartjs-2';

import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Chart } from 'react-chartjs-2';

 Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
 )

const BarChart = () => {

  const [ chartData, setChartData ] = useState({
    datasets: []
  })

  const [ chartOptions, setChartOptions ] = useState({})

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sales $',
          data: [3232, 1323, 4334, 5354, 5564, 4632, 5434],
          backgroundColor: 'rgba(53, 162, 245, 0.4)'
        }
      ]
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: "Daily Revenue"
        }
      },
       maintainAspectRatio: false,
       responsive: true
    })
  }, [])
  return (
   <>
    <Bar data={chartData} options={chartOptions}/>
   </>
  );
};

export default BarChart;


