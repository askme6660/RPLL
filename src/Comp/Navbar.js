import {Navbar, Container, Nav} from "react-bootstrap"
import Button from 'react-bootstrap/Button';

const NavigationBar = () => {
    return(
        <div>
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand>GiessaGameStore</Navbar.Brand>
                <Nav>
                 <Nav.Link href="/">HOME</Nav.Link>
                 <Nav.Link href="#about">ABOUT</Nav.Link>
                 <Nav.Link href="#price">PRICE</Nav.Link>
                 <Nav.Link href="#kontak">CONTACT</Nav.Link>
                 <Button variant="outline-light">LOGIN</Button>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar