import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainLayout.css';

function MainLayout({ children }) {
  return (
    <div>
      <div className="header-first align-element flex justify-center sm:justify-end">
        <div className="container header-first__container">
          <div className="header-nav">
            <NavLink>Sign in/ Cuest</NavLink>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container header__container">
          <div className="logo">
            <NavLink to="/">C</NavLink>
          </div>
          <div className="nav-list">
            <NavLink
              to="/"
              className=" link text-[#F8F8F2] py-2 px-4 transition-[0.5s] rounded-lg text-[15px] hover:bg-[#2F2F35]"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="link text-[#F8F8F2] py-2 px-4 transition-[0.5s] rounded-lg text-[15px] hover:bg-[#2F2F35]"
            >
              About
            </NavLink>
            <NavLink
              className="link text-[#F8F8F2] py-2 px-4 transition-[0.5s] rounded-lg text-[15px] hover:bg-[#2F2F35]"
              to="/Products"
            >
              Products
            </NavLink>
            <NavLink
              className=" link text-[#F8F8F2] py-2 px-4 transition-[0.5s] rounded-lg text-[15px] hover:bg-[#2F2F35]"
              to="/cart"
            >
              Cart
            </NavLink>
          </div>
          <div className="icon"></div>
        </div>
      </header>
      {children}
      <footer>
        <h3>footer</h3>
      </footer>
    </div>
  );
}

export default MainLayout;
