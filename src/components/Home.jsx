import React, { Component } from "react";
import placeHolder from "../assets/images/placeholder.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Home</h1>
        <img
          style={{ width: "1000px", height: "auto" }}
          src={placeHolder}
          alt=""
        />
      </div>
    );
  }
}
