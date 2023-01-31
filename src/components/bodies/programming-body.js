import React from "react";
import './programming.css'
// import UseProgramming from "../../hooks/progamming/use-programming";

export default function ProgrammingBody() {
    // const { data, state, handleSubmit, handleChange } = UseProgramming(); de state, handlesubmit en handle change wordt niet gebruikt..
    // const { data } = UseProgramming();

    return(
        <>
            <div className="Agenda-info">
                <div className="container-fluid agenda">
                    <div className="row">
                        <h1>Agenda</h1>
                    </div>
                </div>
                <div className="container table">
                    <table className="table table-dark table-striped table-hover table-bordered align-middle">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Bands</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(event => (
                                <tr key={event.Id}>
                                    <td>{event.Name}</td>
                                    <td>{event.Date}</td>
                                    <td>{event.Time}</td>
                                    <td>{event.Artists.join(', ')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}


