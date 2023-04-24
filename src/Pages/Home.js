import React from "react";
import Wrapper from "../assets/wrapper/Home";
 
import Header from "../Components/Home/Header";
import Onboarding from "../Components/Home/Onboarding";
export default function Home() {
  return (
    <Wrapper>
      <div className="container">
        <div className="Head">
          <title>GitFetch</title>

          <link rel="icon" href="./purpleicons/favicon.ico" />
          <link
            rel="icon"
            type="image/x-icon"
            href="./purpleicons/favicon.ico"
          ></link>
        </div>
        <Header />
        <div className="main">
           <Onboarding></Onboarding>
        </div>
      </div>
    </Wrapper>
  );
}
