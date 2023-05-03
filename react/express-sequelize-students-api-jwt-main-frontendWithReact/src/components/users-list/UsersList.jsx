import React from "react";
import "./UsersList.scss";

export default function UsersList({ users }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Birthday</th>
            <th>Student</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nombre}</td>
              <td>{user.apellidos}</td>
              <td>{user.email}</td>
              <td>{user.fecha_nacimiento}</td>
              <td>{user?.alumno ? "YES" : "NO"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
