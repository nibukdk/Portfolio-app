import Button from "react-bootstrap/Button";
import React from "react";

const buttonUI = (props) => {
  return <Button onClick={props.btnOnClick}>{props.children}</Button>;
};

export default buttonUI;
