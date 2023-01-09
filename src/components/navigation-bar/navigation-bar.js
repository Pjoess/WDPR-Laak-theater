import './navigation-bar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
    return(
        <Navbar bg="light">
            <Nav>
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="tickets">Tickets</Nav.Link>
                <Nav.Link href="over-ons">Over Ons</Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavigationBar;