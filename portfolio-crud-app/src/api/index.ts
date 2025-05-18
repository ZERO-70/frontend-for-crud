import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchEducation = async () => {
    const response = await axios.get(`${API_URL}/education`);
    return response.data;
};

export const fetchEducationById = async (id) => {
    const response = await axios.get(`${API_URL}/education/${id}`);
    return response.data;
};

export const createEducation = async (educationData) => {
    const response = await axios.post(`${API_URL}/education`, educationData);
    return response.data;
};

export const updateEducation = async (id, educationData) => {
    const response = await axios.put(`${API_URL}/education/${id}`, educationData);
    return response.data;
};

export const deleteEducation = async (id) => {
    await axios.delete(`${API_URL}/education/${id}`);
};

export const fetchSkills = async () => {
    const response = await axios.get(`${API_URL}/skills`);
    return response.data;
};

export const fetchSkillById = async (id) => {
    const response = await axios.get(`${API_URL}/skills/${id}`);
    return response.data;
};

export const createSkill = async (skillData) => {
    const response = await axios.post(`${API_URL}/skills`, skillData);
    return response.data;
};

export const updateSkill = async (id, skillData) => {
    const response = await axios.put(`${API_URL}/skills/${id}`, skillData);
    return response.data;
};

export const deleteSkill = async (id) => {
    await axios.delete(`${API_URL}/skills/${id}`);
};

export const fetchProjects = async () => {
    const response = await axios.get(`${API_URL}/projects`);
    return response.data;
};

export const fetchProjectById = async (id) => {
    const response = await axios.get(`${API_URL}/projects/${id}`);
    return response.data;
};

export const createProject = async (projectData) => {
    const response = await axios.post(`${API_URL}/projects`, projectData);
    return response.data;
};

export const updateProject = async (id, projectData) => {
    const response = await axios.put(`${API_URL}/projects/${id}`, projectData);
    return response.data;
};

export const deleteProject = async (id) => {
    await axios.delete(`${API_URL}/projects/${id}`);
};

export const fetchExperiences = async () => {
    const response = await axios.get(`${API_URL}/experiences`);
    return response.data;
};

export const fetchExperienceById = async (id) => {
    const response = await axios.get(`${API_URL}/experiences/${id}`);
    return response.data;
};

export const createExperience = async (experienceData) => {
    const response = await axios.post(`${API_URL}/experiences`, experienceData);
    return response.data;
};

export const updateExperience = async (id, experienceData) => {
    const response = await axios.put(`${API_URL}/experiences/${id}`, experienceData);
    return response.data;
};

export const deleteExperience = async (id) => {
    await axios.delete(`${API_URL}/experiences/${id}`);
};