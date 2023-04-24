import React, { useState } from "react";
import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
export default function GithubForm() {
  const { getUser } = useAppContext();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleNext = async (e) => {
    e.preventDefault();
    if (username) {
      await getUser(username);
      setUsername("");
      navigate("/dashboard");
    }
  };
  return (
    <div>
      <form onSubmit={handleNext}>
        <label>
          <span>Enter your GitHub username:</span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="github profile"
          />
        </label>
        <button className="button" type="submit">
          Seach
        </button>
      </form>
    </div>
  );
}
