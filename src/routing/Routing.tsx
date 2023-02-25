import React from "react";
import { Route, Routes } from "react-router-dom";
import CoursePage from "../Pages/CoursePage";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoursePage />} />
      </Routes>
    </>
  );
};

export default Routing;
