import { Button } from "react-bootstrap";
import { updateData } from "../lib/fetcher";

import { useDispatch } from "react-redux";

export default function ToggleButton({ completed, click }) {
  const dispatch = useDispatch();

  const handleToggle = async (task) => {
    const updatedTask = await updateData(`${BASE_URL}/tasks/${task._id}`, {
      completed: !task.completed,
    });
    dispatch(editTask(updatedTask));
  };

  return (
    <Button
      onClick={handleToggle}
      className={
        "rounded-pill " +
        "border-0 " +
        (completed
          ? "bg-success-subtle text-success-emphasis"
          : "bg-warning-subtle text-danger-emphasis")
      }
      size="sm"
    >
      {completed ? "compeleted" : "uncompleted"}
    </Button>
  );
}
