import React from "react";
import { Telephone } from "react-bootstrap-icons";
import { Mailbox } from "react-bootstrap-icons";
import { House } from "react-bootstrap-icons";
import './contact-body.css'

export default function ContactBody() {
    return (
        <>
            <div className=" text-center contact-cards">
                <div className="col-lg-12 collum-contact">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Contact mogelijkheden</h4>
                            <p className="card-text">U kunt ons altijd contacteren als er een probleem is met de website, of als u vragen heeft.</p>
                            <hr />
                            <h5>Contact</h5>
                            <ul className="list-unstyled">
                                <li><Mailbox /> Email: contact@example.com</li>
                                <li><Telephone /> Telefoonnummer: 555-555-5555</li>
                                <li><House /> Address: 123 Main St, Anytown USA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}