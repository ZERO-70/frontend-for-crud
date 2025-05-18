import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ResourceCard from '../../components/ResourceCard';

const ExperiencesList = () => {
  const { experiences, loading, error, deleteExperience } = useContext(AppContext);

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Work Experiences</h2>
        <Link to="/experiences/add" className="btn btn-success">
          Add Experience
        </Link>
      </div>

      {experiences.length === 0 ? (
        <p>No experiences found. Add your first work experience!</p>
      ) : (
        experiences.map(item => (
          <ResourceCard
            key={item._id || item.id}
            item={item}
            resourceType="experiences"
            onDelete={deleteExperience}
          />
        ))
      )}
    </div>
  );
};

export default ExperiencesList;
