import axios from 'axios';
import './programming-info-body.css'
import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { UseDateFormatting } from '../../hooks/date/use-date-formatting';


export default function ProgrammingInfoBody({ showId }) {
    const [data, setData] = useState('');
    const location = useLocation();
    const { toDutchDate } = UseDateFormatting()
    const [confirmation, setConfirmation] = useState('');
    const [quantity, setQuantity] = useState(1);


    const handleChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmation = `Bedankt u heeft: ${quantity} tickets gekocht!`;
        setConfirmation(confirmation);
    }

    function handlePost() {
        axios.post(`${process.env.REACT_APP_API}/api/`, {
            key1: 'value1',
            key2: 'value2'
        })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    }

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
                                    <td>{toDutchDate(data.dateAndTime)}</td>
                                </tr>
                                <tr>
                                    <td>{data.description}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='ticket-container'>
                                            <form onSubmit={handleSubmit}>
                                                <label htmlFor="ticket-quantity">Aantal kaartjes: </label>
                                                <input
                                                    type="number"
                                                    id="ticket-quantity"
                                                    name="quantity"
                                                    min="1"
                                                    value={quantity}
                                                    onChange={handleChange}
                                                />
                                                <button className='download-button3 shadow' type="submit" onClick={handlePost}>Koop kaartjes</button>
                                                {confirmation && <p>{confirmation}</p>}
                                                <Link to={`/tickets?showid=${data.id}`}>
                                                    <button className="download-button2 shadow" type="submit" alt="button naar om te doneren aan een goed doel">
                                                        Ga naar je ticket
                                                    </button>
                                                </Link>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            }

        </>
    );
}

