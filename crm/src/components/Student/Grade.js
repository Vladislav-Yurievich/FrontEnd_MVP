import React from 'react';
import SideBar from './SideBar';
import { titles } from './config';
import BuisnessCoursesList from './BuisnessCoursesList';


const Grade = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />

                <div className='col-10 background-color-main-block'>
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">
                            {titles.view_courses_scores}
                        </p>

                        <BuisnessCoursesList link={'student/grade/course'} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Grade;