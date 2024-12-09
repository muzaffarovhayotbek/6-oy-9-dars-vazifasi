import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="container about__container">
        <h2 className="about-title">
          We love <span className="about-btn">comfy</span>
        </h2>
        <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-[#FFFFFF] w-[672px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia
          optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo
          sed officiis ea tempore! Similique eos minima sit porro, ratione
          aspernatur!
        </p>
      </div>
    </div>
  );
}

export default About;
