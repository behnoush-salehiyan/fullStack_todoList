import { NavLink, Row, Col, Form } from "react-bootstrap";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setSortOption } from "../../store/slice/sortoption";

export default function HeaderBottom() {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(setSortOption(e.target.value));
  };
  return (
    <>
      <Row className="mt-3">
        <Col>
          <div className="d-flex justyfy-content-start gap-2">
            <NavLink>
              <LuLayoutList />
            </NavLink>
            <NavLink>
              <LuLayoutGrid />
            </NavLink>
          </div>
        </Col>
        <Col>
          <Form.Select
            className=" text-start ms-auto  bg-body-secondary "
            style={{
              maxWidth: "150px",
            }}
            aria-label="Default select example "
            onChange={handleSortChange}
          >
            <option value="none">sort by</option>
            <option value="added">Order added</option>
            <option value="earlier">Erlier first</option>
            <option value="later">Later first</option>
            <option value="completed">Completed first</option>
            <option value="uncompleted">Uncompleted first</option>
          </Form.Select>
        </Col>
      </Row>
    </>
  );
}
