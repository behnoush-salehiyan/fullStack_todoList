import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import {
  selectCompletedCount,
  selectImportantCount,
  selectTasks,
  selectTasksCount,
  selectUncompletedCount,
} from "../../store/slice/Tasks.js";

import { useSelector } from "react-redux";
import {
  all_route,
  main_route,
  secondary_route,
  important_route,
  completed_route,
  uncompleted_route,
} from "../../pages/routname.js";

export default function HeaderCenter(params) {
  const [routName, setRoutName] = useState("All tasks");

  // Count tasks in each route

  const allTasks = useSelector(selectTasksCount);
  const important = useSelector(selectImportantCount);
  const compeleted = useSelector(selectCompletedCount);
  const uncompleted = useSelector(selectUncompletedCount);

  //.................................................

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case all_route:
        setRoutName(`All tasks (${allTasks.length} tasks)`);
        break;
      case completed_route:
        setRoutName(`Completed tasks (${compeleted} tasks) `);
        break;
      case uncompleted_route:
        setRoutName(`Uncompeleted tasks (${uncompleted} tasks) `);
        break;
      case important_route:
        setRoutName(`Important tasks (${important} tasks)`);
        break;
      case main_route:
        setRoutName("Main");
        break;
    }
  }, [location.pathname]);

  return (
    <>
      <h2 className="text-center text-md-start mb-4 fs-4">{routName}</h2>
    </>
  );
}
