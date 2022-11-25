import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onError} />
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <footer className="actions">
          <Button onClick={props.onError}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
