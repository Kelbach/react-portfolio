import React from 'react';
import defaultImg from '../../assets/banner/IMG_0253.jpg';

// Props are passed through our functional component.
function SiteCard(props) {
  return (
    <div className="work">
        <div className="image-banner">
            <h3>{props.name}</h3>
            <h4>{props.tech}</h4>
            <p>
                { props.deployed ? <a href={props.deployed} target="_blank" rel="noreferrer">Deployed App</a> : <></>}
                <br/><a href={props.github} target="_blank" rel="noreferrer">GitHub Repo</a><br/><br/>
                {props.about}
            </p>
        </div>
        { props.image ? <img src={props.image} alt={props.name} /> : <img src={defaultImg} alt={props.name} />}
    </div>
  );
}

export default SiteCard;