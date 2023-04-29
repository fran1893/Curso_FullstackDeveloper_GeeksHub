import axios from "axios";
import { global } from "../_global/global";

const userService = {};

userService.getStudents = async (token) => {
  const config = {
    headers: {
      Authoriation: `Bearer ${token}`,
    },
  };

  return (await axios.get(global.BASE_URL + "/api/alumnos?page=1", config))
    .data;
};

export default userService;
