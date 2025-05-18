import React, { useState } from 'react';

const ResourceForm = ({ initialData, onSubmit, resourceType }) => {
  const [formData, setFormData] = useState(initialData || {});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle array inputs (comma-separated values)
    if (name.includes('[]')) {
      const fieldName = name.replace('[]', '');
      setFormData({
        ...formData,
        [fieldName]: value.split(',').map(item => item.trim())
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      await onSubmit(formData);
    } catch (err) {
      setError(err.message || 'An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormFields = () => {
    switch (resourceType) {
      case 'education':
        return (
          <>
            <div className="mb-3">
              <label htmlFor="institution" className="form-label">Institution</label>
              <input 
                type="text" 
                className="form-control" 
                id="institution" 
                name="institution" 
                value={formData.institution || ''} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="degree" className="form-label">Degree</label>
              <input 
                type="text" 
                className="form-control" 
                id="degree" 
                name="degree" 
                value={formData.degree || ''} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="field" className="form-label">Field</label>
              <input 
                type="text" 
                className="form-control" 
                id="field" 
                name="field" 
                value={formData.field || ''} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="startDate" className="form-label">Start Date</label>
              <input 
                type="date" 
                className="form-control" 
                id="startDate" 
                name="startDate" 
                value={formData.startDate || ''} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endDate" className="form-label">End Date</label>
              <input 
                type="date" 
                className="form-control" 
                id="endDate" 
                name="endDate" 
                value={formData.endDate || ''} 
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea 
                className="form-control" 
                id="description" 
                name="description" 
                value={formData.description || ''} 
                onChange={handleChange} 
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input 
                type="text" 
                className="form-control" 
                id="location" 
                name="location" 
                value={formData.location || ''} 
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="achievements" className="form-label">Achievements (comma-separated)</label>
              <input 
                type="text" 
                className="form-control" 
                id="achievements" 
                name="achievements[]" 
                value={formData.achievements ? formData.achievements.join(', ') : ''} 
                onChange={handleChange}
              />
            </div>
          </>
        );
      case 'skills':
        return (
          <>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                name="name" 
                value={formData.name || ''} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="level" className="form-label">Level</label>
              <select 
                className="form-control" 
                id="level" 
                name="level" 
                value={formData.level || ''} 
                onChange={handleChange} 
                required
              >
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">Category</label>
              <input 
                type="text" 
                className="form-control" 
                id="category" 
                name="category" 
                value={formData.category || ''} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="yearsOfExperience" className="form-label">Years of Experience</label>
              <input 
                type="number" 
                className="form-control" 
                id="yearsOfExperience" 
                name="yearsOfExperience" 
                value={formData.yearsOfExperience || ''} 
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea 
                className="form-control" 
                id="description" 
                name="description" 
                value={formData.description || ''} 
                onChange={handleChange} 
                rows="3"
              ></textarea>
            </div>
          </>
        );
      case 'projects':
        return (
          <>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input 
                type="text" 
                className="form-control" 
                id="title" 
                name="title" 
                value={formData.title || ''} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea 
                className="form-control" 
                id="description" 
                name="description" 
                value={formData.description || ''} 
                onChange={handleChange} 
                rows="3" 
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="technologies" className="form-label">Technologies (comma-separated)</label>
              <input 
                type="text" 
                className="form-control" 
                id="technologies" 
                name="technologies[]" 
                value={formData.technologies ? formData.technologies.join(', ') : ''} 
                onChange={handleChange} 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="startDate" className="form-label">Start Date</label>
              <input 
                type="date" 
                className="form-control" 
                id="startDate" 
                name="startDate" 
                value={formData.startDate || ''} 
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endDate" className="form-label">End Date</label>
              <input 
                type="date" 
                className="form-control" 
                id="endDate" 
                name="endDate" 
                value={formData.endDate || ''} 
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="githubUrl" className="form-label">GitHub URL</label>
              <input 
                type="url" 
                className="form-control" 
                id="githubUrl" 
                name="githubUrl" 
                value={formData.githubUrl || ''} 
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="projectUrl" className="form-label">Project URL</label>
              <input 
                type="url" 
                className="form-control" 
                id="projectUrl" 
                name="projectUrl" 
                value={formData.projectUrl || ''} 
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <input 
                type="text" 
                className="form-control" 
                id="role" 
                name="role" 
                value={formData.role || ''} 
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="highlights" className="form-label">Highlights (comma-separated)</label>
              <input 
                type="text" 
                className="form-control" 
                id="highlights" 
                name="highlights[]" 
                value={formData.highlights ? formData.highlights.join(', ') : ''} 
                onChange={handleChange}
              />
            </div>
          </>
        );
      case 'experiences':
        return (
          <>
            <div className="mb-3">
              <label htmlFor="company" className="form-label">Company</label>
              <input 
                type="text" 
                className="form-control" 
                id="company" 
                name="company" 
                value={formData.company || ''} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">Position</label>
              <input 
                type="text" 
                className="form-control" 
                id="position" 
                name="position" 
                value={formData.position || ''} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="startDate" className="form-label">Start Date</label>
              <input 
                type="date" 
                className="form-control" 
                id="startDate" 
                name="startDate" 
                value={formData.startDate || ''} 
                onChange={handleChange} 
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="endDate" className="form-label">End Date</label>
              <input 
                type="date" 
                className="form-control" 
                id="endDate" 
                name="endDate" 
                value={formData.endDate || ''} 
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea 
                className="form-control" 
                id="description" 
                name="description" 
                value={formData.description || ''} 
                onChange={handleChange} 
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="responsibilities" className="form-label">Responsibilities (comma-separated)</label>
              <textarea 
                className="form-control" 
                id="responsibilities" 
                name="responsibilities[]" 
                value={formData.responsibilities ? formData.responsibilities.join(', ') : ''} 
                onChange={handleChange} 
                rows="3"
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">Location</label>
              <input 
                type="text" 
                className="form-control" 
                id="location" 
                name="location" 
                value={formData.location || ''} 
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="achievements" className="form-label">Achievements (comma-separated)</label>
              <textarea 
                className="form-control" 
                id="achievements" 
                name="achievements[]" 
                value={formData.achievements ? formData.achievements.join(', ') : ''} 
                onChange={handleChange} 
                rows="3"
              ></textarea>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      {renderFormFields()}
      
      <button 
        type="submit" 
        className="btn btn-primary" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

export default ResourceForm;
