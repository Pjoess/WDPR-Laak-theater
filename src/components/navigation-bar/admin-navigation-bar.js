import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import {UseLoginSession} from "../../hooks/login/use-login-session";

function AdminNavigationbar() {
    const { user } = UseLoginSession();
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/admin">Administratie</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/admin/zalen" className="nav-link">Zalen</Link>
                    <Link to="/admin/gebruikers" className="nav-link">Gebruikers</Link>
                    <Link to="/admin/medewerkers" className="nav-link">Medewerkers</Link>
                </Nav>
            </Navbar.Collapse>
            <ul className="navbar-nav text-right user">
                <span id="currentuser" className="navbar-text">U bent ingelogd als: {user} </span>
                <li className="nav-item">
                    <Link to="/logout" className="nav-link">Log uit</Link>
                </li>
            </ul>
        </Navbar>
    );
}

export default AdminNavigationbar;
