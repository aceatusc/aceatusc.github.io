import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Project.css";

function Project({ imageSrc, title, description, url }) {
  let text = React.createRef();
  let titleElement = React.createRef();

  return (
    <Row className={`p-md-4 p-0 px-2 mb-5 my-md-0`}>
      <Col xs="auto" className="my-md-1">
        <img
          src={imageSrc}
          alt={description}
          className="m-auto d-block rounded project-image"
        />
      </Col>
      <Col>
        <Row>
          <Col xs={12}>
            <h4 className="project-header my-md-0 my-2" ref={titleElement}>{title}</h4>
          </Col>
          <Col xs={12} className="mb-3 mb-md-0">
            <p className="text-muted project-text truncated-text mb-0" ref={text}>
              {description}
            </p>
            {
              url &&
              <a href={url} target="_blank" rel="noreferrer" >
                {url}
              </a>
            }
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Project;
