import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

export default function TechnicalSkill() {
  const skills = [
    {
      name: "C",
      image: "https://img.icons8.com/color/48/000000/c-programming.png",
      color: "#fe3e57",
    },
    {
      name: "Python",
      image: "https://img.icons8.com/color/48/000000/python.png",
      color: "#39c4ff",
    },
    {
      name: "HTML5",
      image: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      color: "#e34c26",
    },
    {
      name: "CSS3",
      image: "https://img.icons8.com/color/48/000000/css3.png",
      color: "#264de4",
    },
    {
      name: "TailwindCSS",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png",
      color: "#38bdf8",
    },
    {
      name: "Bootstrap",
      image: "https://img.icons8.com/color/48/000000/bootstrap.png",
      color: "#7952b3",
    },
    {
      name: "JavaScript",
      image: "https://img.icons8.com/color/48/000000/javascript--v1.png",
      color: "#f7df1e",
    },
    {
      name: "MySQL",
      image: "https://img.icons8.com/fluency/48/000000/mysql-logo.png",
      color: "#4479a1",
    },
    {
      name: "MongoDB",
      image: "https://img.icons8.com/color/48/000000/mongodb.png",
      color: "#47a248",
    },
    {
      name: "NodeJS",
      image: "https://img.icons8.com/color/48/000000/nodejs.png",
      color: "#3c873a",
    },
    {
      name: "ReactJS",
      image: "https://img.icons8.com/plasticine/100/000000/react.png",
      color: "#61dafb",
    },
    {
      name: "ExpressJS",
      image: "https://img.icons8.com/fluency/48/000000/node-js.png",
      color: "#FF5722",
    },
    {
      name: "PHP",
      image: "https://img.icons8.com/offices/30/000000/php-logo.png",
      color: "#787cb5",
    },
    {
      name: "Java",
      image: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png",
      color: "#5382a1",
    },
  ];

  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        {/* <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link> */}
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Tada>
        <h1 className="mt-4">Technical Skills</h1>
      </Tada>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            {skills.map((skill, index) => (
              <Col md={3} key={index}>
                <div className="text-center">
                  <img
                    src={skill.image}
                    alt={`${skill.name} logo`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain",
                      marginBottom: "20px",
                    }}
                  />
                  <h2
                    style={{
                      color: skill.color,
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    {skill.name}
                  </h2>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
