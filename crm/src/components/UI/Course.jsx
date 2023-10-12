import React from 'react';
import { Link } from 'react-router-dom';


export const Course = ({ name, link, id }) => {
    const headerText = ` Курс #${id}`;

    return (
        <div className="col-3" key={id}>
            <div className="card text-center">
                <div className="card-header">
                    {headerText}
                </div>

                <Link className='btn btn-ghost-secondary m-1' to={`/${link}/${id}`}>
                    <div className="card-body">
                        <h5 className="card-title">
                            {name}
                        </h5>
                    </div>
                </Link>
            </div>
        </div>
    );
}