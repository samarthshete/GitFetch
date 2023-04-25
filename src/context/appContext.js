import React, { useEffect, useState, useReducer, useContext } from "react";
import reducer from "../context/reducer";
import axios from "axios";

import { GET_USER, GET_REPO, GET_FOLLOWERS, GET_USER_BEGIN, DISPLAY_ALERT, CLEAR_ALERT } from "./action";

const initialState = {
  user: {
    avatar_url: "",
    html_url: "",
    name: "",
    company: "",
    blog: "",
    bio: "",
    location: "",
    followers: [],
    following: 0,
    public_repos: 0,
    public_gists: 0,
    hireable: 0,
  },
  repos: [],
  followers: [],
  following: [],
  mostForked: [],
  mostStar: [],
  topLanguage: [],
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  const getUser = async (username, alertText) => {
    dispatch({ type: GET_USER_BEGIN });
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`
      );

      dispatch({ type: GET_USER, payload: { data, alertText } });
    } catch (error) {
      console.log(error);
    }
    clearAlert();
  };

  const getRepo = async (username) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      dispatch({ type: GET_REPO, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

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
    getUser({ username: "samarthshete", alertText: "User Fetched! Redirecting..." });
    getRepo("samarthshete");
    getFollowers("samarthshete");
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        getUser,
        getRepo,
        getFollowers,
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
