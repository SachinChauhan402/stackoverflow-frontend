import React from "react";
import StarsIcon from "@mui/icons-material/Stars";
import WorkIcon from "@mui/icons-material/Work";
import PublicIcon from "@mui/icons-material/Public";
import { Link } from "react-router-dom";
import "./CSS/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <Link>Home</Link>
          </div>
          <div className="sidebar-option">
            <Link> PUBLIC </Link>
            <div className="link">
              <div className="link-tag">
                <PublicIcon />
                <a>Question</a>
              </div>
              <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>
          <div className="sidebar-option">
            <p>COLLECTIVES</p>
            <div className="link">
              <div className="link-tag">
                <StarsIcon />
                <Link>Explore Collectives</Link>
              </div>
            </div>
          </div>
          <div className="sidebar-option"></div>
          <p>FIND A JOB</p>
          <div className="link">
            <div className="link-tag">
              <Link>Question</Link>
            </div>
          </div>
        </div>
        <div className="sidebar-option">
          <p>TEAMS</p>
          <div className="link-tag">
            <WorkIcon />
            <Link>Companies</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
