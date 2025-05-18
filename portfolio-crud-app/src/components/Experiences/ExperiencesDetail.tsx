import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Experience } from '../../types';
import { getExperienceById, deleteExperience } from '../../api';

const ExperiencesDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [experience, setExperience] = React.useState<Experience | null>(null);
    const history = useHistory();

    React.useEffect(() => {
        const fetchExperience = async () => {
            const data = await getExperienceById(id);
            setExperience(data);
        };
        fetchExperience();
    }, [id]);

    const handleDelete = async () => {
        await deleteExperience(id);
        history.push('/experiences');
    };

    if (!experience) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{experience.position} at {experience.company}</h2>
            <p><strong>Start Date:</strong> {experience.startDate}</p>
            <p><strong>End Date:</strong> {experience.endDate}</p>
            <p><strong>Description:</strong> {experience.description}</p>
            <p><strong>Responsibilities:</strong> {experience.responsibilities.join(', ')}</p>
            <p><strong>Location:</strong> {experience.location}</p>
            <p><strong>Achievements:</strong> {experience.achievements.join(', ')}</p>
            <button onClick={() => history.push(`/experiences/edit/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => history.push('/experiences')}>Back to List</button>
        </div>
    );
};

export default ExperiencesDetail;