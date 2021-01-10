import React from "react";
import cafe from "../images/cafe.jpg";
import { Row, Col, Button} from "reactstrap";

export default props => {
  return (
    <div>
      <Row noGutters className="text-center align-items-center dragon-cta">
        <Col>
          <p className="looking-for-dragon">
            Rezervisite svoje mesto u nasem restoranu
            <i className="fas fa-dragon dragon"></i>
          </p>
          <Button
            color="none"
            className="book-table-btn"
            onClick={_ => {
              props.setPage(1);
            }}
          >
            Rezervisi odmah
          </Button>
        </Col>
      </Row>
      <Row noGutters className="text-center big-img-container">
        <Col>
          <img
            src={cafe}
            alt="cafe"
            className="big-img"
          />
        </Col>
      </Row>
    </div>
  );
};
