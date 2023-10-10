import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import axios from 'axios';

const AddCourseGroup = () => {
    const [groupName, setGroupName] = useState('');
    const [courseName, setCourseName] = useState('');
    const [createdCourse, setCreatedCourse] = useState(null);
    const [searchedCourse, setSearchedCourse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const courseResponse = await axios.post(
                process.env.REACT_APP_API_URL + '/create-course',
                {
                    name: courseName,
                    description: {
                        items: [{}],
                    },
                    author_id: 1,
                }
            );

            console.log('Курс добавлен успешно', courseResponse.data);
            setCreatedCourse(courseResponse.data);

            const searchResponse = await axios.get(
                process.env.REACT_APP_API_URL + '/search-course-content',
                {
                    params: {
                        search_name: courseName,
                    },
                }
            );

            console.log('Информация о созданном курсе', searchResponse.data);
            setSearchedCourse(searchResponse.data);
        } catch (error) {
            console.error('Ошибка при создании курса', error);
        }
    };

    const handleAddToGroup = async (e) => {
        e.preventDefault();

        // Проверяем, что searchedCourse существует и имеет id
        if (searchedCourse && searchedCourse.id) {
            try {
                const addToGroupResponse = await axios.put(
                    process.env.REACT_APP_API_URL + '/add-base-courses-to-group',
                    {
                        group_name: groupName,
                        base_courses_ids: [searchedCourse.id],
                    }
                );

                console.log('Курс успешно добавлен в группу', addToGroupResponse.data);

                // Очищаем поля формы и сбрасываем значения
                setGroupName('');
            } catch (error) {
                console.error('Ошибка при добавлении курса в группу', error);
            }
        } else {
            console.error('Невозможно добавить курс в группу: отсутствует searchedCourse.id');
        }
    };
    // очищаю информацию о созданном курсе при изменении названия курса
    useEffect(() => {
        setCreatedCourse(null);
        setSearchedCourse(null);
    }, [courseName]);

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />
                <div className='col-10 background-color-main-block'>

                    <div className='sub__main__block'>


                        <p className="fw-normal fs-3">Создание курса / Добавление курса к группе</p>
                        <hr />

                        <div className="col-5">
                            <form className="form" onSubmit={handleSubmit}>
                                <input type="text" name="courseName" className="form-control" placeholder="Введите название курса" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
                                <br />
                                {createdCourse && (
                                    <div>
                                        <p>Созданный курс:</p>
                                        <p>ID: {createdCourse.id}</p>
                                        <p>Название: {createdCourse.name}</p>
                                    </div>
                                )}
                                {!createdCourse && (
                                    <div>
                                        <button type='submit' className='btn btn-secondary'>
                                            Создать курс
                                        </button>
                                        <br /><br />
                                    </div>
                                )}
                            </form>

                            {searchedCourse && searchedCourse.results && (
                                <div>

                                    <p>Информация о созданном курсе:</p>
                                    <p>ID: {searchedCourse.results[0].id}</p>
                                    <p>Название: {searchedCourse.results[0].name}</p>
                                </div>
                            )}

                            <form className="form" onSubmit={handleAddToGroup}>
                                <input type="text" name="groupName" className="form-control" placeholder="Введите название группы" value={groupName} onChange={(e) => setGroupName(e.target.value)} required />
                                <br />
                                <button type='submit' className='btn btn-secondary'>
                                    Добавить курс в группу
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourseGroup;
