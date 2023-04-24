import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrapper/Error";

export default function Error() {
  return (
    <Wrapper>
      <div className="error-page">
        <img src={img} alt="error"></img>
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
}
