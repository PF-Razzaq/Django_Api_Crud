import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStudentForm from "./NewStudentForm";

const NewStudentModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal((previousModal) => !previousModal);
  };

  const create = props.create;
  const title = create ? "Creating New Student" : "Editing Student";

  const button = create ? (
    <Button
      color="primary"
      className="float-right"
      onClick={toggle}
      style={{ minWidth: "200px" }}
    >
      Create New
    </Button>
  ) : (
    <Button onClick={toggle}>Edit</Button>
  );

  return (
    <>
      {button}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>

        <ModalBody>
          <NewStudentForm
            resetState={props.resetState}
            toggle={toggle}
            student={props.student}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default NewStudentModal;
