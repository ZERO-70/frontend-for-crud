import React, { createContext, useState, useEffect } from 'react';
import { educationService, skillsService, projectsService, experiencesService } from '../services/api';

// Create context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // State for each resource type
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load all data when component mounts
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        const [educationRes, skillsRes, projectsRes, experiencesRes] = await Promise.all([
          educationService.getAll(),
          skillsService.getAll(),
          projectsService.getAll(),
          experiencesService.getAll()
        ]);

        setEducation(educationRes.data);
        setSkills(skillsRes.data);
        setProjects(projectsRes.data);
        setExperiences(experiencesRes.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data. Please check if the API server is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  // CRUD operations for Education
  const addEducation = async (newEducation) => {
    try {
      const response = await educationService.create(newEducation);
      setEducation([...education, response.data]);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateEducation = async (id, updatedEducation) => {
    try {
      const response = await educationService.update(id, updatedEducation);
      setEducation(education.map(item => item._id === id ? response.data : item));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const deleteEducation = async (id) => {
    try {
      await educationService.delete(id);
      setEducation(education.filter(item => item._id !== id));
    } catch (error) {
      throw error;
    }
  };

  // CRUD operations for Skills
  const addSkill = async (newSkill) => {
    try {
      const response = await skillsService.create(newSkill);
      setSkills([...skills, response.data]);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateSkill = async (id, updatedSkill) => {
    try {
      const response = await skillsService.update(id, updatedSkill);
      setSkills(skills.map(item => item._id === id ? response.data : item));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const deleteSkill = async (id) => {
    try {
      await skillsService.delete(id);
      setSkills(skills.filter(item => item._id !== id));
    } catch (error) {
      throw error;
    }
  };

  // CRUD operations for Projects
  const addProject = async (newProject) => {
    try {
      const response = await projectsService.create(newProject);
      setProjects([...projects, response.data]);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateProject = async (id, updatedProject) => {
    try {
      const response = await projectsService.update(id, updatedProject);
      setProjects(projects.map(item => item._id === id ? response.data : item));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const deleteProject = async (id) => {
    try {
      await projectsService.delete(id);
      setProjects(projects.filter(item => item._id !== id));
    } catch (error) {
      throw error;
    }
  };

  // CRUD operations for Experiences
  const addExperience = async (newExperience) => {
    try {
      const response = await experiencesService.create(newExperience);
      setExperiences([...experiences, response.data]);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateExperience = async (id, updatedExperience) => {
    try {
      const response = await experiencesService.update(id, updatedExperience);
      setExperiences(experiences.map(item => item._id === id ? response.data : item));
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const deleteExperience = async (id) => {
    try {
      await experiencesService.delete(id);
      setExperiences(experiences.filter(item => item._id !== id));
    } catch (error) {
      throw error;
    }
  };

  return (
    <AppContext.Provider
      value={{
        education,
        skills,
        projects,
        experiences,
        loading,
        error,
        addEducation,
        updateEducation,
        deleteEducation,
        addSkill,
        updateSkill,
        deleteSkill,
        addProject,
        updateProject,
        deleteProject,
        addExperience,
        updateExperience,
        deleteExperience
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
