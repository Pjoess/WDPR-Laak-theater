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
                        <h3 className="shadow">Door te doneren help je ons en een ander!
                            <br />“Giving is not just about making a donation. It is about making a difference.” 
                            <br />
                        </h3>
                    </div>
                    <div className="col-12 header-item">
                    </div>
                </div>
            </div>
        </div>
    );
}