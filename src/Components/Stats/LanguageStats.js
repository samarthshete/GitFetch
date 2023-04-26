import React from "react";
import Wrapper from "../../assets/wrapper/MostStar";
import { Pie } from "react-chartjs-2";

export default function LanguageStats({ chartData }) {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <div className="statsDiv">
          <h3> Most Popular Language </h3>
          <div className="chartContainer">
            <Pie data={chartData} />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
