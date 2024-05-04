import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import NavBarUi from "../ReusableComponents/NavBarUi/NavBarUi";
import "./ClientAlbums.css";
import { motion } from "framer-motion";
import CardUi from "../ReusableComponents/CardUi";
import image1 from "../../Images/ClientAlbumsPage/image1.webp";
import image2 from "../../Images/ClientAlbumsPage/image2.webp";
import image3 from "../../Images/ClientAlbumsPage/image3.webp";

function ClientAlbumb() {
  return (
    <>
      <motion.div
        className="col-12 text-center justify-content-center mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <NavBarUi />
        <h3 className="text-center mt-5">CLIENT ALBUMS</h3>
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col sm={12} md={6} lg={4}>
              <CardUi
                img={image1}
                name={"GREEN EDITORIAL"}
                body={"Client: Herbal Magazine"}
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <CardUi
                img={image2}
                name={"BREAD BAKING RECIPIES"}
                body={"Client: The Baker Blog"}
              />
            </Col>
            <Col sm={12} md={6} lg={4}>
              <CardUi
                img={image3}
                name={"FRENCH COOKBOOK"}
                body={"Client: La Peche"}
              />
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
}

export default ClientAlbumb;
