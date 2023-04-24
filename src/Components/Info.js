import React from "react";
import Wrapper from "../assets/wrapper/Info";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import Item from "./Item";
import { useAppContext } from "../context/appContext";

export default function Info() {
  const { user } = useAppContext();
  const { public_repos, followers, following, public_gists } = user;

  const gitItem = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "Following",
      value: following,
      color: "purple",
    },
  ];
  return (
    <Wrapper>
      <div className="section-center">
        {gitItem.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </div>
    </Wrapper>
  );
}
