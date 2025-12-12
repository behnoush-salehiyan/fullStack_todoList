import ShowCard from "../components/card/showCard";

import { useSelector } from "react-redux";

export default function Alltasks() {
  const info = useSelector((store) => store.taskslist);

  const sortOption = useSelector((store) => store.sort.option);

  const sorted = [...info].sort((a, b) => {
    if (sortOption === "added") return a.createdAt - b.createdAt;

    if (sortOption === "earlier") return new Date(a.date) - new Date(b.date);

    if (sortOption === "later") return new Date(b.date) - new Date(a.date);

    if (sortOption === "completed")
      return (b.completed === true) - (a.completed === true);

    if (sortOption === "uncompleted")
      return (a.completed === true) - (b.completed === true);

    return 0;
  });

  return (
    <>
      <ShowCard data={sorted} />
    </>
  );
}
