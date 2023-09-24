import "./barGraph.css"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export const BarGraph = (props) => {
  
  const labels = props.data.map((i)=>{return (i.name)});
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: 'ListedAt',
        data: props.data.map((i) => {
          return i.listedAt;
        }),
        backgroundColor: ['rgb(155, 221, 124)'],
      },
      {
        label: 'marketCap',
        data: props.data.map((i) => {
          return i.marketCap / 100;
        }), // Modify this array with your second set of data
        backgroundColor: ['rgb(233, 160, 160)'],
      },
    ],
  };

  return (
    <div className="barContainer">
      <div className="header">
        <h1>Activites</h1>
        <div className="name">
          <p>Top 4 Crypto Currency</p>
          <div className="legend">
            <div className="L-one">
              <div className="L-color-one"></div>
              <p>Market Share</p>
            </div>
            <div className="L-two">
              <div className="L-color-two"></div>
              <p>ListedAt</p>
            </div>
          </div>
        </div>
      </div>
      <Bar data={graphData} height={60} />
    </div>
  );
};
