import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createProject, updateProject, getProjectById } from '../../api';
import { Project } from '../../types';

const ProjectsForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [project, setProject] = useState<Project>({
        title: '',
        description: '',
        technologies: [],
        startDate: '',
        endDate: '',
        githubUrl: '',
        projectUrl: '',
        role: '',
        highlights: []
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            const fetchProject = async () => {
                const fetchedProject = await getProjectById(id);
                setProject(fetchedProject);
            };
            fetchProject();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setProject({ ...project, [name]: value });
    };

    const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const { value } = e.target;
        setProject({ ...project, [field]: value.split(',') });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            await updateProject(id, project);
        } else {
            await createProject(project);
        }
        history.push('/projects');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={project.title} onChange={handleChange} placeholder="Project Title" required />
            <textarea name="description" value={project.description} onChange={handleChange} placeholder="Project Description" required />
            <input type="text" name="technologies" value={project.technologies.join(',')} onChange={(e) => handleArrayChange(e, 'technologies')} placeholder="Technologies (comma separated)" required />
            <input type="date" name="startDate" value={project.startDate} onChange={handleChange} required />
            <input type="date" name="endDate" value={project.endDate} onChange={handleChange} required />
            <input type="url" name="githubUrl" value={project.githubUrl} onChange={handleChange} placeholder="GitHub URL" required />
            <input type="url" name="projectUrl" value={project.projectUrl} onChange={handleChange} placeholder="Project URL" required />
            <input type="text" name="role" value={project.role} onChange={handleChange} placeholder="Role" required />
            <input type="text" name="highlights" value={project.highlights.join(',')} onChange={(e) => handleArrayChange(e, 'highlights')} placeholder="Highlights (comma separated)" required />
            <button type="submit">{isEditing ? 'Update Project' : 'Create Project'}</button>
        </form>
    );
};

export default ProjectsForm;