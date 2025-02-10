import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Employment from "./pages/Employment";
import Education from "./pages/Education";
import resumeData from "./data/resumeData";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header/>
            <Routes>
              <Route path="/" element={<Contact data={resumeData} />} />
              <Route path="/employment" element={<Employment />} />
              <Route
                path="/education"
                element={<Education educationData={resumeData.education} />}
              />
              {/* TODO: Add skills and references here */}
            </Routes>
      </div>
    </Router>
  );
}

export default App;
