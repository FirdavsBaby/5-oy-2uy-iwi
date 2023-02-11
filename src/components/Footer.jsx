import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-dark py-1 px-3 d-flex gap-5">
      <div className="d-flex flex-column w-25 p-3">
        <Link to="/">
          <img src="logo.png" alt="" className="w-50" />
        </Link>
        <p className="text-secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          vero iste iusto suscipit repudiandae inventore vel eius libero nostrum
          excepturi, sit fugiat quos odit, at doloremque dolorum et fugit quam!
        </p>
        <div className="services d-flex text-info gap-3 fs-3">
          <a href="https://www.facebook.com/">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://telegram.org/">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
      <ul className="d-flex flex-column justify-content-evenly align-items-start text-light">
        <h2>Links</h2>
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/wach">Watch</Link>
      </ul>
    </footer>
  );
}

export default Footer
