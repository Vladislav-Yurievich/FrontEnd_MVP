import { $authApi } from "../../../api"


class StudentService {
    getCourses = async () => {
        const response = await $authApi.get('/get-my-courses');
        return response;
    }

    //! пока нет обработки на беке
    getScores = async () => {
        const response = await $authApi.get('/get-my-scores');
        return response;
    }
}

class CourseService {
    getCourse = async (id) => {
        const response = await $authApi.get(`/ ### ?course_content_id=${id}`);
        return response;
    }
}


export const courseService = new CourseService();
export const studentService = new StudentService();