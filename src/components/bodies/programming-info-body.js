import axios from 'axios';
import './programming.css'
import './programming-info-body.css'
import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';


export default function ProgrammingInfoBody({ showId }) {
    const [data, setData] = useState('');
    const location = useLocation();



    useEffect(() => {
        async function FetchShows() {
            const param = new URLSearchParams(location.search);

            axios
                .get(`${process.env.REACT_APP_API}/api/show/${param.get("showid")}`)
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
        FetchShows();
    });




    return (
        <>
            {data &&
                <div className='card-centered-container'>
                    <div tabIndex="0" key={data.showId} className="card-centered" >
                        <div key={data.showId}>
                            <img src={data.image} alt={data.eventId} width="100%" height="100%" />
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{data.event.name}</td>
                                </tr>
                                <tr >
                                    <td>{data.dateAndTime}</td>
                                </tr>
                                <tr>
                                    <td>{data.description}</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <Link to={`/tickets`}>
                    <button className="download-button1 shadow" type="button" alt="button naar om te doneren aan een goed doel">
                        Koop ticket
                    </button>
                </Link> */}
                    </div>
                </div>
            }
        </>
    );
}

