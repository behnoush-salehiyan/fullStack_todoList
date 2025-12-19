import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ShowCard from "../components/card/showCard";

export default function DynamicRoute(params) {
  const { directory } = useParams();
  //   console.log(directory);

  const tasksList = useSelector((store) => store.taskslist);
  //   console.log(tasksList);

  const directoryList = useSelector((store) => store.directories.directory);

  const matchDirectory = directoryList.find((d) => d.title == directory);
  //   console.log(directoryNameId);

  const data = tasksList.filter((t) => t.directory_id == matchDirectory.id);
  //   console.log(data);

  return <ShowCard data={data} />;
}
