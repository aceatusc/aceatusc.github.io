import React from "react";
import MainSection from "./MainSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import headerImage from "../img/about-section-header-image.jpg";
import sustainableSoftwareImage from "../img/sustainable-software-image.jpg";
import accessibleDataScienceImage from "../img/accessible-data-science-image.jpg";
import cognitiveModelAIImage from "../img/cognitive-model-ai-image.jpg";

function AboutSection() {
  const contents = {
    sustainableSoftware:
      "When it comes to software, sustainability can be more than just the longevity or the life cycle of a product. In this project, we will redefine the notion of sustainability for software projects, investigate various open-source and industrial projects to derive metrics, and help future engineers build sustainable software by designing and implementing a dashboard.",
    accessibleDataScience:
      "How do data scientists make decisions? Where do they struggle when facing a myriad of analysis choices? Data scientists are experts in domain knowledge, but it is challenging to map the domain knowledge to programming knowledge. We will explore how using Large Language Models, and formal software engineering approaches can assist data scientists in improving their computing experiences.",
    cognitiveModelAI:
      "Cognitive states bidirectionally impact people’s biological, physiological, and mental states, which in turn influence how humans make decisions and take actions when interacting with cyber-physical systems like autonomous cars, and wearable devices. In this project, we plan to investigate the effect of cognitive states on human interactions and design interfaces built upon a symbiotic human-machine relationship.",
  };

  let path = require("../img/sustainablePlaceholder1.png");

  return (
    <Container className="about-section px-4 px-sm-0">
      <Row>
        <Col xs={12} className="my-4">
          <h1 className="text-center text-sm-start display-4">About</h1>
        </Col>
      </Row>
      <Row>
        <Col className="m-auto">
          <img
            src={headerImage}
            alt="About Section"
            className="d-block mx-auto img-fluid rounded"
            style={{
              objectFit: "cover",
              objectPosition: "bottom",
              width: "100%",
              height: "calc(30vh + 10vw)",
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="my-4 mb-md-5 lead">
          Welcome to the  Adaptive Computing Experiences (ACE) lab at the University of Southern California (USC). We investigate cognitive and social aspects of how humans interact with software across various activities from programming to building social identities. Several of our award-winning research uses empirical, qualitative, and quantitative means to drive impactful change to real-world products.
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12} md={6} lg={4}>
          <MainSection
            title="Sustainable Software"
            content={contents.sustainableSoftware}
            imageSrc={sustainableSoftwareImage}
          />
        </Col>
        <Col sm={12} md={6} lg={4}>
          <MainSection
            title="Accessible Data Science"
            content={contents.accessibleDataScience}
            imageSrc={accessibleDataScienceImage}
          />
        </Col>
        <Col xs={0} sm={0} md={6} lg={0} className="d-none d-md-block d-lg-none">
          <img src={path} className="w-100 pt-3" />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <MainSection
            title="Cognitive Model AI"
            content={contents.cognitiveModelAI}
            imageSrc={cognitiveModelAIImage}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutSection;
