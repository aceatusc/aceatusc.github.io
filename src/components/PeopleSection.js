import React from "react";
import Profile from "./Profile";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const people = {
  pi: [
    {
      name: "Souti Rini Chattopadhyay",
      title: "Assistant Professor",
      imageSrc: require("../img/rini.jpg"),
      url: "https://soutirini.com",
    },
  ],
  currentStudents: [
    {
      name: "Athena Saghi",
      title: "PhD Student",
      imageSrc: require("../img/athena.jpeg"),
    },
    {
      name: "Run Huang",
      title: "PhD Student",
      imageSrc: require("../img/run.png"),
      url: 'https://iamhuang.run'
    },
    {
      name: "Philipp Eibl",
      title: "PhD Student",
      imageSrc: require("../img/philipp.jpeg"),
      url: "https://philippnoah.github.io",
    },
    {
      name: "Sadra Sabouri",
      title: "PhD Student",
      imageSrc: require("../img/sadra.jpeg"),
      url: "https://sadrasabouri.github.io"
    },
    {
      name: "David Aoyama",
      title: "Undergraduate Student",
      imageSrc: require("../img/david.png"),
    },
  ],
  alumni: [
    {
      name: "Brice Carter",
      title: "Undergraduate Student",
      imageSrc: require("../img/brice.png"),
    },
    {
      name: "Katie",
      title: "Master's Student",
      imageSrc: require("../img/katie.jpeg"),
      url: "https://www.linkedin.com/in/kathryn-foss-067612102/",
    }
  ],
};

function PeopleSection() {
  return (
    <Container>
      <Row>
        <Col xs={12} className="my-4">
          <h1 className="text-center text-sm-start display-4">People</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Principal Investigator</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-5">
          <Profile {...people.pi[0]} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Current students</h2>
        </Col>
      </Row>
      <Row>
        {people.currentStudents.map((person, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Profile {...person} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <h2>Alumni</h2>
        </Col>
      </Row>
      <Row>
        {people.alumni.map((person, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index}>
            <Profile {...person} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PeopleSection;
