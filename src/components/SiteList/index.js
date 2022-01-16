import React from 'react';


// Props are passed through our functional component.
function SiteCard(props) {
  return (
    <div className="work">
        <div className="image-banner">
            <h3>{props.name}</h3>
            <h4>{props.tech}</h4>
            <p>
                <a href={props.deployed}>Deployed App</a><br/>
                <a href={props.github}>GitHub Repo</a>
            </p>
        </div>
        <img src={props.image} alt={props.name} />
    </div>
  );
}

export default SiteCard;