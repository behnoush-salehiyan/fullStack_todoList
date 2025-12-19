import { useSelector } from "react-redux";
import ShowCard from "../components/card/showCard";

export default function Completedtasks() {
  const info = useSelector((store) => store.taskslist);

  const completed = info.filter((task) => task.completed);

  return <ShowCard data={completed} />;
}
