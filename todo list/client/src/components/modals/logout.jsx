// LogoutModal.jsx
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUserToken } from "../../store/slice/user";

export default function LogoutModal({ show, onHide }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(deleteUserToken());
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="bg-body-secondary border-0">
        <Modal.Title>Log Out</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-body-secondary border-0">
        <p>Are you sure you want to log out?</p>
      </Modal.Body>
      <Modal.Footer className="bg-body-secondary border-0">
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button
          style={{ backgroundColor: "#7f4bf1", border: "none" }}
          onClick={handleLogout}
        >
          Yes, Logout
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
