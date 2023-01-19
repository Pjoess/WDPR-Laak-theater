import React from "react";
import FooterComponent from "../../components/footer/footer";
import handleImport from "../../hooks/progamming/use-programming";
import { useState } from "react";
import './employee.css'

export default function EmployeeBoard(){
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">My Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Artists</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Shows</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Bands</a>
              </li>
            </ul>
          </div>
        </nav>
        
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
                    <button onClick={() => handleImport(file)}>Upload</button>
                </div>
                <a href="#" className="btn btn-outline-light btn-md download-button shadow">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-md-6 col">
            <div className="card card-2">
                <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                <a href="#" className="btn btn-outline-light btn-md download-button shadow">Go somewhere</a>
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
                <a href="#" className="btn btn-outline-light btn-md download-button shadow">Go somewhere</a>
                </div>
            </div>
            </div>
            <div className="col-md-6 col">
            <div className="card card-6">
                <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                <a href="#" className="btn btn-outline-light btn-md download-button shadow">Go somewhere</a>
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
                        <a href="#!" className="footer-link" alt="over ons link">Home</a>
                      </h6>
                    </div>

                    <div className="col-md-2">
                      <h6 className="text-uppercase font-weight-bold">
                        <a href="#!" className="footer-link" alt="login link">Log uit medewerker</a>
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