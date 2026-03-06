import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ProjectDetail } from "../pages/portfolio/ProjectDetail";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import "./routes.css";

// Combined Landing Page with all sections
const LandingPage = () => {
  return (
    <>
      <Home />
      <Portfolio />
      <About />
      <ContactUs />
      <footer className="site-footer">
        <p>Made with ❤️ by davykennang</p>
      </footer>
    </>
  );
};

const AnimatedRoutes = withRouter(({ location }) => (
  <Routes location={location}>
    <Route exact path="/" element={<LandingPage />} />
    <Route path="/about" element={<LandingPage />} />
    <Route path="/portfolio" element={<LandingPage />} />
    <Route path="/portfolio/:id" element={<ProjectDetail />} />
    <Route path="/contact" element={<LandingPage />} />
    <Route path="*" element={<LandingPage />} />
  </Routes>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
