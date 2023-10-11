import React, { useState } from 'react';
import SideBar from './SideBar';
import BuisnessScoresList from './BuisnessScoresList';


const CourseScore = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />

                <div className='col-10 background-color-main-block'>
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">
                            Оценки по предмету... TODO
                        </p>

                        <BuisnessScoresList />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CourseScore;