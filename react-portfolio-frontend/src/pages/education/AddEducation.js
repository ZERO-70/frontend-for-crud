import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ResourceForm from '../../components/ResourceForm';

const AddEducation = () => {
  const { addEducation } = useContext(AppContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const initialData = {
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    description: '',
    location: '',
    achievements: []
  };

  const handleSubmit = async (formData) => {
    try {
      await addEducation(formData);
      navigate('/education');
    } catch (err) {
      setError(err.message || 'Error adding education');
      console.error('Error adding education:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Education</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        <div className="col-md-8">
          <ResourceForm
            initialData={initialData}
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

export default AddEducation;
