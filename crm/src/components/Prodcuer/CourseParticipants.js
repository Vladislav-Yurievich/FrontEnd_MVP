import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseParticipants = () => {
    const { groupName, course_content_id } = useParams();
    const [courseInfo, setCourseInfo] = useState({});
    const [groupInfo, setGroupInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                // получаю информацию о курсе по course_content_id
                const courseContentResponse = await axios.get(
                    process.env.REACT_APP_API_URL + `/search-course-content`
                );
                const courseContentData = courseContentResponse.data.results.find(
                    (course) => course.id === course_content_id
                );

                // получаю информацию о группе по groupName
                const groupResponse = await axios.get(
                    process.env.REACT_APP_API_URL + `/group?group_name=${groupName}`
                );
                const groupData = groupResponse.data;

                // устанавливаю инфу о курсе и группе
                setCourseInfo(courseContentData);
                setGroupInfo(groupData);
            } catch (error) {
                console.error('Ошибка при загрузке данных', error);
            }
        };

        fetchData();
    }, [groupName, course_content_id]);

    return (
        <div>
            <h2>Информация о курсе и группе</h2>
            <div>
                <h3>Курс: {courseInfo.name}</h3>
                <p>Описание: {courseInfo.description ? courseInfo.description.items.join(', ') : ''}</p>
                <p>Автор: {courseInfo.author_id}</p>
            </div>
            <div>
                <h3>Группа: {groupInfo.group_name}</h3>
                <p>Тип группы: {groupInfo.is_team ? 'Команда' : 'Индивидуальная'}</p>
                <h4>Курсы в группе:</h4>
                <ul>
                    {groupInfo.base_courses &&
                        groupInfo.base_courses.map((course, index) => (
                            <li key={index}>{course.course_content_name}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default CourseParticipants;
