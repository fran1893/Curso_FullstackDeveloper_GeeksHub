import React, { useEffect, useState } from "react";
import authService from "../../_services/authService";
import { updateAuthStoreStateLogIn } from "../../features/authentication/updateAuthState";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import validator from "validator";

export default function Login() {
  const initialFormValues = {
    email: "admin@admin.com",
    password: "12345678",
  };

  // HOOKS
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(initialFormValues);

  const [loginError, setLoginError] = useState(null);

  const authState = useSelector((state) => state.auth);

  const isAdmin = authState.userInfo.role == "admin";

  useEffect(() => {
    if (authState.userToken) {
      isAdmin ? navigate("/admin") : navigate("/");
    }
  }, [authState.userToken]);

  // HANDLERS
  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      email: formValues.email,
      password: formValues.password,
    };
    if (
      validator.isEmail(credentials.email) &&
      validator.isByteLength(credentials.password, { min: 8, max: undefined })  // TODO agregar mensaje en caso de que no ponga bien los datos
    ) {
      login(credentials);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value, //key: value
    });
  };

  // FUNCTIONS
  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      console.log(response);
      const token = response.token;
      setLoginError(null);
      updateAuthStoreStateLogIn(token);
    } catch (error) {
      console.log(error);
      setLoginError(error.response.data.message);
    }
  };

  // RETURN
  return (
    <div>
      <h1>Login</h1>
      {/* <pre style={{ textAlign: "left", width: "250px", margin: "auto" }}>
        {JSON.stringify(formValues, null, 2)}
      </pre> */}
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="">Email</label> <br />
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Password</label> <br />
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Send</button>
      </form>
      <br />
      {loginError && <p style={{ color: "red" }}>{loginError}</p>}
    </div>
  );
}
