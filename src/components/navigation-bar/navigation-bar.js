import { Link } from "react-router-dom"
import './navigation-bar.css';
import { useLoginSession } from "../../hooks/login/use-login-session"

function NavigationBar() {
    const { user } = useLoginSession()
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
                        <a className="nav-link" href="programma">Programma</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="aboutus">Over Ons</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact">Contact</a>
                      </li>
                    </ul>
                    {user &&
                    <ul className="navbar-nav text-right user">
                      <span id="currentuser" className="navbar-text">U bent ingelogd als: {user.unique_name}</span>
                      <li className="nav-item">
                          <Link to="/logout" className="nav-link">Log uit</Link>
                      </li>
                    </ul>
                    }
                    {! user &&
                    <ul className="navbar-nav text-right user">
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Registreer</Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/login" className="btn btn-md btn-outline-dark">Log in</Link>
                      </li>
                    </ul>
                    }
                  </div>
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;