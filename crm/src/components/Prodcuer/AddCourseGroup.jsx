import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import axios from 'axios';

const AddCourseGroup = () => {
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedGroup, setSelectedGroup] = useState('');
    const [courseOptions, setCourseOptions] = useState([]);
    const [groupOptions, setGroupOptions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const courseResponse = await axios.get(process.env.REACT_APP_API_URL + `/search-course-content`, {
                    params: {
                        is_pattern: true,
                    },
                });

                const courseData = courseResponse.data.results;

                setCourseOptions(courseData);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        const fetchGroups = async () => {
            try {
                const groupResponse = await axios.get(process.env.REACT_APP_API_URL + `/groups`, {
                    params: {
                        search_name: searchTerm,
                    },
                });

                const groupData = groupResponse.data.results;

                setGroupOptions(groupData);
            } catch (error) {
                console.error('Error fetching groups:', error);
            }
        };

        fetchCourses();
        fetchGroups();
    }, [searchTerm]);

    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
    };

    const handleGroupChange = (event) => {
        setSelectedGroup(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const requestData = {
                group_name: selectedGroup,  // Сначала отправляю group_name
                base_courses_ids: [selectedCourse],  // Затем отправляем base_courses_ids
            };

            console.log('Отправляемые данные:', requestData);

            const response = await axios.put(process.env.REACT_APP_API_URL + '/add-base-courses-to-group', requestData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            console.log('Course added to group:', response.data);

            setSelectedCourse('');
            setSelectedGroup('');
        } catch (error) {
            console.error('Error adding course to group:', error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />
                <div className="col-10 background-color-main-block">
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">Создание курса / Добавление курса к группе</p>
                        <hr />
                        <div className="col-5">

                            <form onSubmit={handleFormSubmit}>

                                <select className='form-select' id="groupSelect" value={selectedGroup} onChange={handleGroupChange}>
                                    <option value="">Выберите группу</option>
                                    {groupOptions.map((group) => (
                                        <option key={group.name} value={group.name}>
                                            {group.name}
                                        </option>
                                    ))}
                                </select>
                                <br />

                                <select className='form-select' id="courseSelect" value={selectedCourse} onChange={handleCourseChange}>
                                    <option value="">Выберите курс</option>
                                    {courseOptions.map((course) => (
                                        <option key={course.id} value={course.id}>
                                            {course.name}
                                        </option>
                                    ))}
                                </select>

                                <br />
                                <button className='btn btn-outline-secondary' type="submit">Добавить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourseGroup;