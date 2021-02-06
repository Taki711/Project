import React from "react";
import { Row, Col } from "reactstrap";

export default _ => {
  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Hvala vam!</p>
          <i className="fas fa-dragon thank-you-dragon"></i>
          <p className="thanks-subtext">
            Vaša rezervacija je prosleđena.
          </p>
        </Col>
      </Row>
    </div>
  );
};
