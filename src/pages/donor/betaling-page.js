import React from "react"
import NavigationBar from "../../components/navigation-bar/navigation-bar";
import FooterComponent from "../../components/footer/footer";
import BetalingBody from "../../components/bodies/betaling-body";


export default function BetalingPage(){
    return(
        <>
            <section className="Header">
                <NavigationBar/>
                <BetalingBody/>
            </section>
            <FooterComponent/>
        </>
    );
}
