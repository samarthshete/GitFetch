import React from "react";
import Wrapper from "../assets/wrapper/Navbar";
import { useAppContext } from "../context/appContext";

export default function Navbar() {
  const { user } = useAppContext();

  return (
    <Wrapper>
      {user.name && (
        <h4>
          Welcome, <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}
      
    </Wrapper>
  );
}
