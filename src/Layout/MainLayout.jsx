import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainLayout.css';

function MainLayout({ children }) {
  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <div className="logo">
            <a href="#">C</a>
          </div>
          <div className="nav-list">
            <NavLink to="/" className="text-[#F8F8F2] py-2 px-4 transition-[0.5s] rounded-lg text-[15px] hover:bg-[#2F2F35]">
              Home
            </NavLink>
            <NavLink to="/about" className="text-[#F8F8F2] py-2 px-4 transition-[0.5s] rounded-lg text-[15px] hover:bg-[#2F2F35]">
              About
            </NavLink>
            <NavLink className="text-[#F8F8F2] py-2 px-4 transition-[0.5s] rounded-lg text-[15px] hover:bg-[#2F2F35]" to="/Products">
              Products
            </NavLink>
            <NavLink className='text-[#F8F8F2] py-2 px-4 transition-[0.5s] rounded-lg text-[15px] hover:bg-[#2F2F35]' to="/cart">Cart</NavLink>
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
