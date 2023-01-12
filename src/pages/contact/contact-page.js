import NavigationBar from "../../components/navigation-bar/navigation-bar";
import React from "react";
import FooterComponent from "../../components/footer/footer";
import ContactHeader from "../../components/headers/contact-header";
import ContactBody from "../../components/bodies/contact-body";

function ContactPage() {
    return(
        <div>

            <section className="Header">
                <NavigationBar/>
                <ContactHeader/>
            </section>

            <ContactBody/>
            <FooterComponent/>
        </div>
    );
}

export default ContactPage;