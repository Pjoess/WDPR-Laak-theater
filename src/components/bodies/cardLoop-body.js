// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './cardLoop-body.css'

// export default function CardLoopBody() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//             setData(response.data);
//         }
//         fetchData();
//     }, []);

//     return (
//         <>
//             <div className="test">miauw</div>

//             <div className="cards">
//                 <table>
//                     {data.map(event => (
//                         <tr key={event.Id}>
//                             <td>{event.Name}</td>
//                             <td>{event.Date}</td>
//                             <td>{event.Time}</td>
//                             <td>{event.Artists.join(', ')}</td>
//                         </tr>
//                     ))}
//                 </table>
//             </div>
//         </>
//     );
// }


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function CardLoopBody() {
//     const [data, setData] = useState([]);
    

//     useEffect(() => {
//         // Fetch data from the database
//         axios.get("http://localhost:7002")
//             .then(response => {
//                 setData(response.data);
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }, []);

//     return (
//         <div className="card-loop-container">
//             {data.map(item => (
//                 <div className="card" key={item.id}>
//                     <img src={item.imageUrl} alt={item.name} />
//                     <h2>{item.name}</h2>
//                     <p>{item.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default CardLoopBody;

i
