import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import { titles } from './config';
import BuisnessCoursesList from './BuisnessCoursesList';


const Student = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />

                <div className='col-10 background-color-main-block'>
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">
                            {titles.current_courses}
                        </p>

                        <BuisnessCoursesList link={'student/course'} />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Student;