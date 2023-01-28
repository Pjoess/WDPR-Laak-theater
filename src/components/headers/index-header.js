import React from "react";
import './index-header.css'
import { CashCoin, TicketPerforated } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'




export default function IndexHeader() {
    
    return (
        <div>
            {/* HEADER */}
            <div className="container-fluid">
                <div className="row text-center" id="texthead">
                    <div className="col-12 header-item" id="img">
                        <h1>Theater Laak</h1>
                    </div>
                    <div className="col-12 header-item" id="index-header-text" type="text" alt="tekst met Voel je thuis bij Laak Theater!">
                        <p className="shadow">Voel je thuis bij Laak Theater!
                            <br />Beleef de beste momenten met onze voorstellingen.
                            <br />
                            <br />Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>
                    <div className="col-12 header-item">
                        <Link to="../donatie">
                            <button className="btn btn-outline-light btn-lg download-button shadow" type="button" alt="doneer link"  >
                                <CashCoin /> Doneer
                            </button>
                        </Link>
                        <Link to="../tickets">
                        <button className="btn btn-outline-light btn-lg download-button shadow" type="button" alt="tickets bestellen link">
                            <TicketPerforated /> Bestel Tickets
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}