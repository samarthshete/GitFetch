import React from "react";
import Wrapper from "../assets/wrapper/User";
import Profile from "./Profile";
import Follower from "./Follower";

export default function User() {
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Profile></Profile>
        <Follower></Follower>
      </Wrapper>
    </section>
  );
}
