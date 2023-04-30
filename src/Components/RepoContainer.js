import React, { useState } from "react";
import Wrapper from "../assets/wrapper/RepoContainer";
import Repo from "./Repo";

import { useAppContext } from "../context/appContext";

export default function RepoContainer() {
  const { repos } = useAppContext();
  const [showDropdown, setShowDropdown] = useState(false);
  const [sortOption, setSortOption] = useState("");

  let sorted = [...repos];

  if (sortOption === "star") {
    sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);
  } else if (sortOption === "fork") {
    sorted.sort((a, b) => b.forks_count - a.forks_count);
  } else {
    sorted.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  }
  const handleSortOptionClick = (option) => {
    setSortOption(option);
    setShowDropdown(false);  
  };
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
                <li onClick={() => handleSortOptionClick("date")}>Latest</li>
                <li onClick={() => handleSortOptionClick("star")}>Most Star</li>
                <li onClick={() => handleSortOptionClick("fork")}>Most Fork</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="repo-content">
            {sorted.map((repo) => (
              <Repo key={repo.id} {...repo} />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
