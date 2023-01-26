import React from "react";
import './donatie-header.css';

export default function DonatieHeader() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row text-center" id="textheaddonatie">
                    <div className="col-12 header-item" id="img">
                        <h1>Wil jij een bijdrage leveren aan het theater?</h1>
                    </div>
                    <div className="col-12 header-item" id="index-header-text">
                        <p className="shadow">Voel je thuis bij Laak Theater!
                            <br />Beleef de beste momenten met onze voorstellingen.
                            <br />
                        </p>
                    </div>
                    <div className="col-12 header-item">
                    </div>
                </div>
            </div>
        </div>
    );
}