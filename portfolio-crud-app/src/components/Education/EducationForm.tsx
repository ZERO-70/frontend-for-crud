import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { createEducation, updateEducation, getEducationById } from '../../api';
import { Education } from '../../types';

const EducationForm: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [education, setEducation] = useState<Education>({
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        description: '',
        location: '',
        achievements: []
    });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (id) {
            setIsEditing(true);
            const fetchEducation = async () => {
                const data = await getEducationById(id);
                setEducation(data);
            };
            fetchEducation();
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEducation({ ...education, [name]: value });
    };

    const handleAchievementsChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newAchievements = [...education.achievements];
        newAchievements[index] = e.target.value;
        setEducation({ ...education, achievements: newAchievements });
    };

    const addAchievement = () => {
        setEducation({ ...education, achievements: [...education.achievements, ''] });
    };

    const removeAchievement = (index: number) => {
        const newAchievements = education.achievements.filter((_, i) => i !== index);
        setEducation({ ...education, achievements: newAchievements });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isEditing) {
            await updateEducation(id, education);
        } else {
            await createEducation(education);
        }
        history.push('/education');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="institution" value={education.institution} onChange={handleChange} placeholder="Institution" required />
            <input type="text" name="degree" value={education.degree} onChange={handleChange} placeholder="Degree" required />
            <input type="text" name="field" value={education.field} onChange={handleChange} placeholder="Field" required />
            <input type="date" name="startDate" value={education.startDate} onChange={handleChange} required />
            <input type="date" name="endDate" value={education.endDate} onChange={handleChange} required />
            <textarea name="description" value={education.description} onChange={handleChange} placeholder="Description" required />
            <input type="text" name="location" value={education.location} onChange={handleChange} placeholder="Location" required />
            <h4>Achievements</h4>
            {education.achievements.map((achievement, index) => (
                <div key={index}>
                    <input type="text" value={achievement} onChange={(e) => handleAchievementsChange(e, index)} />
                    <button type="button" onClick={() => removeAchievement(index)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={addAchievement}>Add Achievement</button>
            <button type="submit">{isEditing ? 'Update' : 'Create'} Education</button>
        </form>
    );
};

export default EducationForm;