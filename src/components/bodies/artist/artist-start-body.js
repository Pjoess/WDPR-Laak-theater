import React from "react";

export default function ArtistStartBody({ state, setState }){

    return(
        <>
            <div className="row">
                <div className="col-md-6 col">
                    <div className="card card-1">
                        <div className="card-body">
                            <h5 className="card-title">Groepen joinen</h5>
                            <p className="card-text">Join hier een groep.</p>
                            <button onClick={() => setState('join')}>join</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col">
                    <div className="card card-1">
                        <div className="card-body">
                            <h5 className="card-title">Groepen editen</h5>
                            <p className="card-text">Edit hier een groep.</p>
                            <button onClick={() => setState('edit')}>edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}