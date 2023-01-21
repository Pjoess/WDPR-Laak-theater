import './fetchData-body.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap';

function FetchData() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    { label: 'Option 1', value: 'show' },
    { label: 'Option 2', value: 'muziek' },
    { label: 'Option 3', value: 'toneel' },
  ];



  useEffect(() => {
    async function fetchData() {
      axios
        .get(`${process.env.REACT_APP_API}/api/show`)
        .then(response => {
          if (response.status === 200) {
            console.log(response.data);
            setData(response.data)
            setFilteredData(response.data);
          } else {
            throw new Error(response.status);
          }
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    }
    fetchData();
  }, []);

  const handleSearch = event => {
    setSearchValue(event.target.value);
    setFilteredData(
      data.filter(item =>
        item.Name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

   const handleOptionSelect = event => {
    setSelectedOption(event.target.value);
    const filteredData = data.filter((item) => item.Name === selectedOption);
    setFilteredData(filteredData);
  }


  return (
    <div>
      <form>
        <input className='search' type="text" placeholder="Search" value={searchValue} onChange={handleSearch}/>
      </form>
      <select value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      <div className="card-container">
      {Array.isArray(filteredData) && filteredData.length > 0 ? (
          filteredData.map((item, index) =>
          (
            <div tabIndex="0" key={index} className="card">
              <div key={index} className="card">
                <img src={item.imgUrl} alt={item.eventId} width="100" height="100" />
              </div>
              <tr >
                <td>{item.eventId}</td>
                <td>{item.dateAndTime}</td>
              </tr>
              {/* de beschrijving moet nog aangepast worden door de echte bestaande data. */}
              <td>{item.beschrijving}jsbhdfuiefhg</td>
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}

export default FetchData;
