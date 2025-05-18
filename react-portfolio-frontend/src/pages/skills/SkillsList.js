import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ResourceCard from '../../components/ResourceCard';

const SkillsList = () => {
  const { skills, loading, error, deleteSkill } = useContext(AppContext);

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Skills</h2>
        <Link to="/skills/add" className="btn btn-success">
          Add Skill
        </Link>
      </div>

      {skills.length === 0 ? (
        <p>No skills found. Add your first skill!</p>
      ) : (
        <div className="row">
          {skills.map(item => (
            <div className="col-md-6 col-lg-4 mb-3" key={item._id || item.id}>
              <ResourceCard
                item={item}
                resourceType="skills"
                onDelete={deleteSkill}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsList;
