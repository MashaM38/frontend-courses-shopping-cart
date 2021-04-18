import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8080'

const USER_API_URL = `${COURSE_API_URL}/users`

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS,PATCH",
      "Access-Control-Allow-Credentials": true,
      'content-type': 'application/x-www-form-urlencoded',
    }
  };


class UserDataService {
    retrieveAllUsers() {
        return axios.get(`${USER_API_URL}`);
    }  
    
    retrieveUser(id) {
        return axios.get(`${USER_API_URL}/${id}`);
    }

    updateUser(user) {
        return axios.put(`${USER_API_URL}`, user);
    }

    createUser(user) {
        return axios.post(`${USER_API_URL}`, user);
    }

    deleteUser(id) {        
        return axios.delete(`${USER_API_URL}/${id}`);
    }
}

export default new UserDataService;