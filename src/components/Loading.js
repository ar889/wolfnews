import React, { Component } from "react";
import loader from "./loading1.gif";

export default class Loading extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <img src={loader} alt="loading" />
      </div>
    );
  }
}
