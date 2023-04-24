import React from "react";
import Wrapper from "../assets/wrapper/RepoInfo";
export default function RepoInfo({icon, text}) {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
}
