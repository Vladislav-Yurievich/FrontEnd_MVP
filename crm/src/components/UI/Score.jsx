import React from 'react';
import { Link } from 'react-router-dom';


export const Score = ({ task, max_score, min_score, link, id }) => {
    return (
        <div className="col-3" key={id}>
            <div className="card text-center">
                <div className="card-header">
                    {task}
                </div>

                <Link className='btn btn-ghost-secondary m-1' to={`/${link}/${id}`}>
                    <div className="card-body">
                        <h6 className="card-title">
                            {min_score} / {max_score}
                        </h6>
                    </div>
                </Link>

            </div>
        </div>
    );
}