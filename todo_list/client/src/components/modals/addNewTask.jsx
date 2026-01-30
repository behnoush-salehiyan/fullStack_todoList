import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/slice/Tasks";

function AddNewTaskModal({ show, onHide }) {
  const directoryList = useSelector((state) => state.directories.directory);
  const dispatch = useDispatch();

  // console.log(directoryList);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValue: {
      title: "",
      date: "",
      description: "",
      directory: "",
      completed: false,
      important: false,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    const newData = directoryList.find((d) => d.title == data.directory);
    console.log(newData.id);
    dispatch(addTask({ ...data, directory_id: newData.id }));

    reset();
    onHide();
  };

  const handelclose = () => {
    onHide();
    reset();
  };

  const helperTesk = {
    title: {
      required: "Please enter task title",
      maxLength: "your input should less than 50 characters",
      minLength: "your input should more than 4 characters",
    },
    date: {
      required: "Please enter Date",
    },
    directory: {
      required: "Please enter Date",
    },
  };

  return (
    <>
      <Modal show={show} onHide={handelclose}>
        <Modal.Header
          closeButton
          className="border border-0 bg-secondary-subtle"
        >
          <Modal.Title>Add a task</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body className="border border-0 bg-secondary-subtle">
            {/* {.......................title.............................} */}

            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
              <Form.Label className="text-body-secondary">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g study for the test"
                autoFocus
                className="bg-body-secondary text-body-secondary"
                {...register("title", {
                  required: true,
                  maxLength: 50,
                  minLength: 4,
                })}
              />

              {errors.title && (
                <Form.Text className="text-danger">
                  {helperTesk.title[errors.title.type]}
                </Form.Text>
              )}
            </Form.Group>

            {/* {........................date............................} */}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-body-secondary">Date</Form.Label>
              <Form.Control
                type="date"
                autoFocus
                className="bg-body-secondary text-body-secondary"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <Form.Text className="text-danger">
                  {helperTesk.date[errors.date.type]}
                </Form.Text>
              )}
            </Form.Group>

            {/* {........................description (optional)............................} */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-body-secondary">
                description (optional)
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="bg-body-secondary text-body-secondary"
                {...register("description")}
              />
            </Form.Group>

            {/* {........................Directory............................} */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="text-body-secondary">Directory</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="bg-body-secondary text-body-secondary"
                {...register("directory", { required: true })}
                defaultValue="main"
              >
                {directoryList.map((d, i) => (
                  <option key={i} value={d.title}>
                    {d.title}
                  </option>
                ))}

                {errors.directory && (
                  <Form.Text className="text-danger">
                    {helperTesk.directory[errors.date.type]}
                  </Form.Text>
                )}
              </Form.Select>

              {/* {........................check box............................} */}
            </Form.Group>
            <Form.Group
              className="mb-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Check
                aria-label="option 1"
                label="Mark as important"
                className=" text-body-secondary"
                {...register("important")}
              />

              <Form.Check
                aria-label="option 1"
                label="Mark as completed"
                className=" text-body-secondary"
                {...register("completed")}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="border border-0 bg-secondary-subtle">
            <Button
              type="submit"
              style={{ backgroundColor: "#7f4bf1", border: "0" }}
              className="w-100"
            >
              Add a task
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default AddNewTaskModal;
