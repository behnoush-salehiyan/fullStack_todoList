import { useSelector } from "react-redux";
import ShowCard from "../components/card/showCard";

export default function Main(params) {
  const tasks = useSelector((store) => store.taskslist);

  const mainTasks = tasks.filter((t) => t.directory === "main");

  // console.log(mainTasks);

  return <ShowCard data={mainTasks} />;
}
