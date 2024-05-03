import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export default function NavBarUiBeta() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary text-center bg-white sticky-top"
    >
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand col-4 my-4">
          J.ALISSA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto collapse navbar-collapse col-10 d-flex justify-content-center text-dark">
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/portfolio">
                Portfolio
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/about">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/books">
                Books
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/blogpage">
                Blog
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="text-decoration-none text-dark"
                to="client-albums"
              >
                Client-Albums
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/contact">
                Contact
              </Link>
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
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
