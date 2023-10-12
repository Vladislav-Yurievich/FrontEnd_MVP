import React, { useEffect, useState } from 'react';
import { studentService } from './service';
import { useFetching } from '../../hooks/useFetching';
import { titles } from './config';
import ScoresList from '../UI/ScoresList';
import { useParams } from 'react-router-dom';


const TEMP_COURSES = [
    { name: 'Дискретная математика', task_content_id: 591, score: 31, max_score: 80 },
    { name: 'Программирование', task_content_id: 491, score: 91, max_score: 100 },
    { name: 'Русский язык', task_content_id: 391, score: 72, max_score: 100 },
];


const BuisnessScoresList = ({ link }) => {
    const { id } = useParams();
    const [scores, setScores] = useState(null);

    const [getScores, loading, error] = useFetching(async () => {
        // const response = await studentService.getScores(id);
        // setScores(response.data);
        setScores(TEMP_COURSES);
    });

    useEffect(() => {
        getScores();
    }, []);


    return (
        <>
            {scores ? <ScoresList scores={scores} link={link} /> : titles.loading}
        </>
    );
}

export default BuisnessScoresList;