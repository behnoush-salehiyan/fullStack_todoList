import { useEffect } from "react";
import ShowCard from "../components/card/showCard";

import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/slice/Tasks";

export default function Alltasks() {
  const info = useSelector((store) => store.taskslist);

  const dispatch = useDispatch();

  const sortOption = useSelector((store) => store.sort.option);

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const data = await getData(`${BASE_URL}/tasks`);

        dispatch(addTask(data));
      } catch (error) {
        console.error("error:", error);
      }
    };

    fetchAllTasks();
  }, [dispatch, BASE_URL]);

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
