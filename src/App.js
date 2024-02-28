// import logo from './logo.svg';
// import './App.css';
// import App2 from "./app2";
// import App3 from "./app3";
// import App4 from "./app4";
// import App5 from "./app5";
// import Search from "./task";
// import Counter from "./counter";
// import { Calculator } from './calculator.jsx';
// import Appp from "./task1.jsx";
// import HeaderMenu from "./task2.jsx";
// import Todo from "./task3.jsx";

// function App() {
//   return (
//     <>
//       {/* <input type="text" placeholder='0' id="res"></input>
//       <App2/>
//       <App3/>
//       <App4/>
//       <App5 />
//       <div>
//       <button>0</button>
//       <button>π</button>
//       <button>x10<sup>x</sup></button>
//       <button>=</button>
//     </div>
//       <Task v1="react" v2 ="programming" ></Task>
//       <Task v1="node.js"  v2 ="football" ></Task>
//       <Task v1="angler"  v2 ="swamming" ></Task> */}
//        {/* <Counter />  */}
//       {/* <Calculator/> */}
//       {/* <Search/> */}
//       <Appp />
//       <HeaderMenu />
//       <Todo/>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo.jsx";
import HeaderMenu from "./components/HeaderMenu.jsx";
function App() {
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

export default App;
