import React, { useEffect, useState } from 'react';
import { fetchEducation, deleteEducation } from '../../api';
import { Education } from '../../types';

const EducationList: React.FC = () => {
    const [educationList, setEducationList] = useState<Education[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getEducation = async () => {
            const data = await fetchEducation();
            setEducationList(data);
            setLoading(false);
        };

        getEducation();
    }, []);

    const handleDelete = async (id: string) => {
        await deleteEducation(id);
        setEducationList(educationList.filter(edu => edu.id !== id));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Education List</h2>
            <ul>
                {educationList.map(edu => (
                    <li key={edu.id}>
                        <h3>{edu.degree} at {edu.institution}</h3>
                        <p>{edu.startDate} - {edu.endDate}</p>
                        <button onClick={() => handleDelete(edu.id)}>Delete</button>
                        {/* Add links to view/edit details here */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EducationList;