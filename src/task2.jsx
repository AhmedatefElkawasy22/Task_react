import React, { useState } from "react";
import { loggedInMenu, nonLoggedInMenu } from "./utils/menu";

function HeaderMenu(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => {
    setLoggedIn(true);
    props.onLogin(true);
  };
  const logout = () => {
    setLoggedIn(false);
    props.onLogout(false);
  };
  return (
    <>
      <ul className="flex list-none gap-sm">
        {loggedIn &&
          loggedInMenu.map((item) => {
            return (
              <li
                key={item.name}
                className={item.action ? "active" : ""}
                onClick={item.name === "Logout" ? logout : undefined}
              >
                {item.name}
              </li>
            );
          })}
        {!loggedIn &&
          nonLoggedInMenu.map((item) => {
            return (
              <li
                key={item.name}
                className={item.action ? "active" : ""}
                onClick={item.name === "Login" ? login : undefined}
              >
                {item.name}
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default HeaderMenu;