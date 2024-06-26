import { Card, CardBody, CardImg, CardTitle } from "react-bootstrap";
import React from "react";

class SingleBook extends React.Component {
  state = {
    selected: false
  };

  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <CardImg variant="top" src={this.props.book.img} />
        <CardBody>
          <CardTitle className="mb-3">{this.props.book.title}</CardTitle>
        </CardBody>
      </Card>
    );
  }
}

export default SingleBook;
