import { Button, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import React from "react";

class BookList extends React.Component {
  state = {
    title: null
  };

  handleFieldChange = value => this.setState({ title: value });

  handleSubmit = event => {
    event.preventDefault();
    const filteredBooks = this.props.genre.filter(book => book.title.toLowerCase().includes(this.state.title.toLowerCase()));
    <Row className="gy-3 mb-3">
      {filteredBooks.map(book => (
        <SingleBook key={book.asin} book={book} />
      ))}
    </Row>;
  };

  filterBooks = title => {
    const filteredBooks = this.props.genre.filter(book => book.title.toLowerCase().includes(title));
    filteredBooks.map(book => <SingleBook key={book.asin} book={book} />);
  };

  render() {
    return (
      <Container>
        <Form className="my-5" onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Search</Form.Label>
            <Form.Control type="text" placeholder="Search a book" onChange={event => this.handleFieldChange(event.target.value)} />
          </Form.Group>
          <Button variant="info">Search</Button>
        </Form>
        <Row className="gy-3 mb-3">
          {this.state.title
            ? this.props.genre.filter(book => book.title.toLowerCase().includes(this.state.title.toLowerCase())).map(book => <SingleBook key={book.asin} book={book} />)
            : this.props.genre.map(book => <SingleBook key={book.asin} book={book} />)}
        </Row>
      </Container>
    );
  }
}

export default BookList;
