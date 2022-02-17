import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
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
      case 'Resume':
        return <Resume />;
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
      { currentPage === 'About Me' && <section className="hero">
      <article>
        <p>Destiny is a gift. Some go their entire lives, living existence as a quiet desperation. Never learning the truth that what feels as though a burden pushing down upon our shoulders, is actually, a sense of purpose that lifts us to greater heights. Never forget that fear is but the precursor to valour, that to strive and triumph in the face of fear, is what is means to be a hero.
        </p>
      </article> 
    </section> }
    </header>
    <div>{renderPage(currentPage)}</div>
    <footer>
      <h4>Made With Heart by Kevin Kelbach</h4>
    </footer>
    </div>
  );
}  

export default App;
