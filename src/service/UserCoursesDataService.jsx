import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8080'

const USER_API_URL = `${COURSE_API_URL}/users`


class UserCoursesDataService {
    retrieveAllCourses(userId) {
        return axios.get(`${USER_API_URL}/${userId}/courses`);
    }

    retrieveCourse(userId, courseId) {
        return axios.get(`${USER_API_URL}/${userId}/courses/${courseId}`);
    }
    
    deleteCourse(user_id, course_id) {
       console.log(course_id);
       return axios.delete(`${USER_API_URL}/${user_id}/courses`, {data: {courseId: course_id}})       
    }

    addCourseForUser(user_id, userCourseId) {
        console.log(userCourseId);
        return axios.post(`${USER_API_URL}/${user_id}/courses`, userCourseId)            
    }

}

export default new UserCoursesDataService;