import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/user/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  editUser(username, email, password) {
    return axios.post(API_URL + 'edit', 
    {      
      username,
      email,
      password,
    });
  }

}

export default new UserService();