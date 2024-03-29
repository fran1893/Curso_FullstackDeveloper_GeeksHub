import axios from "axios";
import { global } from "../_global/global";

const userService = {};

userService.getStudents = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (await axios.get(global.BASE_URL + "/api/alumnos?page=1", config))
    .data;
};

userService.getAllUsers = async (token, page = 1) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (await axios.get(global.BASE_URL + `/api/users?page=${page}`, config))
    .data;
};

export default userService;
