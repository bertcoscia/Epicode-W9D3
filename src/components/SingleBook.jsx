import { Card, CardBody, CardImg, CardTitle } from "react-bootstrap";

const SingleBook = props => {
  return (
    <Card style={{ width: "18rem" }}>
      <CardImg variant="top" src={props.img} />
      <CardBody>
        <CardTitle className="mb-3">{props.title}</CardTitle>
      </CardBody>
    </Card>
  );
};

export default SingleBook;
