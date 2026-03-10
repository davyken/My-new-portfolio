import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import adsLogo from "../../assets/images/ads.png";
import greatriftLogo from "../../assets/images/greatriftfoundation.jpeg";
import ifcmLogo from "../../assets/images/ifcm.jpeg";
import rebaseLogo from "../../assets/images/rebase.svg";
import jsBasicCert from "../../assets/images/jsbasic.png";
import jsIntermediateCert from "../../assets/images/jsintermediate.png";
import nodejsIntermediateCert from "../../assets/images/nodejsintermediate.png";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

// Technology logos data with colors
const techLogos = [
  { name: "JavaScript", color: "#f7df1e", icon: "JS" },
  { name: "React", color: "#61dafb", icon: "R" },
  { name: "Node.js", color: "#339933", icon: "N" },
  { name: "Next.js", color: "#000000", icon: "NX" },
  { name: "MongoDB", color: "#47a248", icon: "M" },
  { name: "Flutter", color: "#02569b", icon: "F" },
  { name: "NestJS", color: "#e0234e", icon: "NS" },
  { name: "Supabase", color: "#3ecf8e", icon: "S" },
  { name: "MySQL", color: "#4479a1", icon: "MY" },
  { name: "Socket.io", color: "#010101", icon: "IO" },
];

// Skill logo mapping with icons and colors
const skillLogos = {
  "Javascript": { icon: "fab fa-js", color: "#f7df1e" },
  "Flutter & spring boot": { icon: "fab fa-flutter", color: "#02569b", text: "Flutter" },
  "React native": { icon: "fab fa-react", color: "#61dafb" },
  "NodeJS(express)": { icon: "fab fa-node-js", color: "#339933" },
  "NestJS": { icon: "fas fa-egg", color: "#e0234e", text: "NestJS" },
  "MongoDB": { icon: "fas fa-leaf", color: "#47a248" },
  "Supabase": { icon: "fas fa-server", color: "#3ecf8e", text: "Supabase" },
  "Nextjs": { icon: "fab fa-nextjs", color: "#ffffff", text: "Next.js" },
  "MySql": { icon: "fas fa-server", color: "#4479a1", text: "MySQL" },
  "socket.io": { icon: "fas fa-plug", color: "#010101", text: "Socket.io" },
  "Learning management system (LMS)": { icon: "fas fa-graduation-cap", color: "#6c5ce7" },
  "Social Media management": { icon: "fas fa-share-nodes", color: "#00cec9" },
  "DART & PHP": { icon: "fab fa-php", color: "#777bb4", text: "DART/PHP" },
  "Canva & Capcut": { icon: "fas fa-pen-nib", color: "#fd79a8" },
};

// Work experience data with company info
const workExperience = [
  {
    company: "Ads Ltd",
    role: "Frontend Developer",
    year: "2025 - 2026",
    logo: adsLogo,
    description: "Building responsive web applications and user interfaces.",
    type: "Internship",
    color: "#e67e22"
  },
  {
    company: "Greatrift Foundation",
    role: "Web Developer & Graphic Designer",
    year: "2024",
    logo: greatriftLogo,
    description: "Developed corporate websites and brand identity materials.",
    type: "Internship",
    color: "#4a90d9"
  },
  {
    company: "IFCM Ministries",
    role: "Web Developer",
    year: "2025",
    logo: ifcmLogo,
    description: "Created and maintained church website with dynamic content.",
    type: "Internship",
    color: "#e74c3c"
  },
  {
    company: "Rebase Codecamp",
    role: "Fullstack Developer",
    year: "2025",
    logo: rebaseLogo,
    description: "Built full-stack projects using modern technologies.",
    type: "Internship",
    color: "#2ecc71"
  }
];

// Certifications data
const certifications = [
  { name: "JavaScript Basic", issuer: "HackerRank", year: "2025", image: jsBasicCert },
  { name: "JavaScript Intermediate", issuer: "HackerRank", year: "2025", image: jsIntermediateCert },
  { name: "Node.js Intermediate", issuer: "HackerRank", year: "2025", image: nodejsIntermediateCert }
];

export const About = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const visibleSkills = showAllSkills ? skills : skills.slice(0, 6);
  const [selectedCert, setSelectedCert] = useState(null);
  
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);
  
  return (
    <HelmetProvider>
      <Container className="About-header" id="about">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            <div className="work-experience-grid">
              {workExperience.map((work, index) => (
                <div 
                  key={index} 
                  className="work-box"
                  style={{ borderColor: work.color }}
                >
                  <div className="work-box-icon" style={{ backgroundColor: work.color }}>
                    <img src={work.logo} alt={work.company} className="company-logo" />
                  </div>
                  <div className="work-box-content">
                    <div className="work-badge">{work.type}</div>
                    <h4>{work.company}</h4>
                    <p className="work-role">{work.role}</p>
                    <p className="work-description">{work.description}</p>
                    <span className="work-year">{work.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Certifications</h3>
          </Col>
          <Col lg="7">
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-box" onClick={() => setSelectedCert(cert)} style={{cursor: 'pointer'}}>
                  {cert.image ? (
                    <div className="cert-image-container">
                      <img src={cert.image} alt={cert.name} className="cert-image" />
                      <div className="cert-overlay">
                        <span>{cert.issuer} - {cert.year}</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="cert-icon">🏆</div>
                      <div className="cert-content">
                        <h4>{cert.name}</h4>
                        <p>{cert.issuer}</p>
                        <span>{cert.year}</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            <div className="skills-container">
              {visibleSkills.map((skill, index) => {
                const skillInfo = skillLogos[skill.name] || { icon: "fas fa-code", color: "#6c5ce7" };
                return (
                  <div key={index} className="skills-item">
                    <div className="skills-info">
                      <span className="skills-name">
                        <i className={skillInfo.icon} style={{ color: skillInfo.color, marginRight: '8px' }}></i>
                        {skillInfo.text || skill.name}
                      </span>
                      <span className="skills-value">{skill.value}%</span>
                    </div>
                    <div className="skills-progress-bg">
                      <div 
                        className="skills-progress-bar" 
                        style={{ 
                          width: `${skill.value}%`,
                          background: `linear-gradient(90deg, ${skillInfo.color} 0%, ${skillInfo.color}88 100%)`
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
              {skills.length > 6 && (
                <button 
                  className="show-more-skills"
                  onClick={() => setShowAllSkills(!showAllSkills)}
                >
                  {showAllSkills ? 'Show Less' : `Show More (${skills.length - 6} more)`}
                </button>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      
      {/* Certificate Modal */}
      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>×</button>
            <img src={selectedCert.image} alt={selectedCert.name} className="cert-modal-image" />
            <div className="cert-modal-info">
              <h4>{selectedCert.name}</h4>
              <p>{selectedCert.issuer} - {selectedCert.year}</p>
            </div>
          </div>
        </div>
      )}
    </HelmetProvider>
  );
};
