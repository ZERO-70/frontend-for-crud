import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getEducationById, deleteEducation } from '../../api';
import { Education } from '../../types';

const EducationDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const [education, setEducation] = React.useState<Education | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const fetchEducation = async () => {
            const data = await getEducationById(id);
            setEducation(data);
            setLoading(false);
        };
        fetchEducation();
    }, [id]);

    const handleDelete = async () => {
        await deleteEducation(id);
        history.push('/education');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!education) {
        return <div>Education entry not found.</div>;
    }

    return (
        <div>
            <h2>{education.degree} at {education.institution}</h2>
            <p>{education.field}</p>
            <p>{education.startDate} - {education.endDate}</p>
            <p>{education.description}</p>
            <p>Location: {education.location}</p>
            <h4>Achievements:</h4>
            <ul>
                {education.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
            <button onClick={() => history.push(`/education/edit/${id}`)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => history.push('/education')}>Back to List</button>
        </div>
    );
};

export default EducationDetail;