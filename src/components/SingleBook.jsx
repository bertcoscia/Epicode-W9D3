import { Card } from "react-bootstrap";
import React from "react";

class SingleBook extends React.Component {
  state = {
    isSelected: false
  };

  handleClick = () => {
    if (!this.state.isSelected) {
      this.setState({ isSelected: true });
    } else {
      this.setState({ isSelected: false });
    }
  };

  render() {
    return (
      <Card style={{ width: "18rem" }} className={this.state.isSelected ? "border-danger" : null}>
        <Card.Img variant="top" src={this.props.book.img} onClick={this.handleClick} />
        <Card.Body>
          <Card.Title className="mb-3">{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
