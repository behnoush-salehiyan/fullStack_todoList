import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/slice/Tasks";

export default function DeletTaskModal({ show, onHide, id }) {
  const dispatch = useDispatch();

  const handelDelete = () => {
    dispatch(deleteTask({ id: id }));
    onHide();
  };
  return (
    <Modal
      size="md"
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border border-0 bg-body-secondary" closeButton>
        <Modal.Title id="contained-modal-title-vcenter ">
          Are you sure
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border border-0 bg-body-secondary ">
        <p>This task will be deleted permantly</p>
      </Modal.Body>
      <Modal.Footer className="border border-0 bg-body-secondary ">
        <Button variant="unset" onClick={onHide}>
          cancel
        </Button>
        <Button
          className="border border-0"
          style={{ backgroundColor: "#7f4bf1" }}
          onClick={handelDelete}
        >
          delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
