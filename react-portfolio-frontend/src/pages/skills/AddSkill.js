import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ResourceForm from '../../components/ResourceForm';

const AddSkill = () => {
  const { addSkill } = useContext(AppContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const initialData = {
    name: '',
    level: '',
    category: '',
    yearsOfExperience: '',
    description: ''
  };

  const handleSubmit = async (formData) => {
    try {
      await addSkill(formData);
      navigate('/skills');
    } catch (err) {
      setError(err.message || 'Error adding skill');
      console.error('Error adding skill:', err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Skill</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        <div className="col-md-8">
          <ResourceForm
            initialData={initialData}
            onSubmit={handleSubmit}
            resourceType="skills"
          />
        </div>
      </div>
      <div className="mt-3">
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate('/skills')}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddSkill;
