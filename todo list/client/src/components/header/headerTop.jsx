import { InputGroup, Navbar, Col, Row, Button, Form } from "react-bootstrap";
import Addnewtask from "../Addnewtask";
import { CiSearch } from "react-icons/ci";

export default function HeaderTop(params) {
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
        className="col-lg-4 col-md-3  ms-auto d-none d-md-block"
        style={{ width: "150px" }}
      >
        <Addnewtask />
      </div>
    </Navbar>
  );
}
