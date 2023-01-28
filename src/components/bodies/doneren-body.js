import './doneren-body.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


export default function DonerenBody() {
    const tokenString = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwNTU3YTFjZi00NjNkLTQ1NTMtODMyZS1kYjBmN2QxODlmMWQiLCJqdGkiOiIwNGNlZjkxZS1mZDYyLTQzOGUtOGZkOS0xMmM0MzY1YWRiZWUiLCJpYXQiOiIwMS8yNi8yMDIzIDE3OjMwOjM4IiwiVXNlcklkIjoiMDU1N2ExY2YtNDYzZC00NTUzLTgzMmUtZGIwZjdkMTg5ZjFkIiwiRW1haWwiOiJtaWF1d0BtaWF1dy5jb20iLCJleHAiOjE5OTAzNzM0MzgsImlzcyI6IklrRG9uZWVyIiwiYXVkIjoiKiJ9.vDaiHFrOx5EMLxA5x4I4BFxqaK9QTbLuWB3-RA_GELc";
    const [goeddoel, setGoeddoel] = useState('');
    const [hoeveelheid, setHoeveelheid] = useState('');
    const [tekst, setTekst] = useState('');
    const [nietGelukt, setNietGelukt] = useState('');
    const [gelukt, setGelukt] = useState('');
    const [parameter, setParameter] = useState('');
    const location = useLocation();

    function handleDonationSubmit(event) {
        event.preventDefault();
        try {
            const data = {
                Doel: parameter,
                Hoeveelheid: hoeveelheid,
                Tekst: tekst
            }
            const response = axios.post('https://ikdoneer.azurewebsites.net/api/donatie', data, {
                headers: {
                    'Authorization': `Bearer ${tokenString}`
                }
            });
            if (response.Message = "succes") {
                console.log('Donatie gelukt!');
                setGelukt("Het doneren is gelukt");
                setNietGelukt("");
            }
        } catch (nietGelukt) {
            console.nietGelukt(nietGelukt);
            setNietGelukt("Het doneren is niet gelukt");
            setGelukt("");
        }
    };


    useEffect(() => {
        // const queryParams = new URLSearchParams(location.search);
        // setParameter(queryParams.get('goeddoel'));

        window.location.href = "https://ikdoneer.azurewebsites.net/Toegang?url=http://localhost:3000"

        // axios.defaults.headers.common["Authorization"] = `Bearer ${tokenString}`;

        // axios.get(`https://ikdoneer.azurewebsites.net/Toegang?url=http://localhost:3000${parameter}`,)
        //     .then(response => {
        //         setGoeddoel(response.data);
        //     })
        //     .catch(nietGelukt => {
        //         console.log(nietGelukt);
        //     });
    },);



    return (
        <>
            <div className='containerForm'>
                <div>
                    <form className='theaterdoneerform' onSubmit={handleDonationSubmit}>
                        {goeddoel &&
                            <><h2>Doneer aan {goeddoel.naam}</h2>
                                <label>
                                    <span className='hoeveelheid-d'>Hoeveelheid:</span>
                                    <input type="number" value={hoeveelheid} onChange={e => setHoeveelheid(e.target.value)} />
                                </label>
                                <br />
                                <label>
                                    <span className='tekst-d'>tekst:</span>
                                    <input type="text" value={tekst} onChange={e => setTekst(e.target.value)} />
                                </label>
                                <br />
                                <button type="submit">Doneer</button>
                            </>
                        }
                        {nietGelukt && <p className="nietGelukt">{nietGelukt}</p>}
                        {gelukt && <p className="gelukt">{gelukt}</p>}
                    </form>
                </div>
            </div>
        </>
    );
}

