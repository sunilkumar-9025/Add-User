import React from "react";
import Card from "../UI/Card";
const UserList = ({ list }) => {
  return (
    <Card className="users">
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
