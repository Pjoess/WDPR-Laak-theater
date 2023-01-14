import NavigationBar from "../navigation-bar/navigation-bar";
import React from "react";
import FooterComponent from "../footer/footer";
import './programming.css'

function ProgrammingBody() {
    return(
        <>
            <section className="Header">
                <NavigationBar/>
            </section>
            <div className="Agenda-info">

                <div className="container-fluid agenda">
                    <div className="row">
                        <h1>Agenda</h1>
                    </div>
                </div>

                <div className="programming-box">
                    <table id="myTable">
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>

                    <form id="editForm"/>
                        <label for="row">Row:</label>
                        <input type="text" id="row" name="row"/>
                        <br/>
                        <label for="col">Column:</label>
                        <input type="text" id="col" name="col"/>
                        <br/>
                        <label for="newContent">New Content:</label>
                        <input type="text" id="newContent" name="newContent"/>
                        <br/>
                        <button type="submit">Submit</button>
                    <form/>
                </div>





            </div>
            <FooterComponent/>
        </>
    );
}

export default ProgrammingBody;