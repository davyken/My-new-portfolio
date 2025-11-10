import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import "./style.css";

export const ProjectDetail = () => {
  const { id } = useParams();
  const project = dataportfolio[id];

  if (!project) {
    return (
      <HelmetProvider>
        <Container className="About-header">
          <Helmet>
            <meta charSet="utf-8" />
            <title> Project Not Found | {meta.title} </title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="8">
              <h1 className="display-4 mb-4"> Project Not Found </h1>
              <hr className="t_border my-4 ml-0 text-left" />
            </Col>
          </Row>
          <p>The project you're looking for does not exist.</p>
        </Container>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {project.title} | {meta.title} </title>
          <meta name="description" content={project.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> {project.title} </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
          <Col lg="4" className="text-right">
            <Link to="/portfolio" className="btn btn-secondary">Back</Link>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <img src={project.img} alt={project.title} className="project-image" />
          </Col>
          <Col lg="6">
            <h3>Description</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit Project
            </a>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
