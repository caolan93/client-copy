import React from "react";
import Navbar from "../Navbar/Navbar";
import Socials from "../Socials/Socials";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <Socials />
      <Navbar />
    </header>
  );
};

export default Header;
