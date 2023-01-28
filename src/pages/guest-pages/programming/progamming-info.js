import React from "react"
import NavigationBar from "../../../components/navigation-bar/navigation-bar";
import FooterComponent from "../../../components/footer/footer";
import ProgrammingInfoBody from "../../../components/bodies/programming-info-body"



export default function ProgrammingInfo(){
    
    return(
        <>
            <section className="Header">
                <NavigationBar/>
            </section>
            <ProgrammingInfoBody/>
            <FooterComponent/>
        </>
    );
}