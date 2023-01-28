import React from "react"
import NavigationBar from "../../components/navigation-bar/navigation-bar";
import FooterComponent from "../../components/footer/footer";
import DonatieGoeddoelBody from "../../components/bodies/donatie-goeddoel";




export default function DonatieGoeddoelPage(){
    return(
        <>
            <section className="Header">
                <NavigationBar/>
                <DonatieGoeddoelBody/>
            </section>
            <FooterComponent/>
        </>
    );
}
