import React from "react";

function CardSkeleton({ type, name, description, image }) {
    return (
      <div className="card">
        <img src={image} className="card-img-top" alt="/" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{type}</p>
        </div>
      </div>
    );
  }
  
  export default CardSkeleton;