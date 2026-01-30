import TaskCard from "./TaskCard";

export default function ShowCard({ data }) {
  return (
    <div className="d-flex gap-3 flex-wrap mt-5 ">
      {data.map((task, index) => (
        <TaskCard task={task} key={index} i={index} />
      ))}
    </div>
  );
}
