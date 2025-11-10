import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axiosInstance from "./utils/axiosInstance";

const App = () => {
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      console.log("Data successfully fetched:", response.data);
      const user = response.data?.user || null;
      setUser(user);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const routes = (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );

  return <div>{routes}</div>;
};

export default App;
