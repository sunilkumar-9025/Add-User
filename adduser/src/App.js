import { useState } from "react";
import "./App.css";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

function App() {
  const [list, setList] = useState([]);

  const addUser = (newUser) => {
    setList((prev) => {
      return [newUser, ...prev];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UserList list={list} />
    </div>
  );
}

export default App;
