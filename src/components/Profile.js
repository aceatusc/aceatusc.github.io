import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Profile.css"

function Profile({ imageSrc, name, title, url }) {
    let nameElement = React.createRef();

    let styles = {
        profileChild: {
            cursor: url ? "pointer" : "default",
        },
    }

    let defaultSrc = require("../img/default-user.png");

    const toggleUnderline = () => {
        if (!url) {
            return;
        }
        if (nameElement.current.style.textDecoration === "underline") {
            // remove the underline using css
            nameElement.current.style.textDecoration = "none";
        } else {
            // underline the project title using css
            nameElement.current.style.textDecoration = "underline";
        }
    }

    return (
        <Row
            className={`m-3 p-3 d-flex + ${url ? " has-link" : ""}`}
            onMouseEnter={toggleUnderline}
            onMouseLeave={toggleUnderline}
        >
            <a href={url} style={{
                textDecoration: "none",
                color: "black",
            }}
                target="_blank" rel="noreferrer"
            >
                <Col xs={12} >
                    <img
                        src={imageSrc ? imageSrc : defaultSrc}
                        alt={title}
                        className="mb-4 m-auto d-block"
                        style={{
                            ...styles.profileChild,
                            maxHeight: "150px",
                            borderRadius: "50%",
                        }}
                    />
                </Col>
                <div>
                    <Col xs={12}>
                        <h5
                            className="text-center"
                            ref={nameElement}
                        >{name}</h5>
                    </Col>
                    <Col xs={12}>
                        <h6 className="text-muted text-center">
                            {title}
                        </h6>
                    </Col>
                </div>
            </a>
        </Row>
    );
}

export default Profile;
