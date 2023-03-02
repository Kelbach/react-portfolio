import React from 'react';
import bioImg from './CJH_5439crop.jpg';

function About(props) {
    return (
      <section id="about-me">
        <div className="title">
          <h2>About Me</h2>
          <p>
            <a href='https://www.linkedin.com/in/kevinkelbach/' target="_blank" rel="noreferrer">LinkedIn</a><br/>
            <a href='https://github.com/Kelbach' target="_blank" rel="noreferrer">Github</a><br/>
          </p>
        </div>
        <img id="bio-image" src={bioImg} alt="K. Kelbach " />
        <article>
          <ul>
            <li>Hi, I'm Kevin </li>
            <li>Graduated the Full-Stack Coding Bootcamp from CWRU in Feb. 2022</li>
            <li>Reliable and flexible problem solver </li>
            <li>I have a background in physics, mathematics, music and audio engineering </li>
          </ul> 
          
          <p>  
              Full-stack web developer leveraging a physics background to efficiently problem solve and build a more intuitive user experience on the web. 
              Completed a certificate in full stack development from the Case Western Reserve University Coding Bootcamp in Feb. 2022 and acquiring newly developed skills in JavaScript, CSS, SQL, MERN and responsive web design. 
              Utilizing innovative problem solving and passion to develop apps, with a focus on mobile-first design and development. 
              With each project, my aim is to best engage my audience for an impactful user experience. 
              Over the course of bootcamp, I applied aspects of MVC and OOP in a recent group project designed for community interaction and worked on a team of four to develop a MERN application that connects users through a passion for video games. 
              Excited to leverage my skills as part of a fast-paced, quality-driven team to build better user experiences on the web. <br/>
              I look forward to learning more and using my creativity and problem solving to build what I imagine.
            </p>
          
          </article>
      </section>
    );
  }

export default About;