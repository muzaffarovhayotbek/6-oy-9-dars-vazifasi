import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainLayout.css';

function MainLayout({ children }) {
  return (
    <div>
      <div className="header-first align-element flex justify-center sm:justify-end">
        <div className="container header-first__container">
          <div className="flex justify-end gap-7 text-[#e9e9e7] max-w-[1100px] w-full mx-auto">
            <NavLink className="link link-hover text-xs sm:text-sm hover:underline">
              Sign in/ Cuest
            </NavLink>
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
              className="py-2 px-4 transition-[0.5s] rounded-lg text-[15px] hover:bg-[#2F2F35]"
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
