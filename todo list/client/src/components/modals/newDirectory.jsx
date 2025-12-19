import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addDirectory } from "../../store/slice/directory";

function NewDirectoryModal({ show, onHide }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { title: "" },
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addDirectory(data));
    reset();
    onHide();
  };

  const handelclose = () => {
    reset();
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
      <Modal show={show} onHide={handelclose} centered>
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
                placeholder="title"
                autoFocus
                {...register("title", {
                  required: true,
                  minLength: 4,
                  maxLength: 20,
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
              type="submit"
              style={{ backgroundColor: "#7f4bf1", border: "unset" }}
            >
              creat
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default NewDirectoryModal;
