import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8080'

const USER_API_URL = `${COURSE_API_URL}/users`


class UserCoursesDataService {
    retrieveAllCourses(userId) {
        return axios.get(`${USER_API_URL}/${userId}/courses`);
    }

    async retrieveCourse(userId, courseId) {
        return axios.get(`${USER_API_URL}/${userId}/courses/${courseId}`);
    }
    
    deleteCourse(user_id, course_id) {
       console.log(course_id);
       return axios.delete(`${USER_API_URL}/${user_id}/courses`, {data: {courseId: course_id}})       
    }
}

export default new UserCoursesDataService;