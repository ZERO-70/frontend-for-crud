import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ResourceCard from '../../components/ResourceCard';

const ProjectsList = () => {
  const { projects, loading, error, deleteProject } = useContext(AppContext);

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Projects</h2>
        <Link to="/projects/add" className="btn btn-success">
          Add Project
        </Link>
      </div>

      {projects.length === 0 ? (
        <p>No projects found. Add your first project!</p>
      ) : (
        projects.map(item => (
          <ResourceCard
            key={item._id || item.id}
            item={item}
            resourceType="projects"
            onDelete={deleteProject}
          />
        ))
      )}
    </div>
  );
};

export default ProjectsList;
