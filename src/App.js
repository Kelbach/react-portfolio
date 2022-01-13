import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import './style.css'

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav  
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Gallery></Gallery>
          </>
        ) : (
            <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
