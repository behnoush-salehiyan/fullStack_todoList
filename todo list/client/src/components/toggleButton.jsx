import { Button } from "react-bootstrap";

export default function ToggleButton({ completed, click }) {
  return (
    <Button
      onClick={click}
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
