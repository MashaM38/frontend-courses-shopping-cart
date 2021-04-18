import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8080'

const USER_API_URL = `${COURSE_API_URL}/users`
//const COURSE_API_URL = ``


class UserDataService {
    retrieveAllUsers() {
        return axios.get(`${USER_API_URL}`);
    }  
    
    retrieveUser(id) {
        return axios.get(`${USER_API_URL}/${id}`);
    }

    deleteUser(id) {        
        return axios.delete(`${USER_API_URL}/${id}`);
    }
}

export default new UserDataService;