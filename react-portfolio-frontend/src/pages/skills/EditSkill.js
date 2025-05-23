import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ResourceForm from '../../components/ResourceForm';
import { skillsService } from '../../services/api';

const EditSkill = () => {
  const { skills, updateSkill } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentSkill, setCurrentSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkillDetails = async () => {
      // First check if we already have the skill in our context
      const existingSkill = skills.find(item => (item._id === id || item.id === id));
      
      if (existingSkill) {
        setCurrentSkill(existingSkill);
        setLoading(false);
        return;
      }
      
      // If not, fetch it from the API
      try {
        const response = await skillsService.getById(id);
        setCurrentSkill(response.data);
      } catch (err) {
        console.error('Error fetching skill details:', err);
        setError('Failed to load skill details');
      } finally {
        setLoading(false);
      }
    };

    fetchSkillDetails();
  }, [id, skills]);

  const handleSubmit = async (formData) => {
    try {
      await updateSkill(id, formData);
      navigate('/skills');
    } catch (err) {
      setError(err.message || 'Error updating skill');
      console.error('Error updating skill:', err);
    }
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!currentSkill) {
    return <div className="alert alert-warning">Skill not found</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Edit Skill</h2>
      <div className="row">
        <div className="col-md-8">
          <ResourceForm
            initialData={currentSkill}
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

export default EditSkill;
