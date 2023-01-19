import React from "react"
import NavigationBar from "../../components/navigation-bar/navigation-bar";
import FooterComponent from "../../components/footer/footer";
import ProgrammingBody from "../../components/bodies/programming-body";

export default function Programming(){
    return(
        <>
            <section className="Header">
                <NavigationBar/>
            </section>

            <ProgrammingBody/>
            <FooterComponent/>
        </>


    );
}