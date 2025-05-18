import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ResourceForm from '../../components/ResourceForm';

const AddProject = () => {
  const { addProject } = useContext(AppContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const initialData = {
    title: '',
    description: '',
    technologies: [],
    startDate: '',
    endDate: '',
    githubUrl: '',
    projectUrl: '',
    role: '',
    highlights: []
  };

  const handleSubmit = async (formData) => {
    try {
      await addProject(formData);
      navigate('/projects');
    } catch (err) {
      setError(err.message || 'Error adding project');
      console.error('Error adding project:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Project</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        <div className="col-md-8">
          <ResourceForm
            initialData={initialData}
            onSubmit={handleSubmit}
            resourceType="projects"
          />
        </div>
      </div>
      <div className="mt-3">
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate('/projects')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddProject;
