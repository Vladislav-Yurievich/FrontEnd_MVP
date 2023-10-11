import { $authApi } from "../../../api"


class StudentService {
    getMe = async () => {
        const response = await $authApi.get('/me');
        return response;
    }

    getCourses = async () => {
        const response = await $authApi.get('/get-my-courses');
        return response;
    }

    //! пока нет обработки на беке
    getScores = async (course_content_id) => {
        const student_id = (await this.getMe()).data.id;
        const response = await $authApi.get(`/get-scores?student_id=${student_id}&course_content_id=${course_content_id}`);
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