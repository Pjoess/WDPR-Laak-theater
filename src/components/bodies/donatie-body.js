import './donatie-body.css';
import React, { useState } from 'react';
import { PiggyBank } from "react-bootstrap-icons";
import { Link } from 'react-router-dom'

export default function DonatieBody() {

    return (
        <>
            <div className='containerButtons'>
                <Link to="/doneren?goeddoel=68">
                    <button className="download-button1 shadow" type="button" alt="link naar om te doneren voor theater laak"  >
                        <PiggyBank /> Doneer aan onze theater
                    </button>
                </Link>
                <Link to="/donatie-goeddoel">
                    <button className="download-button1 shadow" type="button" alt="link naar om te doneren aan een goed doel ">
                        <PiggyBank /> Doneer aan een goed doel
                    </button>
                </Link>
            </div>
        </>
    );
}




