import React from "react";
import Login from "../HomePage/Login";
import Logout from "../HomePage/Logout";

const HomePage = () => {
  const token = localStorage.getItem("token");
  return <>{token ? <Logout /> : <Login />}</>;
};

export function loader() {
  const currDate = new Date();
  const prevDate = new Date(localStorage.getItem("date"));
  const available = currDate - prevDate < 3600000;

  if (!available) localStorage.clear();
  return null;
}

export default HomePage;
