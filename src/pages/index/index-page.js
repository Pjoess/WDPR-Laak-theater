import React from "react";
import FooterComponent from "../../components/footer/footer";
import NavigationBar from "../../components/navigation-bar/navigation-bar";
import IndexHeader from "../../components/headers/index-header";

export default function IndexPage(){
    return(
        <div>

            <section className="Header">
                <NavigationBar/>
                <IndexHeader/>
            </section>

            <FooterComponent/>
        </div>
    );
}