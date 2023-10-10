import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteToken, fetchUserInfo } from '../../utils/Storage';

const SideBar = ({ navigate }) => {

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
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to="/producer" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">CRM TYUIUCON</span>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="/producer" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Главная</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/producer" className="nav-link align-middle px-0">
                            <i className="fs-4 bi bi-people"></i> <span className="ms-1 d-none d-sm-inline">Группы</span>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link to="/producer" className="nav-link align-middle px-0">
                            <i className="fs-4 bi bi-people"></i> <span className="ms-1 d-none d-sm-inline">Курсы</span>
                        </Link>
                    </li>

                    {/* <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Раскрой</span>
                        </a>
                        <ul className="collapse  nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/producer" className="nav-link px-0"> <span className="d-none d-sm-inline">Список</span> 1 </Link>
                            </li>
                            <li>
                                <Link to="/producer" className="nav-link px-0"> <span className="d-none d-sm-inline">Список</span> 2 </Link>
                            </li>
                        </ul>
                    </li> */}
                </ul>

                <hr />

                <div className="dropdown pb-4">
                    <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className='fs-4 bi bi-person-circle'></i>
                        <span className="d-none d-sm-inline mx-2">{userInfo.first_name}</span>
                    </Link>

                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><Link className="dropdown-item" to="/producer/profile">Профиль</Link></li>
                        <li><Link className="dropdown-item" to='/producer/settings'>Настройки</Link></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><Link className="dropdown-item" to='/' onClick={deleteToken}>Выйти</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
