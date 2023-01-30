import { Link } from "react-router-dom"
import './navigation-bar.css';
import { UseLoginSession } from "../../hooks/login/use-login-session"

function NavigationBar() {
    const { user } = UseLoginSession()
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand logo">
                        <img src="/images/logo.png" width="40" height="50" alt="Logo"/>
                    </Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/programma" className="nav-link">Programma</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/over-ons" className="nav-link">Over Ons</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                      </li>
                    </ul>
                    {user &&
                    <ul className="navbar-nav text-right user">
                       <li className="nav-item">
                        <Link to="/tickets" className="nav-link">Mijn bestellingen</Link>
                      </li>
                      <span id="currentuser" className="navbar-text">U bent ingelogd als: {user.unique_name}</span>
                      <li className="nav-item">
                          <Link to="/logout" className="nav-link">Log uit</Link>
                      </li>
                    </ul>
                    }
                    {! user &&
                    <ul className="navbar-nav text-right user">
                        <li className="nav-item">
                            <Link to="/registreer" className="nav-link">Registreer</Link>
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