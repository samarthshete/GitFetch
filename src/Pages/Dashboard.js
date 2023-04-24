import React from "react";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import Info from "../Components/Info";
import User from "../Components/User";
import Repo from "../Components/Repo";
import RepoStats from "../Components/RepoStats";

 
export default function Dashboard() {
  
  return (
    <main>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <Info></Info>
      <User></User>
      <RepoStats></RepoStats>
      <Repo></Repo>
    </main>
  );
}
