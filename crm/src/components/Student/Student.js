import React from 'react';
import SideBar from './SideBar';

const Student = () => {
    return (

        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />

                <div className='col-10 background-color-main-block'>
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">Текущие курсы</p>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default Student;