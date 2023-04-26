import React from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import Info from "../Components/Info";
import User from "../Components/User";
import Repo from "../Components/Repo";
import RepoStats from "../Components/RepoStats";
import RepoContainer from "../Components/RepoContainer";
import { useAppContext } from "../context/appContext";

import Loading from "../Components/Loading";
export default function Dashboard() {
  const { user, isLoading } = useAppContext();

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <SearchBar />
        <Loading center />;
      </main>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      {user && (
        <>
          <Info></Info>
          <User></User>
          <RepoStats></RepoStats>
          <RepoContainer></RepoContainer>
        </>
      )}
    </main>
  );
}
