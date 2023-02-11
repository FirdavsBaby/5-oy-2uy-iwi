import React from 'react'
import Buttons1 from "./Buttons1";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="text-bg-primary w-100 d-flex py-3 justify-content-between px-4 align-items-center fs-2 sticky-top">
      <Link to="/">
        <img src="logo.png" width="10%" alt="logo" />
      </Link>
      <ul className="d-flex gap-5 align-items-center">
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/watch">Watch</Link>
      </ul>
      <Buttons1>Login</Buttons1>
    </nav>
  );
}

export default Nav
