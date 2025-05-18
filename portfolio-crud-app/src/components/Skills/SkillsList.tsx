import React, { useEffect, useState } from 'react';
import { fetchSkills, deleteSkill } from '../../api';
import { Skill } from '../../types';

const SkillsList: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getSkills = async () => {
            try {
                const data = await fetchSkills();
                setSkills(data);
            } catch (err) {
                setError('Failed to fetch skills');
            } finally {
                setLoading(false);
            }
        };

        getSkills();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteSkill(id);
            setSkills(skills.filter(skill => skill.id !== id));
        } catch (err) {
            setError('Failed to delete skill');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {skills.map(skill => (
                    <li key={skill.id}>
                        {skill.name} - {skill.level}
                        <button onClick={() => handleDelete(skill.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SkillsList;