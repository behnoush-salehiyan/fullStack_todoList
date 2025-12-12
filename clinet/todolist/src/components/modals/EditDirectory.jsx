import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateDirectory } from "../../store/slice/directory";
import { useLocation } from "react-router";

function EditDirectoryModal({ show, onHide, title, id }) {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: { title: title } });

  const onSubmit = (data) => {
    dispatch(updateDirectory({ ...data, id }));
    console.log(data);
    onHide();
  };

  const helperText = {
    title: {
      required: "Please enter task title",
      maxLength: "your input should less than 20 characters",
      minLength: "your input should more than 4 characters",
    },
  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header
            className="border border-0 bg-body-secondary"
            closeButton
          >
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body className="border border-0 bg-body-secondary">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text"
                placeholder="secondary"
                autoFocus
                {...register("title", {
                  required: true,
                  minLength: 4,
                  maxLength: 15,
                })}
              />
              {errors.title && (
                <Form.Text className="text-danger">
                  {helperText.title[errors.title.type]}
                </Form.Text>
              )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="border border-0 bg-body-secondary">
            <Button
              style={{ backgroundColor: "#7f4bf1", border: "unset" }}
              type="submit"
            >
              Edit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditDirectoryModal;
