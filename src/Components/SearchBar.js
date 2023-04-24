import React, { useState } from "react";
import Wrapper from "../assets/wrapper/SearchBar";
import { MdSearch } from "react-icons/md";
import { useAppContext } from "../context/appContext";

export default function SearchBar() {
  const { getUser } = useAppContext();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      getUser(username);
    }
  };

  return (
    <section className="section">
      <Wrapper className="section-center">
        <form className="form-center" onSubmit={handleSubmit}>
          <MdSearch />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="enter github user"
          ></input>
          <button type="submit">search</button>
        </form>
      </Wrapper>
    </section>
  );
}
