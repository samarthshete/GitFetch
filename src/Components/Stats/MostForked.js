import React from "react";
import Wrapper from "../../assets/wrapper/MostStar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function MostForked({ data }) {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <div className="statsDiv">
          <h3> Most Forked</h3>
          <div className="chartContainer">
            <Bar
              data={data}
              options={{
                scales: {
                  xAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                legend: {
                  display: false,
                },
              }}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
