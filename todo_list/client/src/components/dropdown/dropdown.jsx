import { Dropdown } from "react-bootstrap";
import DropDownItems from "./dropDownItems";

import { useState } from "react";
import NewDirectoryModal from "../modals/newDirectory";
import { secondary_route, main_route } from "../../pages/routname.js";

import { useSelector } from "react-redux";
//..........................................................................

export default function SidebarDropdown() {
  const [showDrop, setShowDrop] = useState(true);

  const [showNewDirectory, setshowNewDirectory] = useState(false);

  // give form data from store

  const directoryList = useSelector((state) => state.directories.directory);
  // console.log(directoryList);

  const showNewModal = () => {
    setshowNewDirectory(true);
  };
  const hideNewModal = () => {
    setshowNewDirectory(false);
  };

  return (
    <Dropdown
      show={showDrop}
      onToggle={() => setShowDrop(!showDrop)}
      autoClose={false}
      className="px-2 my-2"
    >
      <Dropdown.Toggle
        style={{ backgroundColor: "unset", color: "black", border: "unset" }}
        id="dropdown-autoclose-false"
      >
        Directories
      </Dropdown.Toggle>

      <Dropdown.Menu
        style={{ backgroundColor: "unset", border: "unset", width: "100%" }}
      >
        {directoryList.map(({ path, title, id }) => {
          return <DropDownItems key={id} href={path} title={title} id={id} />;
        })}

        <Dropdown.Item
          style={{
            border: "dashed 2px lightgray",
            borderRadius: "5px",
            margin: "10px  0px 0px 15px",
            padding: "3px 10px",
            width: "fit-content",
            color: "gray",
            backgroundColor: "unset",
          }}
          onClick={showNewModal}
        >
          + new
        </Dropdown.Item>
      </Dropdown.Menu>
      <NewDirectoryModal show={showNewDirectory} onHide={hideNewModal} />
    </Dropdown>
  );
}
