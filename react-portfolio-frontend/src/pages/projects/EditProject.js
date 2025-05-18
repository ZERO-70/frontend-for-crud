import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ResourceForm from '../../components/ResourceForm';
import { projectsService } from '../../services/api';

const EditProject = () => {
  const { projects, updateProject } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentProject, setCurrentProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      // First check if we already have the project in our context
      const existingProject = projects.find(item => (item._id === id || item.id === id));
      
      if (existingProject) {
        setCurrentProject(existingProject);
        setLoading(false);
        return;
      }
      
      // If not, fetch it from the API
      try {
        const response = await projectsService.getById(id);
        setCurrentProject(response.data);
      } catch (err) {
        console.error('Error fetching project details:', err);
        setError('Failed to load project details');
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id, projects]);

  const handleSubmit = async (formData) => {
    try {
      await updateProject(id, formData);
      navigate('/projects');
    } catch (err) {
      setError(err.message || 'Error updating project');
      console.error('Error updating project:', err);
    }
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!currentProject) {
    return <div className="alert alert-warning">Project not found</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Edit Project</h2>
      <div className="row">
        <div className="col-md-8">
          <ResourceForm
            initialData={currentProject}
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

export default EditProject;
