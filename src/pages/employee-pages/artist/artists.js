import React from 'react';
import GetArtists from '../../../hooks/employee/get-artists';
import CardSkeleton from '../../../components/widgets/card-skeleton';
import {Link} from "react-router-dom";
import { useState} from 'react';
import axios from 'axios';

function Artists() {
    const { cardData } = GetArtists();
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
      axios.post(`${process.env.REACT_APP_API}/api/artist/add`, formData)
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
      <div>
        <h1>Artiesten</h1>
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
        <li className="page-item disabled">
          <Link to="/employee/artist" className="page-link">Previous</Link>
        </li>

        <li className="page-item active">
          <Link to="/employee/artist" className="page-link">1</Link>
        </li>
        <li className="page-item">
          <Link to="/employee/group" className="page-link">2</Link>
        </li>

        <li className="page-item">
          <Link to="/employee/group" className="page-link">Next</Link>
        </li>
      </ul>
      </nav>
      </>
    );
  }
  
  export default Artists;