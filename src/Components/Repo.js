import React from "react";
import Wrapper from "../assets/wrapper/Repo";
import RepoItems from "./RepoItems";

import { useAppContext } from "../context/appContext";

export default function Repo() {
  
  const { repos } = useAppContext();

  return (
    <section className="section">
      <Wrapper className="section-center">
        <h3> Repository</h3>
        <div>

        <div className="repo-content">
          {repos.map((repo) => (
            <RepoItems key={repo.id} {...repo} />
          ))}
        </div>

        </div>
      </Wrapper>
    </section>
  );
}
