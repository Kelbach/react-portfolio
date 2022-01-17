import React from 'react';
import bioImg from './CJH_5439crop.jpg';

function About(props) {
    return (
      <section id="about-me">
        <div className="title">
          <h2>About Me</h2>
        </div>
        <img id="bio-image" src={bioImg} alt="K. Kelbach " />
        <article>
          <p>
            Hi. I'm Kevin. I strive to become a Web Developer. I have a background in physics, mathematics, music and audio engineering.
            I look forward to learning more and using my creativity and problem solving to build what i imagine.
          </p>
        </article>
      </section>
    );
  }

export default About;