import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ResourceForm from '../../components/ResourceForm';
import { educationService } from '../../services/api';

const EditEducation = () => {
  const { education, updateEducation } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentEducation, setCurrentEducation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEducationDetails = async () => {
      // First check if we already have the education in our context
      const existingEducation = education.find(item => (item._id === id || item.id === id));
      
      if (existingEducation) {
        setCurrentEducation(existingEducation);
        setLoading(false);
        return;
      }
      
      // If not, fetch it from the API
      try {
        const response = await educationService.getById(id);
        setCurrentEducation(response.data);
      } catch (err) {
        console.error('Error fetching education details:', err);
        setError('Failed to load education details');
      } finally {
        setLoading(false);
      }
    };

    fetchEducationDetails();
  }, [id, education]);

  const handleSubmit = async (formData) => {
    try {
      await updateEducation(id, formData);
      navigate('/education');
    } catch (err) {
      setError(err.message || 'Error updating education');
      console.error('Error updating education:', err);
    }
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!currentEducation) {
    return <div className="alert alert-warning">Education entry not found</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Edit Education</h2>
      <div className="row">
        <div className="col-md-8">
          <ResourceForm
            initialData={currentEducation}
            onSubmit={handleSubmit}
            resourceType="education"
          />
        </div>
      </div>
      <div className="mt-3">
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate('/education')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditEducation;
