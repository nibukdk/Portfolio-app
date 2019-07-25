import React from "react";
import Classes from "./sidenav.module.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const sideNav = props => {
  let navBar = null;
  const styles = {
    ul: { listStyleType: "none", margin: 0, padding: 0 },
    li: {},
    a: {
      display: "block"
    }
  };
  navBar = (
    <ul style={styles.ul}>
      <li className={styles.li}>
        <a className={styles.a} href="#">
          Education
        </a>
      </li>
      <li>
        <a href="#">Experience</a>
      </li>
      <li>
        <a href="#">About Me</a>
      </li>
      <li>
        <a href="#"> Hire Me</a>
      </li>
      <li>
        <a href="#"> Project</a>
      </li>
    </ul>
  );

  return navBar;
};

export default sideNav;
{
  /* <Navbar bg="dark" variant="dark" expand="lg" className={Classes.Navbar} >
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Nav.Item>
            <Nav.Link className="nav-link" to="/">
              Porfolio <span className="sr-only"></span>
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
      </Navbar.Collapse>
    </Navbar> */
}
