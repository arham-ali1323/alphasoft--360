import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Team from "./Pages/Team";
import TeamMemberDetail from "./Pages/TeamMemberDetail";
import ServiceDetail from "./Pages/ServiceDetail";
import ProjectDetail from "./Pages/ProjectDetail";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";
import Messages from "./Pages/Messages";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <MainNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team/:id" element={<TeamMemberDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppIcon />
      </div>
    </Router>
  );
}

export default App;
