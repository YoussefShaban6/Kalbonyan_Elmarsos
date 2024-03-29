import React from "react";
import classes from "./ErrorModel.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModel = (props) => {
  console.log(props);
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.type.title}</h2>
        </header>
        <div className={classes.content}>
          <div>{props.type.message}</div>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModel;
