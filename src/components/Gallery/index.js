import React from 'react';
import SiteCard from '../SiteList'
import sites from './sites.json'

function Gallery() {
    
  return (
    <div className="my-work">
    <div className="title"><h2>My Work</h2></div>
    <div className="work-container">
    <div className="work-row">
      {sites.map(site => (
      <SiteCard 
        id={site.id}
        key={site.id}
        name={site.name}
        tech={site.tech}
        deployed={site.deployed}
        github={site.github}
        image={site.image}
      />
      ))}
    </div>
    </div>
    </div>
  );
}
export default Gallery;
