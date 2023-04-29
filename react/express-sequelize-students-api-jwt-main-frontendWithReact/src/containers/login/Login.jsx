import React, { useEffect } from "react";
import authService from "../../_services/authService";
import tokenStorageService from "../../_services/tokenStorageService";

export default function Login() {
  const initialValues = {
    email: "admin@admin.com",
    password: "12345678",
  };

  // HOOKS
  useEffect(() => {
    login(initialValues);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      console.log(response);
      tokenStorageService.save(response.token)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label htmlFor="">Email</label> <br />
        <input type="text" name="email" /> <br />
        <label htmlFor="">Password</label> <br />
        <input type="text" name="password" />
      </form>
    </div>
  );
}
