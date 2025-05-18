import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EducationList from './components/Education/EducationList';
import SkillsList from './components/Skills/SkillsList';
import ProjectsList from './components/Projects/ProjectsList';
import ExperiencesList from './components/Experiences/ExperiencesList';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <h1>Portfolio CRUD App</h1>
        <Switch>
          <Route path="/education" component={EducationList} />
          <Route path="/skills" component={SkillsList} />
          <Route path="/projects" component={ProjectsList} />
          <Route path="/experiences" component={ExperiencesList} />
          <Route path="/" exact>
            <h2>Welcome to the Portfolio CRUD App</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;