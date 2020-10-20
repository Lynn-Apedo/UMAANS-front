import React, { useReducer } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./sass/App.scss";

// import Nav from "./Components/Molecules/Nav";

// import Router from "react-router-dom";
import Header from "./Components/Organisms/Header";
import Routes from "./Components/Routes";
import ContextAuth from "./Components/Context/ContextAuth";

const initialState = {
  isAuthenticated: !!localStorage.getItem("token"),
  user: JSON.parse(localStorage.getItem("user")) || {},
  token: localStorage.getItem("token") || {},
};

const reducer = (state, action) => {
  console.log("ACTION :", action);
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.data.token);
      localStorage.setItem("user", JSON.stringify(action.payload.data.user));
      console.log("User : ", action.payload.data.user);
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
      };
    case "ADDPROJECT":
      localStorage.getItem("token");
      break;
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextAuth = {
    state,
    dispatch,
  };

  return (
    <Router>
      <ContextAuth.Provider value={contextAuth}>
        <Header />
        <Routes />
      </ContextAuth.Provider>
    </Router>
  );
}
