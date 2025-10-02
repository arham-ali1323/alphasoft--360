import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import FAQ from "./Pages/FAQ";

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="app-container">
        <MainNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
