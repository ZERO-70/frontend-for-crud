import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getProjectById, deleteProject } from '../../api';
import { Project } from '../../types';

const ProjectsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const history = useHistory();

    useEffect(() => {
        const fetchProject = async () => {
            const fetchedProject = await getProjectById(id);
            setProject(fetchedProject);
        };
        fetchProject();
    }, [id]);

    const handleDelete = async () => {
        await deleteProject(id);
        history.push('/projects');
    };

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Start Date:</strong> {project.startDate}</p>
            <p><strong>End Date:</strong> {project.endDate}</p>
            <p><strong>Highlights:</strong> {project.highlights.join(', ')}</p>
            <button onClick={() => history.push(`/projects/edit/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ProjectsDetail;