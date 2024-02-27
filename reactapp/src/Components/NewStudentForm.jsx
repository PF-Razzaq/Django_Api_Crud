import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../index";

const NewStudentForm = (props) => {
  const [state, setState] = useState({
    pk: 0,
    name: "",
    email: "",
    document: "",
    phone: "",
  });

  useEffect(() => {
    if (props.student) {
      const { pk, name, document, email, phone } = props.student;
      setState({ pk, name, document, email, phone });
    }
  }, [props.student]);

  const HandleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const createStudent = (e) => {
    e.preventDefault();
    axios.post(API_URL, state).then(() => {
      props.resetState();
      props.toggle();
    });
  };

  const editStudent = (e) => {
    e.preventDefault();
    axios.put(API_URL + state.pk, state).then(() => {
      props.resetState();
      props.toggle();
    });
  };

  const defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };

  return (
    <Form onSubmit={props.student ? editStudent : createStudent}>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input
          type="text"
          name="name"
          onChange={HandleChange}
          value={defaultIfEmpty(state.name)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email:</Label>
        <Input
          type="email"
          name="email"
          onChange={HandleChange}
          value={defaultIfEmpty(state.email)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="document">Document:</Label>
        <Input
          type="text"
          name="document"
          onChange={HandleChange}
          value={defaultIfEmpty(state.document)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone:</Label>
        <Input
          type="text"
          name="phone"
          onChange={HandleChange}
          value={defaultIfEmpty(state.phone)}
        />
      </FormGroup>
      <Button>Send</Button>
    </Form>
  );
};

export default NewStudentForm;
