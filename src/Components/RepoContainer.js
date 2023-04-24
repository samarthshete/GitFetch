import React, { useState } from "react";
import Wrapper from "../assets/wrapper/RepoContainer";
import Repo from "./Repo";

import { useAppContext } from "../context/appContext";

export default function RepoContainer() {
  const { repos } = useAppContext();
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const handleSortOption =( option) =>{
    setShowDropdown(false);
    setSortOption(option);
  }

  const sortedRepos  = () =>{
      
  }
  return (
    <section className="section">
      <Wrapper className="section-center">
      <div className="repo-title">
          <h3> Repository</h3>
          <div className="btn-container">
            <button
              type="button"
              className="btn"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Sort
            </button>
            <div
              className={showDropdown ? "dropdown show-dropdown" : "dropdown"}
            >
              <ul>
                <li onClick={() => { handleSortOption("star")}}>Latest</li>
                <li>Most Star</li>
                <li>Most Fork</li>
                 
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="repo-content">
            {repos.map((repo) => (
              <Repo key={repo.id} {...repo} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
