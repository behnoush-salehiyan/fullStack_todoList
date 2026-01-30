import { useSelector } from "react-redux";
import ShowCard from "../components/card/showCard";

export default function Uncompletedtasks(params) {
  const info = useSelector((store) => store.taskslist);

  const uncompleted = Object.values(info).filter((task) => !task.completed);

  return <ShowCard data={uncompleted} />;
}
