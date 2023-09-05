import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/user/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  editUser(id, username, email) {
    return axios.post(API_URL + "edit", {
      id,
      username,
      email,
    }).then((response) => {
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      console.log(response.data);
      return response.data;
    });
  }
}

export default new UserService();
