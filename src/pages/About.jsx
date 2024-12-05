import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container">
      <h2 className="about-title">
        We love <span className='stat-title text-primary-content text-4xl bg- text-[#301C27] py-4 px-6 rounded-2xl font-bold tracking-widest'>comfy</span>
      </h2>
      <p className="about-dsc mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
        quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
        aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
        officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
      </p>
    </div>
  );
}

export default About;
