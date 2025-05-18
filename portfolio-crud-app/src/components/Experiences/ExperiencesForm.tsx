import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createExperience, updateExperience, getExperienceById } from '../../api';
import { Experience } from '../../types';

const ExperiencesForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [experience, setExperience] = useState<Experience>({
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
        responsibilities: [],
        location: '',
        achievements: []
    });

    useEffect(() => {
        if (id) {
            const fetchExperience = async () => {
                const data = await getExperienceById(id);
                setExperience(data);
            };
            fetchExperience();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setExperience({ ...experience, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (id) {
            await updateExperience(id, experience);
        } else {
            await createExperience(experience);
        }
        history.push('/experiences');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Company:</label>
                <input type="text" name="company" value={experience.company} onChange={handleChange} required />
            </div>
            <div>
                <label>Position:</label>
                <input type="text" name="position" value={experience.position} onChange={handleChange} required />
            </div>
            <div>
                <label>Start Date:</label>
                <input type="date" name="startDate" value={experience.startDate} onChange={handleChange} required />
            </div>
            <div>
                <label>End Date:</label>
                <input type="date" name="endDate" value={experience.endDate} onChange={handleChange} />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={experience.description} onChange={handleChange} required />
            </div>
            <div>
                <label>Responsibilities:</label>
                <textarea name="responsibilities" value={experience.responsibilities.join(', ')} onChange={handleChange} />
            </div>
            <div>
                <label>Location:</label>
                <input type="text" name="location" value={experience.location} onChange={handleChange} required />
            </div>
            <div>
                <label>Achievements:</label>
                <textarea name="achievements" value={experience.achievements.join(', ')} onChange={handleChange} />
            </div>
            <button type="submit">{id ? 'Update' : 'Create'} Experience</button>
        </form>
    );
};

export default ExperiencesForm;