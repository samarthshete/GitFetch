import React, { useContext } from "react";
import Wrapper from "../assets/wrapper/Profile";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

import { useAppContext } from "../context/appContext";

export default function Profile() {
  const { user } = useAppContext();

  if (!user) {
    return <div>Loading...</div>;
  }
  const { avatar_url, html_url, name, company, blog, bio, location } = user;
  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name || "user not found"}</h4>
          <p>@{name || "john doe"}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className="bio">{bio || "Bio is not available"}</p>
      <div className="links">
        <p>
          <MdBusiness></MdBusiness> {company}
        </p>
        <p>
          <MdLocationOn></MdLocationOn> {location || "earth"}
        </p>
        <a href={`https://${blog}`}>
          <MdLink></MdLink>
          {blog}
        </a>
      </div>
    </Wrapper>
  );
}
