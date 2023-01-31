import React from "react";
import NavigationBar from "../../../components/navigation-bar/navigation-bar";
import FooterComponent from "../../../components/footer/footer";
import OverOnsBody from "../../../components/bodies/over-ons-body";


function AboutUs() {
    return(
        <div>
            <section className="Header">
                <NavigationBar/>
            </section>
            <OverOnsBody/>
            <FooterComponent/>
        </div>
    );
}

export default AboutUs;