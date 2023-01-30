import axios from 'axios';
import './programming-info-body.css'
import { Link, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { UseDateFormatting } from '../../hooks/date/use-date-formatting';


export default function ProgrammingInfoBody({ showId}) {
    const [data, setData] = useState('');
    const location = useLocation();
    const { toDutchDate } = UseDateFormatting()
    const [confirmation, setConfirmation] = useState('');
    const [quantity, setQuantity] = useState(1);
    const param = new URLSearchParams(location.search);

    const handleChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setConfirmation(confirmation);
    }

    function handlePost() {
        axios.post(`${process.env.REACT_APP_API}/api/order/makeOrder`, {
            TicketAmount: quantity,
            ShowId: `${param.get("showid")}`,
            UserName: localStorage.getItem("username")
        })
            .then(response => setConfirmation(response.data.message))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        async function FetchShows() {

            axios
                .get(`${process.env.REACT_APP_API}/api/show/${param.get("showid")}`)
                .then(response => {
                    if (response.status === 200) {
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
                    <div tabIndex="0" key={data.orderId} className="card-centered" >
                        <div key={data.orderId}>
                            <img src={data.image} alt={data.eventId} width="100%" height="100%" />
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='titel' style={{ fontWeight: "bold" }}>
                                        <span style={{ padding: "12px" }}>Titel van de show:</span>
                                        <td style={{ fontWeight: "normal" }} >{data.event.name}</td>
                                    </td>
                                </tr>
                                <tr >
                                    <td className='datumTijd' style={{ fontWeight: "bold" }}>
                                        <span style={{ padding: "12px" }}>Datum en tijd:</span>
                                        <td style={{ fontWeight: "normal" }} >{toDutchDate(data.dateAndTime)}</td>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='datumTijd' style={{ fontWeight: "bold" }}>
                                        <span style={{ padding: "12px" }}>Show beschrijving</span>
                                        <td style={{ fontWeight: "normal" }} >{data.description}</td>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='ticket-container'>
                                            <form onSubmit={handleSubmit} style={{ padding: "12px" }}>
                                                <label htmlFor="ticket-quantity" style={{ fontWeight: "bold"} }>Aantal kaartjes: </label>
                                                <br />
                                                <input type="number" id="ticket-quantity" name="quantity" min="1" value={quantity} onChange={handleChange}/>
                                                <button className='download-button3 shadow' type="submit" onClick={handlePost}>Koop kaartjes</button>
                                                <Link to={`/tickets`}>
                                                    <button className="download-button2 shadow" type="submit" alt="button naar om te doneren aan een goed doel">
                                                        Ga naar je ticket
                                                    </button>
                                                </Link>
                                                {confirmation && <p>{confirmation}</p>}
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

