import React from "react";
import { Card, CardBody } from "react-bootstrap";

const CardUi = (props) => {
  return (
    <>
      <Card id="CardsComponent" className="bg-dark text-white text-center">
        <Card.Img src={props.img} alt="Card image" height={500} />
        <Card.ImgOverlay>
          <Card.Title className="text-center mt-5 fs-4">
            {props.name}
          </Card.Title>
          <CardBody className="text-center fs-6">{props.body}</CardBody>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default CardUi;
