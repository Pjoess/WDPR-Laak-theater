import React from "react"
import NavigationBar from "../../components/navigation-bar/navigation-bar";
import FooterComponent from "../../components/footer/footer";
import DonatieHeader from "../../components/headers/donatie-header";
import DonatieBody from "../../components/bodies/donatie-body";

export default function DonatiePage(){
    return(
        <>
            <section className="Header">
                <NavigationBar/>
                <DonatieHeader/>
                <DonatieBody/>
            </section>
            <FooterComponent/>
        </>
    );
}
