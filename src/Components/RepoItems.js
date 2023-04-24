import React from "react";
import { FaCircle, FaStar, FaEye, FaCodeBranch } from "react-icons/fa";
import Wrapper from "../assets/wrapper/RepoItems";
export default function RepoItems({
  name,
  language,
  languageColor,
  stars,
  watchers,
  forks,
  description,
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
            <div>
              <FaCircle className="language-icon" />
              <span>{language}</span>
            </div>
            <div>
              <FaStar />
              <span>{stars}</span>
            </div>
            <div>
              <FaEye />
              <span>{watchers}</span>
            </div>
            <div>
              <FaCodeBranch />
              <span>{forks}</span>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
