import { Card, CardBody, CardImg, CardTitle, Col, Container, Row } from "react-bootstrap";

const BookList = props => (
  <Container>
    <Row className="gy-3 mb-3">
      {props.genre.map(book => (
        <Col key={`asin-${book.asin}`} xs={12} md={4} xl={3}>
          <Card style={{ width: "18rem" }}>
            <CardImg variant="top" src={book.img} />
            <CardBody>
              <CardTitle className="mb-3">{book.title}</CardTitle>
              <span className="rounded-pill px-3 py-2 bg-info">${book.price}</span>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default BookList;
