import { useState } from "react";
import "./App.css";
import Todo from "./task3.jsx";
import HeaderMenu from "./task2.jsx";
function Appp() {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => {
    setLoggedIn(true);
  };
  const logout = () => {
    setLoggedIn(false);
  };
  return (
    <>
      <HeaderMenu onLogin={login} onLogout={logout} />
      <Todo canAdd={loggedIn} />
    </>
  );
}

export default Appp;