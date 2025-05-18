import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createSkill, updateSkill, getSkillById } from '../../api';
import { Skill } from '../../types';

const SkillsForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [skill, setSkill] = useState<Skill>({
        name: '',
        level: '',
        category: '',
        yearsOfExperience: 0,
        description: ''
    });

    useEffect(() => {
        if (id) {
            const fetchSkill = async () => {
                const fetchedSkill = await getSkillById(id);
                setSkill(fetchedSkill);
            };
            fetchSkill();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSkill({ ...skill, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            await updateSkill(id, skill);
        } else {
            await createSkill(skill);
        }
        history.push('/skills');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={skill.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Level:</label>
                <input type="text" name="level" value={skill.level} onChange={handleChange} required />
            </div>
            <div>
                <label>Category:</label>
                <input type="text" name="category" value={skill.category} onChange={handleChange} required />
            </div>
            <div>
                <label>Years of Experience:</label>
                <input type="number" name="yearsOfExperience" value={skill.yearsOfExperience} onChange={handleChange} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={skill.description} onChange={handleChange} required />
            </div>
            <button type="submit">{id ? 'Update Skill' : 'Create Skill'}</button>
        </form>
    );
};

export default SkillsForm;