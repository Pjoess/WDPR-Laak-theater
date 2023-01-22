import React from 'react';
import useCards from '../../hooks/groupJoining/useGetGroups';
import Card from './card-skeleton';

function CardContainerBands() {
    const { cardData } = useCards();
  
    return (
      <>
      <div>
        <h1>Bands</h1>
      </div>
      <div className="container">
        {cardData.map((data) => (
          <Card key={data.name} {...data} />
        ))}
      </div>
      <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="artists">Previous</a>
        </li>

        <li className="page-item">
          <a className="page-link" href="artists">1</a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="bands">2</a>
        </li>

        <li className="page-item disabled">
          <a className="page-link">Next</a>
        </li>
      </ul>
      </nav>
      </>
    );
  }
  
  export default CardContainerBands;