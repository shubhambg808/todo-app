import "./ToDoList.css";
import ToDoDate from "../toDoDate/ToDoDate";
import { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = (props) => {
  const [chek, setCheck] = useState(false);

  const deleteItem = () => {
    props.deleteItem(props.id);
  };

  const checkbox = () => {
    setCheck((prev) => !prev);
  };

  let classes = "list";
  let dueText = "";
  const d1 = new Date();

  if (d1 > props.date) {
    classes = "list_due";
    dueText = <p className="para">Due day is passed</p>;
  }

  return (
    <div className={classes}>
      <ToDoDate date={props.date} />
      <div>
        <div
          className={"list-desc"}
          style={{ textDecoration: chek ? "line-through" : "none" }}
        >
          {props.title}
        </div>
        {dueText}
      </div>
      <input type={"checkbox"} className={"checkbox"} onClick={checkbox} />
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};
export default ToDoList;
