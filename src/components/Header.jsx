import React from "react";
import Nav from './Nav';
import Showcase from './Showcase';
const Header = () => {
  return (
    <header className="container-fluid d-flex flex-column">
      <Nav/>
      <Showcase/>
    </header>
  );
};

export default Header;
