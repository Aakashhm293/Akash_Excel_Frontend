import Card from "react-bootstrap/Card";

function CardUI(props) {
  return (
    <Card>
      <Card.Img variant="top" src={props.imgurl} />
    </Card>
  );
}

export default CardUI;
