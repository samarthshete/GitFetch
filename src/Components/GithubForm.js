import React, { useState } from "react";
import { useAppContext } from "../context/appContext";

import { useNavigate } from "react-router-dom";
import Alert from "./Alert";
export default function GithubForm() {
  const { getUser, showAlert, isLoading, displayAlert } = useAppContext();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleNext = async (e) => {
    e.preventDefault();
    if (!username) {
      displayAlert();
      return;
    }
    if (username) {
      getUser(username, "User Fetched! Redirecting...");
      setUsername("");
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <form onSubmit={handleNext}>
        {showAlert && <Alert></Alert>}

        <label>
          <span>Enter your GitHub username:</span>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="github profile"
          />
        </label>
        <button className="button" type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
    </div>
  );
}
