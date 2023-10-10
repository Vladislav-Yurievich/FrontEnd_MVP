import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import { studentService } from './service';
import { useFetching } from '../../hooks/useFetching';
import CoursesList from '../UI/CoursesList';
import { titles } from './config';


const TEMP_COURSES = [
    { course_content_id: 4, course_content_name: 'Программирование в очке' },
    { course_content_id: 24, course_content_name: 'МАТЕМАТИКА в МАЙНКРАФТ' },
    { course_content_id: 12, course_content_name: 'Шахтерские переговоры в тоннелях!' },
    { course_content_id: 7, course_content_name: 'АСОиУ-22 ИИПБ-22 Учебный план' },
    { course_content_id: 456, course_content_name: 'Вязание шапочек и шарфиков' },
    { course_content_id: 90, course_content_name: 'Выращивание травки в домашних условиях' },
    { course_content_id: 13, course_content_name: 'Тринацать' },
];


const Student = () => {
    const [courses, setCourses] = useState(null);

    const [getCourses, loadingCourses, errorCourses] = useFetching(async () => {
        // пока выводятся временные значения, потому что у меня пустая бд :P
        // const courses = await studentService.getCourses();
        // console.log(courses.data);
        setCourses(TEMP_COURSES);
    });

    useEffect(() => {
        getCourses();
    }, []);


    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <SideBar />

                <div className='col-10 background-color-main-block'>
                    <div className='sub__main__block'>
                        <p className="fw-normal fs-3">
                            {titles.current_courses}
                        </p>

                        {courses ? <CoursesList courses={courses} /> : titles.loading}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Student;