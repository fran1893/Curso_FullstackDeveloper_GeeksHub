import React, { useEffect, useState } from "react";
import tokenStorageService from "../../../_services/tokenStorageService";
import userService from "../../../_services/userService";
export default function UsersList() {
  const token = tokenStorageService.get();
  console.log(token);

  //hooks
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getStudents(token);
  }, []);

  const getStudents = async (token) => {
    try {
      const response = await userService.getStudents(token);
      setUsers(response.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user.id}>{user.usuario.nombre}</div>
      ))}
    </div>
  );
}
