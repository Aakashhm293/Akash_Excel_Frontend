import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/esm/Button";
import "./App.css";
import CardUI from "./components/CardUI";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    <div>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary shadow">
          <Container>
            <Navbar.Brand href="#home" className="fw-bold mx-5">
              Bizland.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Service</Nav.Link>
                <Nav.Link href="#link">Portfolio</Nav.Link>
                <Nav.Link href="#link">Team</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="text-center">
          <Button
            variant="primary"
            className="mt-5 border border-none bg-primary-subtle rounded-pill text-primary fw-bold"
          >
            Portfolio
          </Button>
        </Container>
        <Container className="text-center mt-5">
          <h2 className="fw-bold">
            Check our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
          <Nav
            variant="pills"
            className="justify-content-center mt-5"
            activeKey="1"
          >
            <Nav.Item>
              <Nav.Link eventKey="3" disabled>
                ALL
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" disabled>
                APP
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" disabled>
                CARD
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" disabled>
                WEB
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Container className="d-flex mt-4">
            <Row>
              <Col sm={12} md={6} lg={4}>
                <CardUI
                  imgurl={
                    "https://images.unsplash.com/photo-1713283699002-ac9462cedf0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
                  }
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <CardUI
                  imgurl={
                    "https://images.unsplash.com/photo-1713098124568-bf6f01fb2327?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </Col>
              <Col sm={12} md={6} lg={4}>
                <CardUI
                  imgurl={
                    "https://images.unsplash.com/photo-1713098442109-b6fcf262776b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </main>
    </div>
  );
}

export default App;
