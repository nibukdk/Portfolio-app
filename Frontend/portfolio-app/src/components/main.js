import React, { Component } from "react";
import axios from "axios";
import Classes from "./main.module.css";

class Main extends Component {
  componentDidMount() {
    axios
      .post("/")
      .then(res => console.log("Success: ", res.data))
      .catch(err => console.log("Error: ",err));
  }
  render() {
    return <h1>Hello</h1>;
  }
}

export default Main;
