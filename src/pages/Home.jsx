import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="main container">
        <div className="container main__container">
          <div className="main-left">
            <h1 className="main-title">We are changing the way people shop</h1>
            <p className="main-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <NavLink
              to="/Products"
              className="text-[#272935] bg-[#FF7AC6] mt-[40px] active:scale-95 transition-[0.3s] font-medium uppercase px-4 py-3 rounded-lg main-btn"
            >
              Our Products
            </NavLink>
          </div>
          <div className="main-rigth">
            <img
              src="	https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
              width={80}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className=" container section">
        <h2 className="section-title">Featured products</h2>
        <hr className="hr" />
      </div>
    </div>
  );
}

export default Home;
