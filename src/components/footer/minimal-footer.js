import React from "react";
import './footer.css'

function MinimalFooter() {
    return (
        <div>
            <section className="footer-section">
                <footer className="text-center footer sticky-footer">
                    <div className="container">
                        <hr className="my-5" />
                        <section className="text-center mb-4">
                            <a href="/admin" className=" me-4" alt="home link logo theater laak">
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

export default MinimalFooter;
