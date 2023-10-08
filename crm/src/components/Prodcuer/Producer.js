import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserInfo } from '../../utils/Storage';
import SideBar from './SideBar';

const Producer = () => {
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        group: '',
    });

    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const info = await fetchUserInfo();
                setUserInfo(info);

                const response = await fetch('http://localhost:8000/groups');
                const data = await response.json();
                setGroups(data.results);
            } catch (error) {
                console.error('Ошибка', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar navigate={navigate} />
                <div className='col-10 background-color-main-block'>
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">Список групп</p>
                        <div className="list-group">

                            {groups.map((group, index) => (
                                <Link key={index} to={`/producer/AboutGroup?=${group.name}`} className="list-group-item list-group-item-action">
                                    {group.name}
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Producer;
