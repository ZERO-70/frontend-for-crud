import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppProvider from './context/AppContext';
import Navigation from './components/Navigation';
import ErrorBoundary from './components/ErrorBoundary';

// Home page
import HomePage from './pages/HomePage';

// Education pages
import EducationList from './pages/education/EducationList';
import AddEducation from './pages/education/AddEducation';
import EditEducation from './pages/education/EditEducation';

// Skills pages
import SkillsList from './pages/skills/SkillsList';
import AddSkill from './pages/skills/AddSkill';
import EditSkill from './pages/skills/EditSkill';

// Projects pages
import ProjectsList from './pages/projects/ProjectsList';
import AddProject from './pages/projects/AddProject';
import EditProject from './pages/projects/EditProject';

// Experiences pages
import ExperiencesList from './pages/experiences/ExperiencesList';
import AddExperience from './pages/experiences/AddExperience';
import EditExperience from './pages/experiences/EditExperience';

function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <Router>
          <div className="App">
            <Navigation />
            <main className="mt-4 mb-5">
              <Routes>
              {/* Home route */}
              <Route path="/" element={<HomePage />} />
              
              {/* Education routes */}
              <Route path="/education" element={<EducationList />} />
              <Route path="/education/add" element={<AddEducation />} />
              <Route path="/education/edit/:id" element={<EditEducation />} />
              
              {/* Skills routes */}
              <Route path="/skills" element={<SkillsList />} />
              <Route path="/skills/add" element={<AddSkill />} />
              <Route path="/skills/edit/:id" element={<EditSkill />} />
              
              {/* Projects routes */}
              <Route path="/projects" element={<ProjectsList />} />
              <Route path="/projects/add" element={<AddProject />} />
              <Route path="/projects/edit/:id" element={<EditProject />} />
              
              {/* Experiences routes */}
              <Route path="/experiences" element={<ExperiencesList />} />
              <Route path="/experiences/add" element={<AddExperience />} />
              <Route path="/experiences/edit/:id" element={<EditExperience />} />
            </Routes>
          </main>
          <footer className="bg-light text-center text-muted py-3">
            <div className="container">
              <p>Portfolio API Testing Frontend</p>
            </div>
          </footer>
        </div>
      </Router>
    </AppProvider>
    </ErrorBoundary>
  );
}

export default App;
