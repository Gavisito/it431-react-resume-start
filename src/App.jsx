import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Employment from "./pages/Employment";
import Education from "./pages/Education";
import References from "./pages/References";
import Skills from "./pages/Skills";
import resumeData from "./data/resumeData";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header/>
            <Routes>
              <Route path="/"
               element={<Contact data={resumeData} />} 
               />
              <Route path="/employment"
               element={<Employment workData={resumeData.work} />} 
               />
              <Route
                path="/education"
                element={<Education educationData={resumeData.education} />}
              />
              <Route
                path="/references"
                element={<References referencesData={resumeData.references} />}
              />
              <Route
                path="/skills"
                element={<Skills skillsData={resumeData.skills} />}
              />
              {/* TODO: Add skills and references here DONE*/}
            </Routes>
      </div>
    </Router>
  );
}

export default App;
