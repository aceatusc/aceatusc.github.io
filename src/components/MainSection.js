import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function MainSection({ imageSrc, content, title }) {
  return (
    <Row className="px-md-3 py-4 py-md-0">
      <Col xs={12}>
        <Image
          src={imageSrc}
          alt={title}
          className="pb-4 w-100"
          style={{
            maxWidth: 300,
          }}
        />
      </Col>
      <Col xs={12}>
        <p className="lead" style={{ textAlign: "justify", wordBreak: "break-word", hyphens: "auto" }}>{content}</p>
      </Col>
    </Row>
  );
}

export default MainSection;
