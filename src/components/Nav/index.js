import React from 'react';


function Nav() {
  return (
    <header>
      <h1>
        <span>
          Kevin Kelbach
        </span>
      </h1>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <span>
              About me
            </span>
          </li>
          <li className="mx-2">
            <span>
                Contact Me
            </span>
          </li>
          <li className="mx-2">
          <span>
              My Work
          </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;