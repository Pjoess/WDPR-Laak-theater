import './fetch-data-body.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FetchData() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    { label: 'Dit is een voorbeeld', value: 'toneel' },
    { label: 'Voorbeeld 2', value: 'show' },
    { label: 'oorbeeld 3', value: 'nog iets' },
  ];


  useEffect(() => {
    async function FetchShows() {
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
    FetchShows();
  }, []);



  const handleSearch = event => {
    setSearchValue(event.target.value);
    setFilteredData(
      data.filter(item =>
        item.Name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    setFilteredData(data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate.getTime() === date.getTime();
    }));
  }

  const handleOptionSelect = event => {
    setSelectedOption(event.target.value);
    let filteredData = data.filter((item) => item.Name === selectedOption);
    setFilteredData(filteredData)
  };

  return (
    <div>
      <div className='containerButtons'>
        <div className='datepicker'>
          <DatePicker placeholderText='Filter op datum' selected={selectedDate} onChange={date => setSelectedDate(date)}/>
        </div>
        <form>
          <input className='search' type="text" placeholder="Search" value={searchValue} onChange={handleSearch} />
        </form>
        <select className='selectedoption' value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
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
              <td>{item.beschrijving}Placeholder beschrijving</td>
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