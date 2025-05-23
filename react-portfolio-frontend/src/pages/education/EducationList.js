import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import ResourceCard from '../../components/ResourceCard';

const EducationList = () => {
  const { education, loading, error, deleteEducation } = useContext(AppContext);

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Education</h2>
        <Link to="/education/add" className="btn btn-success">
          Add Education
        </Link>
      </div>

      {education.length === 0 ? (
        <p>No education entries found. Add your first education entry!</p>
      ) : (
        education.map(item => (
          <ResourceCard
            key={item._id || item.id}
            item={item}
            resourceType="education"
            onDelete={deleteEducation}
          />
        ))
      )}
    </div>
  );
};

export default EducationList;
