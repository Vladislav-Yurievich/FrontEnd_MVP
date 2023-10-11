import React from 'react';
import { Score } from './Score';


const ScoresList = ({ scores, link }) => {
    return (
        <div className="d-flex gap-4 flex-row flex-wrap">
            {scores.map((score) => (
                <Score
                    id={score.task_content_id}
                    task={score.name}
                    max_score={score.max_score}
                    min_score={score.score}
                    link={link}
                />
            ))}
        </div>
    );
}


export default ScoresList;