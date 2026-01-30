import { Button } from "react-bootstrap";
import AddNewTaskModal from "./modals/addNewTask";
import { useState } from "react";

export default function Addnewtask(params) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{
          backgroundColor: "#7f4bf1",
          border: "unset",
          width: "100%",
        }}
        onClick={handleShow}
      >
        Add new task
      </Button>
      <AddNewTaskModal show={show} onHide={handleClose} />
    </>
  );
}
