import './navigation-bar.css';

function NavigationBar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="index.html">
                        <img src="/images/logo.png" width="40" height="50" alt="Logo"/>
                    </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="tickets">Tickets</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="aboutus">Over Ons</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact">Contact</a>
                      </li>
                    </ul>
                    <ul className="navbar-nav text-right user">
                        <li className="nav-item">
                            <a className="nav-link" href="signup">Registreer</a>
                        </li>
                        <li className="nav-item">
                          <button type="button" className="btn btn-md btn-outline-dark">Login</button>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;