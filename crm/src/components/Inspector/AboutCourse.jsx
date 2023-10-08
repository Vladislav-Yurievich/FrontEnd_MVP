import React from 'react'
import SideBar from './SideBar';

const AboutSource = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">

                <SideBar />

                <div className='col-10 background-color-main-block'>
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">Название выбранного курса</p>
                        <hr />

                        <p className="fw-normal fs-3">Задания курса</p>


                    </div>
                </div>

            </div>
        </div>
    );

}

export default AboutSource;


