import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import {useLoginSession} from "../../hooks/login/use-login-session";

function AdminNavigationbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="admin">Administratie</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="zalen" className="nav-link">Zalen</Link>
                    <Link to="gebruikers" className="nav-link">Gebruikers</Link>
                    <Link to="medewerkers" className="nav-link">Medewerkers</Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Text id="currentuser" className="text-right">
                U bent ingelogd als: Placeholder
            </Navbar.Text>
            <Nav.Link href="/logout">Log uit</Nav.Link>
        </Navbar>
    );
}

export default AdminNavigationbar;
