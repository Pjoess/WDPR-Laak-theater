import React from "react";
import './footer.css';

export default function FooterComponent(){
    return(
        <div>
        <section className="footer-section">
            <footer className="text-center footer">
              <div className="container">
                <section className="mt-5">
                  <div className="row text-center d-flex justify-content-center pt-5">
                    <div className="col-md-2">
                      <h6 className="text-uppercase font-weight-bold">
                        <a href="#!" className="footer-link" alt="over ons link">Over ons</a>
                      </h6>
                    </div>

                    <div className="col-md-2">
                      <h6 className="text-uppercase font-weight-bold">
                        <a href="#!" className="footer-link" alt="tickets link">Tickets</a>
                      </h6>
                    </div>

                    <div className="col-md-2">
                      <h6 className="text-uppercase font-weight-bold">
                        <a href="#!" className="footer-link" alt="contact link">Contact</a>
                      </h6>
                    </div>

                    <div className="col-md-2">
                      <h6 className="text-uppercase font-weight-bold">
                        <a href="#!" className="footer-link" alt="registreer link">Registreer</a>
                      </h6>
                    </div>

                    <div className="col-md-2">
                      <h6 className="text-uppercase font-weight-bold">
                        <a href="#!" className="footer-link" alt="login link">Login</a>
                      </h6>
                    </div>
                  </div>
                </section>

                <hr className="my-5" />

                <section className="mb-5">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                        distinctio earum repellat quaerat voluptatibus placeat nam,
                        commodi optio pariatur est quia magnam eum harum corrupti
                        dicta, aliquam sequi voluptate quas.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="text-center mb-4">
                  <a href="" className=" me-4" alt="home link logo theater laak">
                    <img src="images/logo.png" alt="Logo Theater Laak"/>
                  </a>
                </section>
              </div>

              <div className="text-center p-3">
                © 2022 Copyright: FakeTheater
              </div>
            </footer>




        </section>
        </div>
    );
}