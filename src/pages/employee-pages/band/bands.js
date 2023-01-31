import React from 'react';
import GetBands from '../../../hooks/employee/get-bands';
import CardSkeleton from '../../../components/widgets/card-skeleton';
import {Link} from "react-router-dom";
import EmployeeNavigationBar from "../../../components/navigation-bar/employee.navigation-bar";
import { useState } from 'react';
import axios from 'axios';

function Bands() {
    const { cardData } = GetBands();
    const [formData, setFormData] = useState({
      Name: '',
    });

    const handleInputChange = event => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      });
    };

    const handleSubmit = event => {
      event.preventDefault();
      axios.post(`${process.env.REACT_APP_API}/api/group/add`, formData)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch(error => {
          console.error(error);
        });
    };
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

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={formData.Name}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item">
          <Link to="/employee/artist" className="page-link">Previous</Link>
        </li>

        <li className="page-item">
          <Link to="/employee/artist" className="page-link">1</Link>
        </li>
        <li className="page-item active">
          <Link to="/employee/group" className="page-link">2</Link>
        </li>

        <li className="page-item disabled">
          <Link to="/employee/group" className="page-link">Next</Link>
        </li>
      </ul>
      </nav>
      </>
    );
  }
  
  export default Bands;