import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";

export default function StarRate({ important, click }) {
  return (
    <>
      {important ? (
        <TiStarFullOutline color="red" size={"18px"} onClick={click} />
      ) : (
        <TiStarOutline size={"18px"} onClick={click} color="gray" />
      )}
    </>
  );
}
