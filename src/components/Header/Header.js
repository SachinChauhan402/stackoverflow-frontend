import React from "react";
import "./CSS/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="header-left">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Stack_Overflow_logo.png"
              alt="logo"
            />
          </Link>
          <h3>About</h3>
          <h3>Products</h3>
          <h3>For Teams</h3>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            <Button variant="outlined" onClick={() => navigate("/auth")}>
              Log in
            </Button>
            <Button variant="contained" onClick={() => auth.signOut()}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
