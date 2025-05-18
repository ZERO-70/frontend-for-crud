import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const HomePage = () => {
  const { loading, error } = useContext(AppContext);
  
  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"></div></div>;
  }

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          <h4>API Connection Error</h4>
          <p>{error}</p>
          <p>Please make sure that your backend API is running at http://localhost:5000</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Portfolio API Testing Interface</h1>
        <p className="lead">
          This simple interface allows you to test the CRUD operations of your Portfolio API backend.
        </p>
        <hr className="my-4" />
        <p>
          Select a section below to manage your portfolio content:
        </p>
      </div>

      <div className="row mt-4">
        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              <p className="card-text">Manage your educational history including degrees, institutions, and achievements.</p>
              <Link to="/education" className="btn btn-primary">Manage Education</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Skills</h5>
              <p className="card-text">Track your technical and professional skills with proficiency levels.</p>
              <Link to="/skills" className="btn btn-primary">Manage Skills</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Projects</h5>
              <p className="card-text">Showcase your projects with details about technologies used and outcomes.</p>
              <Link to="/projects" className="btn btn-primary">Manage Projects</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Work Experience</h5>
              <p className="card-text">Document your professional experience, roles, and accomplishments.</p>
              <Link to="/experiences" className="btn btn-primary">Manage Experience</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="alert alert-info mt-4" role="alert">
        <h5>API Connection Info</h5>
        <p className="mb-0">This interface is currently configured to connect to your API at: <code>http://localhost:5000/api</code></p>
      </div>
    </div>
  );
};

export default HomePage;
