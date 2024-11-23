import React from "react";
import Login from "../HomePage/Login";

const HomePage = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      {!token && <Login />}
      <h1>Test</h1>
    </>
  );
};

export function loader() {
  const currDate = new Date();
  const prevDate = new Date(localStorage.getItem("date"));
  const available = currDate - prevDate < 3600000;

  if (!available) localStorage.clear();
  return null;
}

export default HomePage;
