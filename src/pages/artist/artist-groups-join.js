import CardContainerGroups from "../../components/bodies/groups";
import React from "react";
import { useLoginSession } from "../../hooks/login/use-login-session";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function ArtistGroupsJoin(){


    // const user = useLoginSession();
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
            
            <CardContainerGroups/>
        </>
    
    );
}

export default ArtistGroupsJoin;