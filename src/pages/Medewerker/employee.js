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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">My Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Artists</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Shows</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Bands</a>
              </li>
            </ul>
          </div>
        </nav>
        
        <div className="bodyEmployee">
        <div className="container text-center cards">

        {/* <!-- 2 SMALL BLOCK ROW --> */}
        <div class="row">
            <div class="col-md-6 col">
            <div class="card card-1">
                <div class="card-body">
                <h5 class="card-title">Invoeren excel sheet</h5>
                <div className="form">
                    <input type="file" accept=".csv" onChange={handleFileChange} />
                    <button onClick={() => handleImport(file)}>Upload</button>
                </div>
                <a href="#" class="btn btn-outline-light btn-md download-button shadow">Go somewhere</a>
                </div>
            </div>
            </div>
            <div class="col-md-6 col">
            <div class="card card-2">
                <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                <a href="#" class="btn btn-outline-light btn-md download-button shadow">Go somewhere</a>
                </div>
            </div>
            </div>
        </div>


        {/* <!-- 2 SMALL BLOCK ROW --> */}
        <div class="row">
            <div class="col-md-6 col">
            <div class="card card-5">
                <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                <a href="#" class="btn btn-outline-light btn-md download-button shadow">Go somewhere</a>
                </div>
            </div>
            </div>
            <div class="col-md-6 col">
            <div class="card card-6">
                <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                <a href="#" class="btn btn-outline-light btn-md download-button shadow">Go somewhere</a>
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