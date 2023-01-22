import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import {useLoginSession} from "../../hooks/login/use-login-session";

function AdminNavigationbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/admin">Administratie</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/admin/zalen" className="nav-link">Zalen</Link>
                    <Link to="/admin/gebruikers" className="nav-link">Gebruikers</Link>
                    <Link to="/admin/medewerkers" className="nav-link">Medewerkers</Link>
                    <Link to="/admin/donateurs" className="nav-link">Donateurs</Link>
                    <Link to="/admin/donaties" className="nav-link">Donaties</Link>
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
