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
            Hi. I'm Kevin. I hope to be a <a href="https://media-exp1.licdn.com/dms/image/C4E03AQFvmqPxFpkHPA/profile-displayphoto-shrink_200_200/0/1576687601705?e=1634774400&v=beta&t=LFUqUYyhPg5pqjCPp_02tcMCmIdHMhOYcrtBH3cU0o4" alt="Web Dev Class Instructor">
            Web Developer</a>. I have a background in physics, mathematics, music and audio engineering.
            I look forward to learning more about this medium in which I can apply my creativity.
          </p>
        </article>
      </section>
    );
  }

export default About;