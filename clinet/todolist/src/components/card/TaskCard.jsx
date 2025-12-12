import { Button, Card, Stack } from "react-bootstrap";
import { PiCalendarDotsDuotone } from "react-icons/pi";
import StarRate from "./starRate";
import { HiMiniTrash } from "react-icons/hi2";
import { MdOutlineMoreVert } from "react-icons/md";
import { useState } from "react";
import ToggleButton from "../toggleButton.jsx";
import DeletTaskModal from "../modals/deleteTask.jsx";
import EditTaskModal from "../modals/editTask.jsx";
import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../../store/slice/Tasks.js";

export default function TaskCard({ task, i }) {
  const { title, description, completed, important, date, directory_id, id } =
    task;

  const [isHover, setIshover] = useState(false);
  const directories = useSelector((store) => store.directories.directory);
  const curent = directories.find((d) => d.id == directory_id);
  const directoryTitle = curent?.title || "N/A";

  const dispatch = useDispatch();
  //............................show and hide delet task modal..........................................
  const [showDeleteTakModal, setShowDeleteTakModal] = useState(false);

  function deletTask() {
    setShowDeleteTakModal(true);
  }
  function hideDeletTaskModal() {
    setShowDeleteTakModal(false);
  }

  function toggleStar() {
    dispatch(editTask({ ...task, important: !task.important }));
  }

  function toggleButton() {
    dispatch(editTask({ ...task, completed: !task.completed }));
  }

  //............................show and hide edit task modal..........................................

  const [showEditTaskModal, setShowEditTaskModal] = useState(false);

  const showeditTask = () => {
    setShowEditTaskModal(true);
  };

  const hideEditTask = () => {
    setShowEditTaskModal(false);
  };

  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: "15rem" }}>
        <div
          className="bg-danger-subtle p-1 rounded-top-2 text-center text-danger d-inline me-2"
          style={{
            minWidth: "50px",
            height: "30px",
            marginLeft: "auto",
          }}
        >
          {directoryTitle}
        </div>
        <Card
          className={`flex-grow-1  ${isHover ? "shadow" : ""}`}
          style={{
            backgroundColor: i === 0 ? "#7f4bf1" : "white",
            color: i === 0 ? "white" : "black",
            width: "15rem",
            minHeighteight: "15rem",
            fontSize: "14px",
          }}
          onMouseEnter={() => setIshover(true)}
          onMouseLeave={() => setIshover(false)}
        >
          <Card.Body className="d-flex flex-column ">
            <div className="flex-grow-1">
              <Card.Title className="fs-5">{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </div>

            <div className="mt-3">
              <Card.Text>
                <PiCalendarDotsDuotone />
                {date}
              </Card.Text>
            </div>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between">
            <div>
              <ToggleButton completed={completed} click={toggleButton} />
            </div>
            <div>
              <StarRate important={important} click={toggleStar} />
              <HiMiniTrash size={"18px"} onClick={deletTask} />
              <MdOutlineMoreVert size={"18px"} onClick={showeditTask} />
            </div>
          </Card.Footer>
        </Card>
      </div>
      <DeletTaskModal
        show={showDeleteTakModal}
        onHide={hideDeletTaskModal}
        id={id}
      />
      <EditTaskModal
        show={showEditTaskModal}
        onHide={hideEditTask}
        task={task}
      />
    </>
  );
}
