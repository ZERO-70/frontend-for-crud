import React from 'react';
import { Link } from 'react-router-dom';

const ResourceCard = ({ item, resourceType, onDelete }) => {
  // Function to render the appropriate content for each resource type
  const renderCardContent = () => {
    switch (resourceType) {
      case 'education':
        return (
          <>
            <h5 className="card-title">{item.institution}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {item.degree} in {item.field}
            </h6>
            <p className="card-text">
              <small>
                {new Date(item.startDate).toLocaleDateString()} - 
                {item.endDate ? new Date(item.endDate).toLocaleDateString() : 'Present'}
              </small>
            </p>
            <p className="card-text">{item.description}</p>
            {item.location && <p className="card-text"><small className="text-muted">Location: {item.location}</small></p>}
            {item.achievements && item.achievements.length > 0 && (
              <div className="mt-2">
                <strong>Achievements:</strong>
                <ul className="list-group list-group-flush">
                  {item.achievements.map((achievement, index) => (
                    <li key={index} className="list-group-item py-1 px-0">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        );
      case 'skills':
        return (
          <>
            <h5 className="card-title">{item.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Level: {item.level}</h6>
            <p className="card-text">Category: {item.category}</p>
            {item.yearsOfExperience && <p className="card-text">Experience: {item.yearsOfExperience} years</p>}
            <p className="card-text">{item.description}</p>
          </>
        );
      case 'projects':
        return (
          <>
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            {item.role && <p className="card-text">Role: {item.role}</p>}
            <p className="card-text">
              <small>
                {item.startDate ? new Date(item.startDate).toLocaleDateString() : ''} - 
                {item.endDate ? new Date(item.endDate).toLocaleDateString() : 'Present'}
              </small>
            </p>
            {item.technologies && item.technologies.length > 0 && (
              <div className="mb-2">
                <strong>Technologies:</strong>
                <div>
                  {item.technologies.map((tech, index) => (
                    <span key={index} className="badge bg-secondary me-1">{tech}</span>
                  ))}
                </div>
              </div>
            )}
            {item.highlights && item.highlights.length > 0 && (
              <div className="mt-2">
                <strong>Highlights:</strong>
                <ul className="list-group list-group-flush">
                  {item.highlights.map((highlight, index) => (
                    <li key={index} className="list-group-item py-1 px-0">{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.githubUrl && (
              <a href={item.githubUrl} className="card-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            )}
            {item.projectUrl && (
              <a href={item.projectUrl} className="card-link" target="_blank" rel="noopener noreferrer">Live Demo</a>
            )}
          </>
        );
      case 'experiences':
        return (
          <>
            <h5 className="card-title">{item.company}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.position}</h6>
            <p className="card-text">
              <small>
                {new Date(item.startDate).toLocaleDateString()} - 
                {item.endDate ? new Date(item.endDate).toLocaleDateString() : 'Present'}
              </small>
            </p>
            {item.location && <p className="card-text"><small className="text-muted">Location: {item.location}</small></p>}
            <p className="card-text">{item.description}</p>
            {item.responsibilities && item.responsibilities.length > 0 && (
              <div className="mt-2">
                <strong>Responsibilities:</strong>
                <ul className="list-group list-group-flush">
                  {item.responsibilities.map((responsibility, index) => (
                    <li key={index} className="list-group-item py-1 px-0">{responsibility}</li>
                  ))}
                </ul>
              </div>
            )}
            {item.achievements && item.achievements.length > 0 && (
              <div className="mt-2">
                <strong>Achievements:</strong>
                <ul className="list-group list-group-flush">
                  {item.achievements.map((achievement, index) => (
                    <li key={index} className="list-group-item py-1 px-0">{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        );
      default:
        return <p>Unknown resource type</p>;
    }
  };

  // Get the appropriate ID from the item (assuming it's _id or id)
  const itemId = item._id || item.id;

  return (
    <div className="card mb-3">
      <div className="card-body">
        {renderCardContent()}
      </div>
      <div className="card-footer bg-transparent d-flex justify-content-end">
        <Link 
          to={`/${resourceType}/edit/${itemId}`} 
          className="btn btn-sm btn-primary me-2"
        >
          Edit
        </Link>
        <button 
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(itemId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
