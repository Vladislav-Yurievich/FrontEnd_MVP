import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (

        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to="/inspector" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">CRM TYUIUCON 3.0</span>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link to="/inspector" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Главная</span>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/inspector" className="nav-link align-middle px-0">
                            <i className="fs-4 bi bi-bar-chart"></i> <span className="ms-1 d-none d-sm-inline">Курсы</span>
                        </Link>
                    </li>
                </ul>

                <hr />

                <div className="dropdown pb-4">
                    <Link to="/inspector" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className='fs-4 bi bi-person-circle'></i>
                        <span className="d-none d-sm-inline mx-2">Inspector</span>
                    </Link>

                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><Link className="dropdown-item" to="/inspector">Профиль</Link></li>
                        <li><Link className="dropdown-item" to='/inspector'>Настройки</Link></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><Link className="dropdown-item" to='/inspector'>Выйти</Link></li>
                    </ul>
                </div>
            </div>
        </div>


    );
};

export default SideBar;