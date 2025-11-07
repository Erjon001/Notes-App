import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const isSignedUp = !!localStorage.getItem("accessToken");

const routes = (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          isSignedUp ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
        }
      />

      <Route path="/dashboard" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  </Router>
);

const App = () => {
  return <div>{routes}</div>;
};

export default App;
