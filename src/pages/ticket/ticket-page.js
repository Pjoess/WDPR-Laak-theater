import NavigationBar from "../../components/navigation-bar/navigation-bar";
import React from "react";
import FooterComponent from "../../components/footer/footer";

function Tickets() {
    return(
        <div>
            <section className="Header">
                <NavigationBar/>
            </section>
            <FooterComponent/>
        </div>
    );
}

export default Tickets;