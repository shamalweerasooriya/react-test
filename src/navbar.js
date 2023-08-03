import React, { useState } from "react";
import logo from './logo.svg'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
          <img src={logo} alt="logo" width="50px" height="50px" />
            <a class="navbar-brand" style={{color: 'white'}} href="#">
              E doc - We Care For Your Health
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}>
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                
              </ul>
              
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
