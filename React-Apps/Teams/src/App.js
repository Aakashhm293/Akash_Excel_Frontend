import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function NavScrollExample() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="d-flex justify-content-center ">
            <Row>
              <Col className="">
                <Navbar.Brand className="fw-bold">Bizland.</Navbar.Brand>
              </Col>
              <Col>
                <Container className="mx-auto">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                          Action
                        </NavDropdown.Item>
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
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Row>
            <Col sm={12} className="text-center">
              <div className="mt-4 btn btn-primary bg-primary-subtle text-primary border rounded-pill fw-bold">
                TEAM
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={12} className="text-center mt-3">
              <h2>
                Our Hardworking{" "}
                <span className="text-primary fw-bold">Team</span>
              </h2>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={12} className="text-center mt-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Donec massa sapien faucibus et. Eget aliquet nibh praesent
                tristique magna. In tellus integer feugiat scelerisque varius.
                Mauris in aliquam sem fringilla ut. Et tortor at risus viverra
                adipiscing. Dapibus ultrices in iaculis nunc sed augue lacus.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className="d-flex justify-content-center mt-3">
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Card
                style={{ width: "18rem", height: "30rem" }}
                className="shadow me-4"
              >
                <Card.Img
                  variant="top"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._Bo-v36aCm0ocJiQjzxGgQHaKX%26pid%3DApi&f=1&ipt=fcdf5566ccc30e7a26ea835eb4cd147985f02b99f2e1c8e3d9bed84648bdb507&ipo=images"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Walter White</Card.Title>
                  <Card.Text>Chief Executive Officer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card
                style={{ width: "18rem", height: "30rem" }}
                className="shadow me-4"
              >
                <Card.Img
                  variant="top"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.tz4ZkFc6GrRD-jK0oP458AHaJ8%26pid%3DApi&f=1&ipt=0d192d1ac75006b0803fbb26a1239e1aed8d42e622e65f13056ccd24780d274a&ipo=images"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Sarah Johnson</Card.Title>
                  <Card.Text>Product Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card
                style={{ width: "18rem", height: "30rem" }}
                className="shadow me-4"
              >
                <Card.Img
                  variant="top"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cUJ71YMe6lxWj2B__tKJSQHaJ8%26pid%3DApi&f=1&ipt=0ebe7f81175f5510cc7a54a7b351431a5a925a89f817c0aa1d7bec64903da507&ipo=images"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">William Anderson</Card.Title>
                  <Card.Text>CTO</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Card
                style={{ width: "18rem", height: "30rem" }}
                className="shadow me-4"
              >
                <Card.Img
                  variant="top"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.aXTXqPOkzLD-0lNxpFe52wHaKM%26pid%3DApi&f=1&ipt=32f649d6824b3c6567e6ba3d71e8a06d25d821b3cbe7afc7981da1159336810c&ipo=images"
                />
                <Card.Body>
                  <Card.Title className="fw-bold">Amanda Jepson</Card.Title>
                  <Card.Text>Accountant</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default NavScrollExample;
