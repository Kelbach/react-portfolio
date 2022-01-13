import React from 'react';


function Nav(props) {
  const {
    contactSelected,
    setContactSelected,
  } = props;

  return (
    <header>
      <h1>
        <a href="/">
          <span role="img">Kevin Kelbach</span> 
        </a>
      </h1>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about-me" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>
                Contact Me
            </span>
          </li>
          <li>
          <a href="#my-work" onClick={() => setContactSelected(false)}>
              My Work
          </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;