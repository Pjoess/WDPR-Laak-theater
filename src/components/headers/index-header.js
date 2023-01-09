import React from "react";
import "./index-header.css";
import { Ticket, TicketPerforated } from 'react-bootstrap-icons';
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
                        <div className="col-12 header-item">
                            <p className="">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                <br/>Aenean commodo ligula eget dolor. 
                                <br/>Aenean massa. 
                                <br/>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>
                        <div className="col-12 header-item">
    
                            <button type="button" className="btn btn-outline-light btn-lg download-button shadow">
                            <EnvelopeHeart/> Doneer
                            </button>
    
                            <button type="button" className="btn btn-outline-light btn-lg download-button shadow">
                            <TicketPerforated/> Bestel Tickets
                            </button>
                        </div>
                    </div>
                </div>
    
    
    
                <div className="informatie">
    
                        <div className="container text-center cards">
    
                            <div className="col-lg-6 collum">
                                <div className="card" >
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>
                            </div>
    
    
                            <div className="col-lg-6 collum">
                                <div className="card">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>
                            </div>
    
                        </div>
                </div>
        </div>
    );
}