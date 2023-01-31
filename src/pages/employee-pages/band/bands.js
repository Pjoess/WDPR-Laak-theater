import React from 'react';
import GetBands from '../../../hooks/employee/get-bands';
import CardSkeleton from '../../../components/widgets/card-skeleton';
import {Link} from "react-router-dom";
import EmployeeNavigationBar from "../../../components/navigation-bar/employee.navigation-bar";

function Bands() {
    const { cardData } = GetBands();
  
    return (
      <>
        <EmployeeNavigationBar/>
      <div>
        <h1>Bands</h1>
      </div>
      <div className="container">
        {cardData.map((data) => (
          <CardSkeleton key={data.name} {...data} />
        ))}
      </div>
      <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item">
          <Link to="#" className="page-link">Previous</Link>
        </li>

        <li className="page-item">
          <Link to="#" className="page-link">1</Link>
        </li>
        <li className="page-item active">
          <Link to="#" className="page-link">2</Link>
        </li>

        <li className="page-item disabled">
          <Link to="#" className="page-link">Next</Link>
        </li>
      </ul>
      </nav>
      </>
    );
  }
  
  export default Bands;