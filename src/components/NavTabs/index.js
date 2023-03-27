import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['About Me', 'My Work', 'Contact Me', 'Resume' ];
  return (
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <span
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;