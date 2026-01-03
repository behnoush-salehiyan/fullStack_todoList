import { useState } from "react";
import {
  InputGroup,
  Navbar,
  Col,
  Row,
  Button,
  Form,
  Dropdown,
  Image,
} from "react-bootstrap";

import { CiSearch } from "react-icons/ci";
import LogoutModal from "../modals/logout";
import { useDispatch } from "react-redux";
import { deleteUserToken } from "../../store/slice/user";

export default function HeaderTop(params) {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dispatch = useDispatch();

  const today = new Date();

  const formattedDate = `${today.getFullYear()}, ${today.toLocaleString(
    "en-US",
    {
      month: "short",
    }
  )} ${today.getDate()}`;

  return (
    <Navbar className="row flex-wrap-reverse mb-4">
      <Form className="col-lg-4 col-md-3 col-sm-12">
        <div className="position-relative p-2">
          <CiSearch
            className="position-absolute translate-middle-y translate-middle-x"
            style={{ top: "50%", right: "20px" }}
            size={"20px"}
          />
          <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2 bg-body-secondary p-2"
          />
        </div>
      </Form>

      <div className="col-lg-4 col-md-3 col-12 text-center">
        <h6 className="d-block d-lg-none">TO DO LIST</h6>
        <span>{formattedDate}</span>
      </div>

      <div
        className="col-lg-4 col-md-3  ms-auto d-none d-md-block "
        style={{ width: "150px" }}
      >
        <div className="d-flex justify-content-center alifn-items-center ">
          <Dropdown>
            <Dropdown.Toggle
              id="user-dropdown"
              variant="transparent"
              className="p-0"
            >
              <Image
                src="https://picsum.photos/200/300"
                width={45}
                height={45}
                roundedCircle
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setShowLogoutModal(true);
                }}
              >
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <LogoutModal
            show={showLogoutModal}
            onHide={() => setShowLogoutModal(false)}
          />
        </div>
      </div>
    </Navbar>
  );
}
