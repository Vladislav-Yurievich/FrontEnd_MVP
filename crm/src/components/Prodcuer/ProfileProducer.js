import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import { useNavigate } from 'react-router-dom';
import { fetchUserInfo } from '../../utils/Storage';


const ProfileProducer = () => {

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        first_name: '',
        group: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const info = await fetchUserInfo();
                setUserInfo(info);
            } catch (error) {
                console.error('ошибка');
            }
        };

        fetchData();
    }, []);


    return (
        <div className="container-fluid">
            <div className="row flex-nowrap background-color-main-block">

                <SideBar navigate={navigate} />

                <div className='col-9'>
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">Профиль</p>

                        <p className='fw-normal'>First Name: {userInfo.first_name}</p>
                        <p className='fw-normal'>Last Name: {userInfo.last_name}</p>
                        <p className='fw-normal'>Middle Name: {userInfo.middle_name}</p>
                        <p className='fw-normal'>Email: {userInfo.email}</p>
                        <p className='fw-normal'>Group: {userInfo.group}</p>
                        <p className='fw-normal'>Role: {userInfo.role}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileProducer;