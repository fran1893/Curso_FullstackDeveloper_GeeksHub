import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import userService from "../../_services/userService";
import { UsersList, DataListTable } from "../../components";
import { dateFormat } from "../../_utils/date";

export default function Admin() {
  // HOOKS
  const [users, setUsers] = useState([]);
  const [usersPage, setUsersPage] = useState(1);
  const [usersCount, setUsersCount] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  const isAdmin = authState.userInfo.role == "admin";

  useEffect(() => {
    if (isAdmin) {
      getAllUsers(authState.userToken, usersPage);
    } else {
      navigate("/");
    }
  }, [usersPage]);

  // HANDLERS
  const handleUsersList = (e) => {
    const { page, userId } = e.currentTarget.dataset;

    handleUsersListPagination(page);
    handleSingleUser(userId);
  };

  const handleUsersListPagination = (page) => {
    switch (page) {
      case "next":
        return setUsersPage((page) => page + 1);
      case "prev":
        return setUsersPage((page) => page - 1);
      case "first":
        return setUsersPage(1);
      case "last":
        return setUsersPage(totalPages);
    }
  };

  const handleSingleUser = (id) => {
    console.log(id);
  };

  // FUNCTIONS
  const getAllUsers = async (token, page) => {
    try {
      const response = await userService.getAllUsers(token, page);

      setUsers(response.results);
      setUsersCount(response.info.total_results);
      setTotalPages(response.info.total_pages);
    } catch (error) {
      console.log(error);
    }
  };

  const newUsers = (users) =>
      users.map((user) => {
         user.alumno = user?.alumno ? "YES" : "NO";
         user.role = user?.role ? user.role.role : "undefined";
         user.fecha_nacimiento = dateFormat(user.fecha_nacimiento);
         return user;
      });

  // RETURN
  return (
    <>
      {isAdmin && (
        <>
          <h1>Admin</h1>
          <UsersList
            users={newUsers(users)}
            page={usersPage}
            count={usersCount}
            totalPages={totalPages}
            onChange={handleUsersList}
          />

          <br />

          <DataListTable
            data={users}
            title="Users"
            count={usersCount}
            headers={["ID", "Name", "Last name", "Email", "Birthday", "Role"]}
            attributes={[
              "id",
              "nombre",
              "apellidos",
              "email",
              "fecha_nacimiento",
              "role"
            ]}
            pagination={{
              page: usersPage,
              count: usersCount,
              totalPages: totalPages,
            }}
            onChange={handleUsersList}
          />
        </>
      )}
    </>
  );
}
