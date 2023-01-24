import React from "react";
import "./index-header.css";
import { TicketPerforated } from 'react-bootstrap-icons';
import { EnvelopeHeart } from "react-bootstrap-icons";

export default function IndexHeader(){
    return(
        <div>
            {/* HEADER */}
                <div className="container-fluid">
                    <div className="row text-center" id="texthead">
                        <div className="col-12 header-item" id="img">
                            <h1>Theater Laak</h1>
                        </div>
                        <div className="col-12 header-item" id="index-header-text">
                            <p className="shadow">Voel je thuis bij Laak Theater!
                                <br/>Beleef de beste momenten met onze voorstellingen.
                                <br/>
                                <br/>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>
                        <div className="col-12 header-item">
    
                            <button type="button" className="btn btn-outline-light btn-lg download-button shadow" alt="doneer link">
                            <EnvelopeHeart/> Doneer
                            </button>
    
                            <button type="button" className="btn btn-outline-light btn-lg download-button shadow" alt="tickets bestellen link">
                            <TicketPerforated/> Bestel Tickets
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
}