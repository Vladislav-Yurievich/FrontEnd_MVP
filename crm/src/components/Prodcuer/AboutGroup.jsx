import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AboutGroup = () => {
    const navigate = useNavigate();
    const { groupName } = useParams();
    const [groupCourses, setGroupCourses] = useState([]);

    useEffect(() => {
        const fetchGroupCourses = async () => {
            try {
                const response = await axios.get(
                    process.env.REACT_APP_API_URL + `/group?group_name=${groupName}`
                );
                const data = response.data;
                if (data.base_courses && data.base_courses.length > 0) {
                    setGroupCourses(data.base_courses);
                } else {
                    console.log('null courses');
                }
            } catch (error) {
                console.error('Ошибка при загрузке курсов для группы', error);
            }
        };

        fetchGroupCourses();
    }, [groupName]);

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar navigate={navigate} />

                <div className='col-10 background-color-main-block'>

                    <div className="col-11">
                        <div className='sub__main__block'>
                            <p className="fw-normal fs-3">Настройки группы</p>
                            <hr />
                            <p className="fw-normal fs-4">Курсы</p>
                            {groupCourses.length === 0 ? (
                                <p>Список курсов - пуст</p>
                            ) : (
                                <div className="d-flex gap-4 flex-row flex-wrap">
                                    {groupCourses.map((course, index) => (
                                        <div className="col-3" key={index}>
                                            <div className="card text-center">
                                                <div className="card-header">
                                                    Курс {index + 1}
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">{course.course_content_name}</h5>
                                                </div>
                                                <div className="card-footer text-muted">
                                                    <Link to={`/producer/AboutGroup/${groupName}/participants/${course.course_content_id}`} className="btn btn-outline-secondary m-1" >
                                                        Участники
                                                    </Link>
                                                    <Link to={`/producer/AboutGroup/${groupName}/delete`} className="btn btn-outline-secondary m-1">Удалить</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutGroup;
