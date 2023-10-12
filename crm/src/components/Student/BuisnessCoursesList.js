import React, { useEffect, useState } from 'react';
import { studentService } from './service';
import { useFetching } from '../../hooks/useFetching';
import CoursesList from '../UI/CoursesList';
import { titles } from './config';


const TEMP_COURSES = [
    { course_content_id: 4, course_content_name: 'Программирование' },
    { course_content_id: 24, course_content_name: 'МАТЕМАТИКА' },
    { course_content_id: 7, course_content_name: 'АСОиУ-22 ИИПБ-22 Учебный план' },
    { course_content_id: 13, course_content_name: 'Тринацать' },
];

// почему назван бизнес, потому что элитный 

// крч проп линк это куда нас перекинет если мы нажмем на курс 
// допустим можем сделать чтобы перекидывало на /courses или /scores
const BuisnessCoursesList = ({ link }) => {
    const [courses, setCourses] = useState(null);

    const [getCourses, loadingCourses, errorCourses] = useFetching(async () => {
        const courses = await studentService.getCourses();
        setCourses(courses.data);
    });

    useEffect(() => {
        getCourses();
    }, []);


    return (
        <>
            {courses ? <CoursesList courses={courses} link={link} /> : titles.loading}
        </>
    );
}

export default BuisnessCoursesList;