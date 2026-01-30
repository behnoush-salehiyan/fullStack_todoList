import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { editTask } from "../../store/slice/Tasks";
import { useDispatch } from "react-redux";
import { updateData } from "../../lib/fetcher";

export default function StarRate({ important, click }) {
  const dispatch = useDispatch();

  const handleToggle = async (task) => {
    const updatedTask = await updateData(`${BASE_URL}/tasks/${task._id}`, {
      important: !task.important,
    });
    dispatch(editTask(updatedTask));
  };

  return (
    <>
      {important ? (
        <TiStarFullOutline color="red" size={"18px"} onClick={handleToggle} />
      ) : (
        <TiStarOutline size={"18px"} onClick={handleToggle} color="gray" />
      )}
    </>
  );
}
