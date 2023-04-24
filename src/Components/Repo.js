import React from "react";
import { FaCircle, FaStar, FaEye, FaCodeBranch } from "react-icons/fa";
import {BiTime} from 'react-icons/bi'
import Wrapper from "../assets/wrapper/Repo";
import RepoInfo from "./RepoInfo";
export default function Repo({
  name,
  language,
  languageColor,
  stargazers_count,
  watchers,
  forks,
  description,
  updated_at
}) {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <div className="github-repo-card">
          <div className="repo-card-header">
            <h4>{name}</h4>
            <p> {description ? description : "No description"}</p>
          </div>
          <div className="repo-card-body">
            <div className="repo-card-body-center">
              <RepoInfo icon={<FaCircle />} text={language} > </RepoInfo>
              <RepoInfo icon={<FaStar />} text={stargazers_count} > </RepoInfo>
              <RepoInfo icon={<FaEye />} text={watchers} > </RepoInfo>
              <RepoInfo icon={<FaCodeBranch />} text={forks} > </RepoInfo>
              <RepoInfo icon={<BiTime />} text ={updated_at}></RepoInfo>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
