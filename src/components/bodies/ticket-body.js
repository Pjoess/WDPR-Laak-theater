import './ticket-body.css'
import axios from 'axios';
import './programming-info-body.css'
import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { UseDateFormatting } from '../../hooks/date/use-date-formatting';


export default function TicketBody({ showId }) {
    const [data, setData] = useState('');
    const location = useLocation();
    const { toDutchDate } = UseDateFormatting()

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
                        <tbody>
                            <tr className="event-select fnt-normal selected secondary-bg-c">
                                <td className="name">
                                    Titel:
                                    <td>{
                                        data.event.name}
                                    </td>
                                </td>
                                <td className="price">
                                    Prijs:
                                    <td>
                                        €{data.event.price}
                                    </td>
                                </td>
                                <td className="date">
                                    Datum:
                                    <td>
                                        {toDutchDate(data.dateAndTime)}
                                    </td>
                                </td>
                                <td className="description">
                                    Beschrijving:
                                    <td>
                                        {data.description}
                                    </td>
                                </td>
                                <td className="amount">
                                    Aantal Kaarten:
                                    <td>
                                        {data.description}
                                    </td>
                                </td>
                            </tr>
                        </tbody>
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