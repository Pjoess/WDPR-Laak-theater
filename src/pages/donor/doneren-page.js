import React from "react"
import NavigationBar from "../../components/navigation-bar/navigation-bar";
import FooterComponent from "../../components/footer/footer";
import DonerenBody from "../../components/bodies/doneren-body";


export default function DonatiePage(){
    return(
        <>
            <section className="Header">
                <NavigationBar/>
            </section>
            <DonerenBody/>
            <FooterComponent/>
        </>
    );
}
