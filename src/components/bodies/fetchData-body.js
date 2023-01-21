import './fetchData-body.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      axios
        .get(`${process.env.REACT_APP_API}/api/show`)
        .then(response => {
          if (response.status === 200) {
            console.log(response.data);
            setData(response.data)
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

  return (
    <div>
        <div className="card-container">
 {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <div key={index} className="card">
                <tr >
                  <td>{item.eventId}</td>
                  <td>{item.dateAndTime}</td>
                </tr>
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
