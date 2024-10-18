import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navbar = () => {
  return (
    <Navbar expand="lg" variant='dark' className='custom-navbar'>
      <Container>
        <Navbar.Brand href="#home"><h2><strong>Cashier Clothes</strong></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Basket</Nav.Link>
            <NavDropdown title="Order" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Atasan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bawahan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Aksesoris</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar