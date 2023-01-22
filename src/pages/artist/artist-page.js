import React, { useEffect } from "react";
import NavigationBar from "../../components/navigation-bar/artist-navigationbar";
import FooterComponent from "../../components/footer/footer";
import { Link, useNavigate } from "react-router-dom";
import './artist.css';
import { useLoginSession } from "../../hooks/login/use-login-session";

function ArtistPage(){
    const user = useLoginSession();
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (!user.role) {

    //         navigate("/login")
    //     }
    //     else if(user.role !== "artist"){
    //         navigate("/notauthorized")
    //     }
    // }, [user, navigate])


    return(
        <>
            <NavigationBar/>
            <div>
            <div className="container text-center cards">

                {/* <!-- 2 SMALL BLOCK ROW --> */}
                <div class="row">
                    <div class="col-md-12 col">
                    <div class="card card-1">
                        <div class="card-body">
                        <h5 class="card-title">Groepen joinen</h5>
                        <p class="card-text">Join hier een groep.</p>
                        <a href="/groupJoin" class="btn btn-outline-light btn-md download-button shadow">Ga naar Groepen joinen</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col">
                    <div class="card card-1">
                        <div class="card-body">
                        <h5 class="card-title">Groepen Editen</h5>
                        <p class="card-text">Edit hier een groep die u gejoined bent.</p>
                        <a href="/groupsEdit" class="btn btn-outline-light btn-md download-button shadow">Ga naar Groepen Editen</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <FooterComponent/>
        </>
    
    );
}

export default ArtistPage;
