import React from "react";
import handleImport from "../../../hooks/progamming/use-programming";
import { useState } from "react";
import './employee.css'
import UploadProgramming from "../../../hooks/progamming/upload-programming";
import EmployeeNavigationBar from "../../../components/navigation-bar/employee.navigation-bar";

export default function EmployeeBoard(){
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

    return(
        <>
        <EmployeeNavigationBar/>
        <div className="bodyEmployee">
        <div className="container text-center cards">

        {/* <!-- 2 SMALL BLOCK ROW --> */}
        <div className="row">
            <div className="col-md-6 col">
            <div className="card card-1">
                <div className="card-body">
                <h5 className="card-title">Invoeren excel sheet</h5>
                <div className="form">
                    <input type="file" accept=".csv" onChange={handleFileChange} />
                    <button onClick={() => UploadProgramming(file)}>Upload</button>
                </div>
                <a href="employee-pages/employee#" className="btn btn-outline-light btn-md download-button shadow">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-md-6 col">
            <div className="card card-2">
                <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                <a href="employee-pages/employee#" className="btn btn-outline-light btn-md download-button shadow">Go somewhere</a>
                </div>
            </div>
            </div>
        </div>


        {/* <!-- 2 SMALL BLOCK ROW --> */}
        <div className="row">
            <div className="col-md-6 col">
            <div className="card card-5">
                <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                <a href="employee-pages/employee#" className="btn btn-outline-light btn-md download-button shadow">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-md-6 col">
            <div className="card card-6">
                <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                <a href="employee-pages/employee#" className="btn btn-outline-light btn-md download-button shadow">Go somewhere</a>
                </div>
            </div>
            </div>
        </div>

        </div>
        </div>


        <div>
        <section className="footer-section">
            <footer className="text-center footer">
              <div className="container">
                <section className="mt-5">
                  <div className="row text-center d-flex justify-content-center pt-5">
                    <div className="col-md-2">
                      <h6 className="text-uppercase font-weight-bold">
                        <a href="employee-pages/employee#!" className="footer-link" >Home</a>
                      </h6>
                    </div>

                    <div className="col-md-2">
                      <h6 className="text-uppercase font-weight-bold">
                        <a href="employee-pages/employee#!" className="footer-link" >Log uit medewerker</a>
                      </h6>
                    </div>
                  </div>
                </section>

                <hr className="my-5" />

              </div>

              <div className="text-center p-3">
                © 2022 Copyright: FakeTheater
              </div>
            </footer>




        </section>
        </div>
      </>
    );
}