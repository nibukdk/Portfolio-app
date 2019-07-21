import React, { Component } from "react";
import axios from "axios";
import Classes from "./main.module.css";
// import Button from "../UI/Button/Button";
// import Input from "../UI/Input/input";
import CardUI from "../UI/Card/card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Form from "react-bootstrap/Form";

class Main extends Component {
  componentDidMount() {
    axios
      .post("/")
      .then(res => console.log("Success: ", res.data))
      .catch(err => console.log("Error: ", err));
  }
  // btnOnClick = e => {
  //   // e.preventDefault();
  //   console.log("Clicked");
  // };

  // onInputChange = e => {
  //   console.log(e.target.value);
  // };
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={12}>
            <h1>Hello</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
