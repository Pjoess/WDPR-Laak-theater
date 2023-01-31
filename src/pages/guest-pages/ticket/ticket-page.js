import NavigationBar from "../../../components/navigation-bar/navigation-bar";
import React from "react";
import FooterComponent from "../../../components/footer/footer";
import TicketBody from "../../../components/bodies/ticket-body";

function Tickets() {
    return(
        <div>
            <section className="Header">
                <NavigationBar/>
            </section>
            <TicketBody/>
            <FooterComponent/>
        </div>
    );
}

export default Tickets;