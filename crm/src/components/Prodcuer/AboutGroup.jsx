import React from 'react';
import SideBar from './SideBar';
import { Link, useNavigate } from 'react-router-dom';

const AboutGroup = () => {

    const navigate = useNavigate();

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">

                <SideBar navigate={navigate} />

                <div className='col-10 background-color-main-block'>

                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">Настройки группы</p>
                        <hr />

                        <p className="fw-normal fs-4">Курсы</p>

                        <div className="d-flex gap-4 flex-row flex-wrap">

                            <div className="col-3">
                                <div className="card text-center">
                                    <div className="card-header">
                                        Курс 1
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Дискретная математика</h5>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <Link to='/producer/AboutGroup' className="btn btn-outline-secondary m-1">Участники</Link>
                                        <Link to='/producer/AboutGroup' className="btn btn-outline-secondary m-1">Удалить</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="card text-center">
                                    <div className="card-header">
                                        Курс 2
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Английский язык</h5>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <Link to='/producer/AboutGroup' className="btn btn-outline-secondary m-1">Участники</Link>
                                        <Link to='/producer/AboutGroup' className="btn btn-outline-secondary m-1">Удалить</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="card text-center">
                                    <div className="card-header">
                                        Курс
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Программирование C++</h5>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <Link to='/producer/AboutGroup' className="btn btn-outline-secondary m-1">Участники</Link>
                                        <Link to='/producer/AboutGroup' className="btn btn-outline-secondary m-1">Удалить</Link>
                                    </div>
                                </div>
                            </div>


                            <div className="col-3">
                                <div className="card text-center">
                                    <div className="card-header">
                                        Курс
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Программирование C#</h5>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <Link to='/producer/AboutGroup' className="btn btn-outline-secondary m-1">Участники</Link>
                                        <Link to='/producer/AboutGroup' className="btn btn-outline-secondary m-1">Удалить</Link>
                                    </div>
                                </div>
                            </div>


                            <div className="col-3">
                                <div className="card text-center">
                                    <div className="card-header">
                                        Курс
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Физическая культура</h5>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <Link to='/producer/AboutGroup' className="btn btn-outline-secondary m-1">Участники</Link>
                                        <Link to='/producer/AboutGroup' className="btn btn-outline-secondary m-1">Удалить</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div className="card text-center">
                                    <div className="card-header">
                                        Курс
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Математический анализ</h5>
                                    </div>
                                    <div className="card-footer text-muted">
                                        <Link to='/producer/AboutGroup' className="btn btn-outline-secondary m-1">Участники</Link>
                                        <Link to='/producer/AboutGroup' className="btn btn-outline-secondary m-1">Удалить</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-secondary mt-4">Добавить курс</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutGroup;