import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ResourceForm from '../../components/ResourceForm';

const AddExperience = () => {
  const { addExperience } = useContext(AppContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const initialData = {
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    responsibilities: [],
    location: '',
    achievements: []
  };

  const handleSubmit = async (formData) => {
    try {
      await addExperience(formData);
      navigate('/experiences');
    } catch (err) {
      setError(err.message || 'Error adding experience');
      console.error('Error adding experience:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Work Experience</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        <div className="col-md-8">
          <ResourceForm
            initialData={initialData}
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

export default AddExperience;
