import React from "react";
import Project from "./Project";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectsSection() {
  const projects = [
    {
      title: "Trustworthy AI code generation",
      description: "Developing a method to ensure trustworthy AI-generated code suggestions through statistical tools and program analysis techniques.",
      imageSrc: require("../img/project1.png"),
    },
    {
      title: "Expanding the Scope of Changes Made by Code Prompts",
      description: 'Exploring the limitations of current automatic code suggestion models in generating complete code bases from abstract prompts and proposing a human-in-the-loop framework to extend their capabilities.',
      imageSrc: require("../img/project2.png"),
    },
    {
      title: "Codebase Generation Model Evaluation", 
      description: "The project examines the performance of AI in creating codebases, assessing developer experience and code effectiveness.",
      imageSrc: require("../img/codebase-synthesis-evaluation.jpeg"),
    },
    {
      title: "Science in Stack Overflow",
      description: "In this project, we seek to understand how and why the Stack Overflow community interacts with academic research.",
      imageSrc: require("../img/stackoverflow.png"),
      url: "https://sciso.vercel.app",
    },
    {
      title: "Cognitive biases and development",
      description: "Have you ever thought you'd fix a bug in 30 mins, but then it took you 8 hours? 78% of times that is due to fixation effects from cognitive biases. Thousands of cognitive biases affect how humans make decisions, including decision in programming. We explore in depth the consequences of each cognitive bias on programming experience.",
      imageSrc: require("../img/cognitive-bias-and-development.png"),
      url: "",
    },
    {
      title: "Cognitive control and intervention in autonomous systems",
      description: "To design good collaboration in human-autonomous system, we need to understand the cognitive barriers in humans and provide good explanation/intervention systems. In these projects, we look at different autonomous systems and study how human cognition needs support for seamless and safe operations.",
      imageSrc: require("../img/cognitive-control-autonomous-vehicles.jpg"),
    },
    {
      title: "Accessible Data Science",
      description: "Exploring the spectrum of tools to help end users and scientists understand and harness the power of Machine Learning and state-of-the-art Gen. AI tools.",
      imageSrc: require("../img/accessible-data-science.png"),
    }
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12} className="my-4">
          <h1 className="text-center text-sm-start display-5 mx-md-4">Projects</h1>
        </Col>
      </Row>
      <Row>
        {projects.map((project, index) => (
          <Col xs={12} lg={6} key={index}>
            <Project {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectsSection;
