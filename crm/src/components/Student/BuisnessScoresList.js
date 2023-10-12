import React, { useEffect, useState } from 'react';
import { studentService } from './service';
import { useFetching } from '../../hooks/useFetching';
import { titles } from './config';
import ScoresList from '../UI/ScoresList';
import { useParams } from 'react-router-dom';


const TEMP_COURSES = [
    { name: 'Анальные щекоталки', task_content_id: 591, score: 31, max_score: 61 },
    { name: 'Анальные прятки', task_content_id: 491, score: 311, max_score: 421 },
    { name: 'Анальные догонялки', task_content_id: 391, score: 312, max_score: 610 },
    { name: 'Анальные шептунчики', task_content_id: 291, score: 313, max_score: 613 },
    { name: 'Анальные гонки', task_content_id: 191, score: 314, max_score: 615 },
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