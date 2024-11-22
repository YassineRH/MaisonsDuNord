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
  const prevDate = localStorage.getItem("date");
  const available = currDate - prevDate < 1000 * 60 * 60;
  if (!available) localStorage.removeItem("token");
  return null;
}

export default HomePage;
