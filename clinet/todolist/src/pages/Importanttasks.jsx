import { useSelector } from "react-redux";
import ShowCard from "../components/card/showCard";

export default function Importanttasks() {
  const info = useSelector((store) => store.taskslist);

  const important = info.filter((task) => task.important);

  return <ShowCard data={important} />;
}
