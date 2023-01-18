import React from 'react';
import useCards from '../../hooks/employee/get-bands';
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
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="artists">Previous</a>
        </li>

        <li class="page-item">
          <a class="page-link" href="artists">1</a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="bands">2</a>
        </li>

        <li class="page-item disabled">
          <a class="page-link">Next</a>
        </li>
      </ul>
      </nav>
      </>
    );
  }
  
  export default CardContainerBands;