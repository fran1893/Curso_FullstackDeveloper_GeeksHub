import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./containers/home/Home";
import UsersList from "./containers/users/users-list/UsersList";
import Login from "./containers/login/login";
import Register from "./containers/register/Register";
import UserProfile from "./containers/users/user-profile/userProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* Footer */}
      </BrowserRouter>
    </>
  );
}

export default App;
