import NavigationBar from "../../../components/navigation-bar/navigation-bar";
import FooterComponent from "../../../components/footer/footer";
import { useEffect, useState } from "react";
import IndexBody from "../../../components/bodies/index-body";
import { UseLoginSession } from "../../../hooks/login/use-login-session";
import ArtistJoinGroupBody from "../../../components/bodies/artist/artist-join-group-body";
import ArtistEditGroupBody from "../../../components/bodies/artist/artist-edit-group-body";
import ArtistStartBody from "../../../components/bodies/artist/artist-start-body";
import IndexHeader from "../../../components/headers/index-header";

export default function ArtistPage(){
    const [state, setState]= useState('start');
    const {user} = UseLoginSession();

    // useEffect = () =>{
        
    // }
    

    return(
        <>
            <NavigationBar/>
            
            {state === 'start' &&(
                <>
                    <IndexHeader/>
                    <IndexBody/>
                    <ArtistStartBody state={state} setState={setState}/>
                </>
            )}
            {state === 'join' &&(
                <ArtistJoinGroupBody state={state} setState={setState}/>
            )}
            {state === 'edit' &&(
                <ArtistEditGroupBody state={state} setState={setState}/>
            )}
            


            <FooterComponent/>
        </>
    );
}


