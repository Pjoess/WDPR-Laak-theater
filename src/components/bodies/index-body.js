import React from "react";
import './index-body.css';


export default function IndexBody(){
    return(    
        <div className="informatie">
        
            <div className="container text-center cards">

                <div className="col-lg-6 collum">
                    <div className="card" >
                    <img src="..." className="card-img-top" alt="card plaatje" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" alt="card link">Go somewhere</a>
                    </div>
                    </div>
                </div>


                <div className="col-lg-6 collum">
                    <div className="card">
                    <img src="..." className="card-img-top" alt="card plaatje" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary" alt="card link">Go somewhere</a>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
}