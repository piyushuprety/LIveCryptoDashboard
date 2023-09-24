import "./dougnetGraph.css"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip);

export const DougnetGraph = (props) => {

    const labels = props.data.map((i) => {
      return i.name;
    });
    const graphData = {
      labels: labels,
      datasets: [
        {
          label: 'marketCap',
          data: props.data.map((i) => {
            return i.marketCap / 100;
          }), // Modify this array with your second set of data
          backgroundColor: [
            'rgb(233, 60, 60)',
            'rgb(533, 260, 60)',
            'rgb(43, 60, 360)',
            'rgb(3, 460, 460)',
          ],
        },
      ],
    };

  return (
    <div className="DougnutContainer">
      <div className="header-D">
        <h1> Top Coins </h1>
        <p>Real-Time</p>
      </div>
      <div className="content">
        <div className="Dougnet">
          <Doughnut data={graphData} height={10} />
        </div>
        <div className="legend-D">
          <div className="L-one-D">
            <div className="L-color-one-D"></div>
            <p>Market Share</p>
          </div>
          <div className="L-two-D">
            <div className="L-color-two-D"></div>
            <p>ListedAt</p>
          </div>
          <div className="L-three-D">
            <div className="L-color-three-D"></div>
            <p>Market Share</p>
          </div>
          <div className="L-four-D">
            <div className="L-color-four-D"></div>
            <p>ListedAt</p>
          </div>
        </div>
      </div>
    </div>
  );
};
