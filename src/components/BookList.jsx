import { Card, CardBody, CardImg, CardTitle, Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = props => (
  <Container>
    <Row className="gy-3 mb-3">
      {props.genre.map(book => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </Row>
  </Container>
);

export default BookList;
