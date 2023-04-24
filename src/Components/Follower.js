import React from "react";
import Wrapper from "../assets/wrapper/Followers";
import { useAppContext } from "../context/appContext";

export default function Follower() {
  const { followers } = useAppContext();
  return (
    <Wrapper>
      <div className="followers">
        {followers.map((follower, value) => {
          const { avatar_url, login, html_url} = follower
          return (
            <div className="followers-list" key={value}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
