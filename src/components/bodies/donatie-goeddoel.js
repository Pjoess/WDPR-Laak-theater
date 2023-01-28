import './donatie-body.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


export default function DonatieGoeddoelBody() {
    const [data, setData] = useState([]);
    const tokenStr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwNTU3YTFjZi00NjNkLTQ1NTMtODMyZS1kYjBmN2QxODlmMWQiLCJqdGkiOiI3MDQ5NzJhMC05ZWQzLTRlMjktOTk1MS1jYzQzZjQxYzMxMmUiLCJpYXQiOiIwMS8yNi8yMDIzIDE3OjIxOjE4IiwiVXNlcklkIjoiMDU1N2ExY2YtNDYzZC00NTUzLTgzMmUtZGIwZjdkMTg5ZjFkIiwiRW1haWwiOiJtaWF1d0BtaWF1dy5jb20iLCJleHAiOjE5OTAzNzI4NzgsImlzcyI6IklrRG9uZWVyIiwiYXVkIjoiKiJ9.Sy5Bk_iJG8XHAwFjQZtKdqW2bUL0-vHHP90W0tKOHnY"

    useEffect(() => {
        axios.get('https://ikdoneer.azurewebsites.net/api/goededoelen', {
            headers: {
                'Authorization': `Bearer ${tokenStr}`
            }
        }
        )
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className='tekst-container'>
                <h2 className='tekstt' style={{textAlign: "center"}}>Kies een goed doel om aan te doneren</h2>
            </div>
            <div className="card-container">
                {data.map((item, index) => (
                    <div key={item.id} className={`card card-${index}`}>
                        <div className="card-image" style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                        <div className="card-content">
                            <h2 className="card-title">{item.naam}</h2>
                            <p className="card-text">{item.description}</p>
                            <Link to="/doneren?goeddoel=${item.id}">
                                <button className="download-button1 shadow" type="button" alt="button naar om te doneren aan een goed doel">
                                Doneer
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}