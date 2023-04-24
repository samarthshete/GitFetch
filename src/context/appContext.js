import React, { useEffect, useState, useReducer, useContext } from "react";
import reducer from "../context/reducer";
import axios from "axios";

import { GET_USER, GET_REPO, GET_FOLLOWERS } from "./action";

const initialState = {
  user: {
    avatar_url: '',
    html_url: '',
    name: '',
    company: '',
    blog: '',
    bio: '',
    location: '',
    followers : [],
    following : 0,
    public_repos : 0,
    public_gists : 0,
    hireable : 0,
  },
  repos: [],
  followers: [],
  following: [],
  isLoading: false,
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUser = async (username) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );

      dispatch({ type: GET_USER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getRepo = async (username) =>{
    try {
      const {data} = await axios.get(`https://api.github.com/users/${username}/repos`);
      dispatch( {type: GET_REPO, payload : data})
    } catch (error) {
      console.log(error);
    }
  }

  const getFollowers = async (username) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/followers`
      );

      dispatch({ type: GET_FOLLOWERS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser('samarthshete');
    getRepo('samarthshete')
    getFollowers("samarthshete");
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        getUser,
        getRepo,
        getFollowers
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
