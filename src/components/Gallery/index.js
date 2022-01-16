import React from 'react';
import SiteCard from '../SiteList'
import sites from './sites.json'

function Gallery() {
    
  return (
    
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
    
  );
}
export default Gallery;
