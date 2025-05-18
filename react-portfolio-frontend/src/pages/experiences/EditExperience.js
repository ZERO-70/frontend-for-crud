import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ResourceForm from '../../components/ResourceForm';
import { experiencesService } from '../../services/api';

const EditExperience = () => {
  const { experiences, updateExperience } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentExperience, setCurrentExperience] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperienceDetails = async () => {
      // First check if we already have the experience in our context
      const existingExperience = experiences.find(item => (item._id === id || item.id === id));
      
      if (existingExperience) {
        setCurrentExperience(existingExperience);
        setLoading(false);
        return;
      }
      
      // If not, fetch it from the API
      try {
        const response = await experiencesService.getById(id);
        setCurrentExperience(response.data);
      } catch (err) {
        console.error('Error fetching experience details:', err);
        setError('Failed to load experience details');
      } finally {
        setLoading(false);
      }
    };

    fetchExperienceDetails();
  }, [id, experiences]);

  const handleSubmit = async (formData) => {
    try {
      await updateExperience(id, formData);
      navigate('/experiences');
    } catch (err) {
      setError(err.message || 'Error updating experience');
      console.error('Error updating experience:', err);
    }
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!currentExperience) {
    return <div className="alert alert-warning">Experience not found</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Edit Work Experience</h2>
      <div className="row">
        <div className="col-md-8">
          <ResourceForm
            initialData={currentExperience}
            onSubmit={handleSubmit}
            resourceType="experiences"
          />
        </div>
      </div>
      <div className="mt-3">
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate('/experiences')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditExperience;
