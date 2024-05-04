import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavBarUi.css";

export default function NavBarUiBeta() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary text-center bg-white sticky-top"
    >
      <Container>
        <Navbar.Brand
          id="navbarbrand"
          to="/"
          className="navbar-brand col-4 my-4 d-flex"
        >
          J.ALISSA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="collapse navbar-collapse d-flex justify-content-end text-dark">
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
                to="/clientalbums"
              >
                Client-Albums
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-decoration-none text-dark" to="/contact">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
