import React, { useEffect, useState } from 'react';
import { getExperiences } from '../../api';
import { Experience } from '../../types';

const ExperiencesList: React.FC = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const data = await getExperiences();
                setExperiences(data);
            } catch (err) {
                setError('Failed to fetch experiences');
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Experiences</h2>
            <ul>
                {experiences.map((experience) => (
                    <li key={experience.id}>
                        <h3>{experience.position} at {experience.company}</h3>
                        <p>{experience.startDate} - {experience.endDate}</p>
                        <p>{experience.description}</p>
                        <button>Edit</button>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExperiencesList;