import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

const filterCategories = [
  { id: "all", label: "All" },
  { id: "favorite", label: "Favorite" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Fullstack" },
];

// Define categories for each project
const projectCategories = {
    0: ["fullstack", "favorite"],
    1: ["fullstack"],
    2: ["fullstack"],
    3: ["fullstack"],
    4: ["fullstack"],
    5: ["fullstack"],
    6: ["frontend"],
    7: ["frontend"],
    8: ["fullstack"],
    9: ["fullstack"],
    10: ["fullstack"],
    11: ["fullstack"],
    12: ["frontend"],
};

// Define technologies for each project
const projectTechnologies = {
    0: ["React.js", "Supabase", "Node.js", "Tailwind"],
    1: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io"],
    2: ["Next.js", "Node.js", "Express", "MongoDB", "Auth0"],
    3: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    4: ["React.js", "Node.js", "Express", "MongoDB", "Stripe"],
    5: ["Next.js", "NestJS", "MongoDB", "WebSockets"],
    6: ["React.js", "Tailwind CSS"],
    7: ["React.js", "Node.js", "Tailwind"],
    8: ["React.js", "Node.js", "MongoDB", "Cloudinary"],
    9: ["React.js", "Node.js", "Express"],
    10: ["React.js", "Node.js", "MongoDB", "Tailwind"],
    11: ["React.js", "Node.js", "Express", "MongoDB"],
    12: ["React.js", "Tailwind CSS"],
};

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects = dataportfolio.filter((project, index) => {
    if (activeFilter === "all") return true;
    const categories = projectCategories[index] || [];
    return categories.includes(activeFilter);
  });
  
  const visibleProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <HelmetProvider>
      <Container className="About-header" id="portfolio">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        
        {/* Filter Buttons */}
        <div className="portfolio-filters mb-5">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? "active" : ""}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="mb-5 po_items_ho">
          {visibleProjects.map((data, i) => {
            const technologies = projectTechnologies[i] || [];
            return (
              <div key={i} className="po_item">
                <div className="po_item_image_wrapper">
                    <img src={data.img} alt={data.title} />
                    <div className="po_item_tech">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className={`tech-tag tech-${(index % 6) + 1}`}
                                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <h3 className="po_title">{data.title}</h3>
                <p className="po_desc">{data.description}</p>
                <Link to={`/portfolio/${i}`}>Read More</Link>
              </div>
            );
          })}
        </div>
        
        {/* Show More Button */}
        {filteredProjects.length > 6 && (
            <div className="portfolio-show-more">
                <button 
                    className="show-more-btn"
                    onClick={() => setShowAllProjects(!showAllProjects)}
                >
                    {showAllProjects ? 'Show Less' : `Show More (${filteredProjects.length - 6} more)`}
                </button>
            </div>
        )}
      </Container>
    </HelmetProvider>
  );
};
