import React from "react";
import CardContainerGroups from "../../components/bodies/groupsEdit";
import { useEffect } from "react";
import { useLoginSession } from "../../hooks/login/use-login-session";
import { useNavigate } from "react-router";

function ArtistGroupsEdit(){

    const user = useLoginSession();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.role) {

            navigate("/login")
        }
        else if(user.role !== "artist"){
            navigate("/notauthorized")
        }
    }, [user, navigate])

    return(
        <>
            
            <CardContainerGroups/>
        </>
    
    );
}

export default ArtistGroupsEdit;