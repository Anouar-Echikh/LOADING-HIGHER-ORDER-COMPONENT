import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <div className="card m-3">
        <Card>
          <a className="card">
            <CardImg
              top
              width="100%"
              height="150px"
              src={item.img.toString()}
              alt="Card image cap"
            />
          </a>

          <CardBody className="py-2">
            <CardTitle className="title p-0 my-0">{item.title}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MovieCard;
