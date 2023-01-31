import React from 'react';
import GetArtists from '../../../hooks/employee/get-artists';
import CardSkeleton from '../../../components/widgets/card-skeleton';
import {Link} from "react-router-dom";

function Artists() {
    const { cardData } = GetArtists();
  
    return (
      <>
      <div>
        <h1>Artiesten</h1>
      </div>
      <div className="container">
        {cardData.map((data) => (
          <CardSkeleton key={data.name} {...data} />
        ))}
      </div>

      <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item disabled">
          <Link to="#" className="page-link">Previous</Link>
        </li>

        <li className="page-item active">
          <Link to="#" className="page-link">1</Link>
        </li>
        <li className="page-item">
          <Link to="#" className="page-link">2</Link>
        </li>

        <li className="page-item">
          <Link to="#" className="page-link">Next</Link>
        </li>
      </ul>
      </nav>
      </>
    );
  }
  
  export default Artists;