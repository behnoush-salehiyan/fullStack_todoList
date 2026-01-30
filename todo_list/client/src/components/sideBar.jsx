import { useEffect, useState, useRef } from "react";
import { NavDropdown, Nav, Navbar, Container, Button } from "react-bootstrap";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { NavLink } from "react-router";
import Addnewtask from "./Addnewtask";
import SidebarDropdown from "./dropdown/dropdown";
import {
  all_route,
  important_route,
  completed_route,
  uncompleted_route,
} from "../pages/routname.js";

const menueLink = [
  {
    href: all_route,
    text: "All tasks",
  },
  {
    href: important_route,
    text: "Important task",
  },
  {
    href: completed_route,
    text: "Compeleted task",
  },
  {
    href: uncompleted_route,
    text: "Uncompeleted task",
  },
];

function Menue({ href, children }) {
  return (
    <Nav.Link
      as={NavLink}
      to={href}
      style={({ isActive }) => {
        const baseStyles = {
          padding: "10px 20px",
        };

        return {
          ...baseStyles,
          ...(isActive
            ? {
                backgroundColor: "#e4e3fe9a",
                borderRight: "5px solid #d83a49",
                color: "#d83a49",
                width: "100%",
              }
            : {}),
        };
      }}
    >
      {children}
    </Nav.Link>
  );
}

export default function SideBar(params) {
  const [showsidbar, setShowsidbar] = useState(false);
  const handleShow = () => setShowsidbar(!showsidbar);

  const sidebarRef = useRef(null);

  const menuIconRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuIconRef.current && menuIconRef.current.contains(event.target)) {
        return;
      }

      if (
        showsidbar &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setShowsidbar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showsidbar]);

  return (
    <div>
      <div ref={menuIconRef} className="d-lg-none">
        {!showsidbar && (
          <HiOutlineMenuAlt4
            size={"20px"}
            onClick={handleShow}
            style={{ cursor: "pointer", margin: "20px" }}
          />
        )}
      </div>

      <Navbar
        ref={sidebarRef}
        className={` bg-body-secondary  flex-column top-0  flex-nowrap  vh-100  ${
          showsidbar ? " position-fixed" : "d-none"
        } d-lg-block `}
        style={{ zIndex: "100", width: showsidbar ? "250px" : undefined }}
      >
        <div className="my-4 text-center ">
          <h1 className="fs-2">TO DO LIST</h1>
        </div>
        <div className="mb-5 px-3 w-100">
          <Addnewtask />
        </div>
        <Nav className="d-flex flex-column align-items-start  mb-2 w-100">
          {menueLink.map(({ text, href }) => {
            return (
              <Menue href={href} key={href}>
                {text}
              </Menue>
            );
          })}
        </Nav>
        <div className="text-start w-100 ">
          <SidebarDropdown />
        </div>
      </Navbar>
    </div>
  );
}
