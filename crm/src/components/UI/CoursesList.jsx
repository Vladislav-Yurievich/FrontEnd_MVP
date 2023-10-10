import React from 'react';
import { Course } from './Course';


const CoursesList = ({ courses }) => {
    return (
        <div className="d-flex gap-4 flex-row flex-wrap">
            {courses.map((course) => (
                <Course
                    id={course.course_content_id}
                    name={course.course_content_name}
                />
            ))}
        </div>
    );
}


export default CoursesList;