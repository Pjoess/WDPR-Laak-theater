import NavigationBar from "../navigation-bar/navigation-bar";
import React from "react";
import FooterComponent from "../footer/footer";
import './programming.css'
import useData from "../../hooks/progamming/use-programming";
import handleImport from "../../hooks/progamming/upload-programming";
import { useState } from "react";

function ProgrammingBody() {

    const { data, state, handleSubmit, handleChange } = useData();
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

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
                {/* <div className="form">
                    <input type="file" accept=".csv" onChange={handleFileChange} />
                    <button onClick={() => handleImport(file)}>Upload</button>
                </div> */}
            </div>
        </>
    );
}

export default ProgrammingBody;