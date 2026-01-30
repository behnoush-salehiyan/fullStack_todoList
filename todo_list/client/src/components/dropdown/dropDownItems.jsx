import { NavLink } from "react-router";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import { HiMiniTrash } from "react-icons/hi2";
import EditDirectoryModal from "../modals/EditDirectory";
import DeletedirectoryModal from "../modals/DeleteDirectory";

export default function DropDownItems({ href, title, id }) {
  const [showEditDirectory, setShowEditDirectory] = useState(false);

  const showeditModal = () => {
    setShowEditDirectory(true);
  };
  const hideeditModal = () => {
    setShowEditDirectory(false);
  };

  const [showdeleteDirectory, setshowdeleteDirectory] = useState(false);

  const handelShowDeleteDirectory = () => {
    setshowdeleteDirectory(true);
  };
  const handelcloseDeleteDirectory = () => {
    setshowdeleteDirectory(false);
  };

  const getStyle = ({ isActive }) => {
    const baseStyle = {
      backgroundColor: "unset",
      color: "black",
    };

    if (isActive) {
      return {
        ...baseStyle,
        backgroundColor: "#e4e3fe9a",
        borderRight: "5px solid #d83a49",
        color: "#d83a49",
        width: "100%",
      };
    }

    return baseStyle;
  };

  const [hover, setHover] = useState(false);

  return (
    <>
      <Dropdown.Item
        style={getStyle}
        as={NavLink}
        className="d-block  py-2 px-4 w-100"
        to={href}
        onMouseEnter={() => {
          title !== "main" && setHover(true);
        }}
        onMouseLeave={() => setHover(false)}
      >
        <div className="d-flex justify-content-between">
          <span>{title}</span>
          {hover && (
            <span>
              <LiaEditSolid onClick={showeditModal} />
              <HiMiniTrash onClick={handelShowDeleteDirectory} />
            </span>
          )}
        </div>
      </Dropdown.Item>
      <EditDirectoryModal
        show={showEditDirectory}
        onHide={hideeditModal}
        title={title}
        id={id}
      />
      <DeletedirectoryModal
        show={showdeleteDirectory}
        onHide={handelcloseDeleteDirectory}
        id={id}
      />
    </>
  );
}
