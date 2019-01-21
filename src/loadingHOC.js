import React, { Component } from "react";
import SPINNER from "./spinner";
const WithLoading = WrappedComponet => {
  return class withLoading extends Component {
    render() {
      console.log("props : ");
      console.log(this.props.isLoading);
      return this.props.isLoading ? (
        <SPINNER />
      ) : (
        <WrappedComponet {...this.props} />
      );
    }
  };
};
export default WithLoading;
