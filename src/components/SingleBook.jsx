import { Card, CardBody, CardImg, CardTitle } from "react-bootstrap";

const SingleBook = props => {
  return (
    <Card style={{ width: "18rem" }}>
      <CardImg variant="top" src={props.book.img} />
      <CardBody>
        <CardTitle className="mb-3">{props.book.title}</CardTitle>
      </CardBody>
    </Card>
  );
};

export default SingleBook;
