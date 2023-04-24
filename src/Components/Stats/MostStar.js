import React from "react";
import Wrapper from "../../assets/wrapper/MostStar";

import { Doughnut } from "react-chartjs-2";

export default function MostStar({ data }) {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <div className="statsDiv">
          <h3> Star Per Language </h3>
          <div className="chartContainer">
            {data ? <Doughnut data={data} /> : <div>Loading...</div>}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
