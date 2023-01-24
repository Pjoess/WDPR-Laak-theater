import NavigationBar from "../../../components/navigation-bar/navigation-bar";
import FooterComponent from "../../../components/footer/footer";
import { useState } from "react";
import IndexBody from "../../../components/bodies/index-body";
import { UseLoginSession } from "../../../hooks/login/use-login-session";
import ArtistJoinGroupBody from "../../../components/bodies/artist/artist-join-group-body";
import ArtistStartBody from "../../../components/bodies/artist/artist-start-body";

export default function ArtistPage(){
    const [state, setState]= useState('start');
    const user = UseLoginSession();



    return(
        <>
            <NavigationBar/>

            {state === 'start' &&(
                <>
                    <IndexBody/>
                    <ArtistStartBody state={state} setState={setState}/>
                </>
            )}
            {state === 'join' &&(
                <ArtistJoinGroupBody/>
            )}
            


            <FooterComponent/>
        </>
    );
}


