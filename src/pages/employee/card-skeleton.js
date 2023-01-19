import React from "react";

function Card({ type, name, description, image }) {
    return (
      <div className="card">
        <img src={image} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{type}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
  
  export default Card;