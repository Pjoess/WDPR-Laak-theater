import './ticket-body.css'
import axios from 'axios';
import './programming-info-body.css'
import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { UseDateFormatting } from '../../hooks/date/use-date-formatting';


export default function TicketBody({ showId }) {
    const [data, setData] = useState([]);
    const location = useLocation();
    const { toDutchDate } = UseDateFormatting()

    useEffect(() => {
        async function FetchShows() {
            const param = new URLSearchParams(location.search);

            axios
                .get(`${process.env.REACT_APP_API}/api/order/getorder?username=${localStorage.getItem("username")}`)
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
                <div>
                    <div className="Agenda-info">
                        <div className="container-fluid agenda">
                            <div className="row">
                                <h1>Datum & tickets</h1>
                                <h5>Hier kunnen jullie de datum en aantal tickets kiezen.</h5>
                            </div>
                        </div>
                    </div>
                    <table>
                        {data.map(order => (
                            <tbody>
                                <br />
                                <tr className="event-select fnt-normal selected secondary-bg-c">
                                    <td className="name" style={{ fontWeight: "bold" }}>
                                        <td>
                                            <span style={{ padding: "12px" }}>Titel:</span>
                                            <td style={{ fontWeight: "normal" }} >{order.show.event.name}</td>
                                        </td>
                                    </td>
                                    <td className="price" style={{ fontWeight: "bold" }}>
                                        <td>
                                            <span style={{ padding: "12px" }}>Prijs:</span>
                                            <td style={{ fontWeight: "normal" }} > €{order.show.event.price}</td>
                                        </td>
                                    </td>
                                    <td className="date" style={{ fontWeight: "bold" }}>
                                        <td>
                                            <span style={{ padding: "12px" }}>Datum:</span>
                                            <td style={{ fontWeight: "normal" }} >{toDutchDate(order.show.dateAndTime)}</td>
                                        </td>
                                    </td>
                                    <td className="description" style={{ fontWeight: "bold" }}>
                                        <td>
                                            <span style={{ padding: "12px" }}>Beschrijving:</span>
                                            <td style={{ fontWeight: "normal" }} >{order.show.description}</td>
                                        </td>
                                    </td>
                                    <td className="Ticket" style={{ fontWeight: "bold" }}>
                                        <td>
                                            <span style={{ padding: "12px" }}>Aantal kaarten:</span>
                                            <td style={{ fontWeight: "normal" }} >{order.ticketAmount}</td>
                                        </td>
                                    </td>
                                    <td className="Aanwezigheid" style={{ fontWeight: "bold" }}>
                                        <td>
                                            <span style={{ padding: "12px" }}>Aanwezigheid:</span>
                                            <td style={{ fontWeight: "normal" }} >{order.visited}</td>
                                        </td>
                                    </td>
                                </tr>
                                <br />
                            </tbody>
                        )
                        )}
                    </table>
                </div>
            }

        </>
    );
}



// import './ticket-body.css'
// import React, { useState } from 'react';
// import { Ticket } from 'react-bootstrap-icons';

// export default function TicketBody({ eventName, date, time, location, price }) {
//     return (
//         <div>
//             <h2>{eventName}</h2>
//             <p>Date: {date}</p>
//             <p>Time: {time}</p>
//             <p>Location: {location}</p>
//             <p>Price: {price}</p>
//         </div>
//     );
// }

// function TicketList({ tickets }) {
//     return (
//         <div>
//             {tickets.map((ticket) => (
//                 <Ticket
//                     key={ticket.id}
//                     eventName={ticket.eventName}
//                     date={ticket.date}
//                     time={ticket.time}
//                     location={ticket.location}
//                     price={ticket.price}
//                 />
//             ))}
//         </div>
//     );
// }

// function NewTicketForm({ addTicket }) {
//     const [eventName, setEventName] = useState('');
//     const [date, setDate] = useState('');
//     const [time, setTime] = useState('');
//     const [location, setLocation] = useState('');
//     const [price, setPrice] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         addTicket({ eventName, date, time, location, price });
//         setEventName('');
//         setDate('');
//         setTime('');
//         setLocation('');
//         setPrice('');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Event Name"
//                 value={eventName}
//                 onChange={(event) => setEventName(event.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Date"
//                 value={date}
//                 onChange={(event) => setDate(event.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Time"
//                 value={time}
//                 onChange={(event) => setTime(event.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Location"
//                 value={location}
//                 onChange={(event) => setLocation(event.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Price"
//                 value={price}
//                 onChange={(event) => setPrice(event.target.value)}
//             />
//             <button type="submit">Add Ticket</button>
//         </form>
//     );
// }