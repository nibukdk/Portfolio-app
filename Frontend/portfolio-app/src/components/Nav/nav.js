import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import Classes from "./nav.module.css";
const navigation = () => {
  let navLinks = null;
  navLinks = (
    <Nav className="mr-auto">
      <Nav.Item>
        <Nav.Link className="nav-link" to="/">
          Porfolio <span className="sr-only">(current)</span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link">Blogs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link">Hire Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="nav-link">Contact Me</Nav.Link>
      </Nav.Item>
    </Nav>
  );

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className={Classes.Navbar}
    >
      <Navbar.Brand>
        <Nav.Link className="nav-link" to="/">
          Home
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">{navLinks}</Navbar.Collapse>
    </Navbar>
  );
};

export default navigation;
