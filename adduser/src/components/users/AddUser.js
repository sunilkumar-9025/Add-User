import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "./ErrorModal";
const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const formhandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid input and age (non-empty field)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age ( > 0)",
      });
      return;
    }

    const newUser = {
      id: Math.random(),
      name: username,
      age: age,
    };
    onAddUser(newUser);
    setUsername("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onError={errorHandler}
        />
      )}
      <Card className="input">
        <form onSubmit={formhandler}>
          <label>Username</label>
          <input type="text" value={username} onChange={usernameHandler} />
          <label>Age (Years)</label>
          <input type="number" value={age} onChange={ageHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
