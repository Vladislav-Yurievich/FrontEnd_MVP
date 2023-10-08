import React from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

const Inspector = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">

                <SideBar />

                <div className='col-10 background-color-main-block'>
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">Список моих курсов</p>
                        <div className="list-group">
                            <Link to="/inspector/AboutSource" className="list-group-item list-group-item-action">Программирование C++</Link>
                            <Link to="/inspector/AboutSource" className="list-group-item list-group-item-action">Программирование C#</Link>
                            <Link to="/inspector/AboutSource" className="list-group-item list-group-item-action">Дискретная математика</Link>
                            <Link to="/inspector/AboutSource" className="list-group-item list-group-item-action">Математический анализ</Link>
                            <Link to="/inspector/AboutSource" className="list-group-item list-group-item-action">Базы данных</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inspector;