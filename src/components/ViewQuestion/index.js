import React from "react";
import Sidebar from "../StackOverflow/Sidebar";
import MainQuestion from "./MainQuestion";
import "../StackOverflow/CSS/Index.css";

const index = () => {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <MainQuestion />
      </div>
    </div>
  );
};

export default index;
