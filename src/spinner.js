import React, { Component } from "react";
import { Spinner } from "reactstrap";
import "./App.css";

class SPINNER extends Component {
  render() {
    return (
      <div className="spinner-container">
        <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
      </div>
    );
  }
}

export default SPINNER;
