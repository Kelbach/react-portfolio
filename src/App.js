import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactMe from './components/ContactMe';
import './style.css';

function App() {
  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About Me':
        return <About />;
      case 'My Work':
        return <Gallery />;
      case 'Contact Me':
        return <ContactMe />;
      default:
        return <About />;
    }
  };

  return (
    <div>
    <header>
      <h1>
        <span>
          Kevin Kelbach
        </span>
      </h1>
      <nav>
        {/* Pass the state value and the setter as props to NavTabs */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Call the renderPage function passing in the currentPage */}
      </nav>  
    </header>
    <div>{renderPage(currentPage)}</div>
    </div>
  );
}  

export default App;
