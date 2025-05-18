import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getSkillById, deleteSkill } from '../../api';
import { Skill } from '../../types';

const SkillsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [skill, setSkill] = useState<Skill | null>(null);
    const history = useHistory();

    useEffect(() => {
        const fetchSkill = async () => {
            const fetchedSkill = await getSkillById(id);
            setSkill(fetchedSkill);
        };
        fetchSkill();
    }, [id]);

    const handleDelete = async () => {
        await deleteSkill(id);
        history.push('/skills');
    };

    if (!skill) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{skill.name}</h2>
            <p>Level: {skill.level}</p>
            <p>Category: {skill.category}</p>
            <p>Years of Experience: {skill.yearsOfExperience}</p>
            <p>Description: {skill.description}</p>
            <button onClick={() => history.push(`/skills/edit/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => history.push('/skills')}>Back to Skills</button>
        </div>
    );
};

export default SkillsDetail;