import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8080'

const USER_API_URL = `${COURSE_API_URL}/users`


class UserCoursesDataService {
    retrieveAllUsers(userId) {
        return axios.get(`${USER_API_URL}/${userId}/courses`);
    }
}

export default new UserCoursesDataService;