import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import RoutesConfig from "./RoutesConfig";
import "./App.css";
import Footer from "./components/Footer/Footer";
import $ from "jquery";
import ScrollToTop from "./features/ScrollToTop";
window.$ = window.jQuery = $;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="MainContent">
        <NavBar />
        <div className="Content">
          <RoutesConfig/>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
