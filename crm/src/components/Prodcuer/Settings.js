import React from 'react';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';


const Settings = () => {

    const navigate = useNavigate();

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">

                <SideBar navigate={navigate} />

                <div className='col-10 background-color-main-block'>
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">Настройки</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;