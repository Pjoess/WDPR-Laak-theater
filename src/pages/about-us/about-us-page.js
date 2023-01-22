import NavigationBar from "../../components/navigation-bar/navigation-bar";
import React from "react";
import FooterComponent from "../../components/footer/footer";
import OverOnsBody from "../../components/bodies/overOns-body";


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