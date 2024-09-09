import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function navbar_page() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary- barrita">
      <Container>
        <Navbar.Brand href="/">ELOTE DEPRESIVO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/informacion">Informacion</Nav.Link>
            <Nav.Link href="/paquetes">Paquetes</Nav.Link>
            <Nav.Link href="/paquetes">Redes</Nav.Link>
            <Nav.Link href="/paquetes">Contacto</Nav.Link>
            <NavDropdown title="Usuario" id="basic-nav-dropdown">
              <NavDropdown.Item href="/register">Registro</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar_page;
