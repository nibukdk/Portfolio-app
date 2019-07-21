import React, { Component } from "react";
import Classes from "./footer.module.css";

class Footers extends Component {
  render() {
    return (
      <footer className={"bg-dark text-center ".concat(Classes.Footer)}>
        Copyright &copy {new Date().getFullYear()} Portfolio App
      </footer>
    );
  }
}

export default Footers;
