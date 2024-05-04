import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const BlogCard = (props) => {
  return (
    <>
      <Card className="text-center mt-5">
        <div className="d-flex">
          <Row>
            <Col lg={5}>
              <Card.Img variant="top" src={props.img} />
            </Col>
            <Col lg={7}>
              <Card.Body>
                <Card.Title>
                  <h1 className="justify-content-start">{props.headline}</h1>
                </Card.Title>
                <Card.Text className="mt-5 text-center justify-content-center">
                  <p>{props.content}</p>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>
      </Card>
    </>
  );
};

export default BlogCard;
