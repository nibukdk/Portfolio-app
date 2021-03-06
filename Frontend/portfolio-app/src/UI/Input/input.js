import React from "react";
import Form from "react-bootstrap/Form";

const input = props => {
  let inputElement = null;
  let formErorrObject = {};
  if (props.errors) {
    formErorrObject = { ...props.errors };
  }

  //   props.placeholder =
  //     props.elName.charAt(0).toUpperCase() + props.elName.slice(1);
  switch (props.elType) {
    case "text":
      inputElement = (
        <Form.Group controlId={props.elName}>
          <Form.Label>{props.elPlaceholder}</Form.Label>
          <Form.Control
            type="text"
            placeholder={props.elPlaceholder}
            name={props.elName}
            value={props.elValue}
            onChange={props.changed}
            className={props.className}
          />
          <Form.Text className="text-danger">
            {formErorrObject[props.elName]}
          </Form.Text>
        </Form.Group>
      );
      break;

    case "password":
      inputElement = (
        <Form.Group controlId={props.elName}>
          <Form.Label> {props.elPlaceholder} </Form.Label>
          <Form.Control
            type="password"
            placeholder={props.elPlaceholder}
            name={props.elName}
            value={props.elValue}
            onChange={props.changed}
          />
          <Form.Text className="text-danger">
            {formErorrObject[props.elName]}
          </Form.Text>
        </Form.Group>
      );
      break;
    case "password2":
      inputElement = (
        <Form.Group controlId={props.elName}>
          <Form.Label> {props.elPlaceholder} </Form.Label>
          <Form.Control
            type="password"
            placeholder={props.elPlaceholder}
            name={props.elName}
            value={props.elValue}
            onChange={props.changed}
          />
          <Form.Text className="text-danger">
            {formErorrObject[props.elName]}
          </Form.Text>
        </Form.Group>
      );
      break;
    case "email":
      inputElement = (
        <Form.Group controlId="formBasicEmail">
          <Form.Label> {props.elPlaceholder} </Form.Label>
          <Form.Control
            type="email"
            placeholder={props.elPlaceholder}
            name={props.elName}
            value={props.elValue}
            onChange={props.changed}
          />
          <Form.Text className="text-danger">
            {formErorrObject[props.elName]}
          </Form.Text>
        </Form.Group>
      );
      break;
    case "date":
      inputElement = (
        <Form.Group controlId="formBasicEmail">
          <Form.Label> {props.elPlaceholder} </Form.Label>
          <Form.Control
            type="date"
            placeholder={props.elPlaceholder}
            name={props.elName}
            value={props.elValue}
            onChange={props.changed}
          />
          <Form.Text className="text-danger">
            {formErorrObject[props.elName]}
          </Form.Text>
        </Form.Group>
      );
      break;
    case "checkbox":
      inputElement = (
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label> {props.elPlaceholder} </Form.Label>
          <Form.Control
            type="checkbox"
            placeholder={props.elPlaceholder}
            name={props.elName}
            value={props.elValue}
            onChange={props.changed}
          />
          <Form.Text className="text-danger">
            {formErorrObject[props.elName]}
          </Form.Text>
        </Form.Group>
      );
      break;
    case "textarea":
      inputElement = (
        <Form.Group controlId="formBasicTextarea">
          <Form.Label> {props.elPlaceholder} </Form.Label>
          <Form.Control
            name={props.elName}
            onChange={props.changed}
            rows="3"
            placeholder={props.elPlaceholder}
            value={props.elValue}
          />
          <Form.Text className="text-danger">
            {formErorrObject[props.elName]}
          </Form.Text>
        </Form.Group>
      );
      break;

    default:
      inputElement = null;
  }

  return inputElement;
};

export default input;
