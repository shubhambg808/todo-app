import "./ToDoForm.css";
import { useState } from "react";

const ToDoForm = (props) => {
  const [task, setTask] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const taskChangeHandler = (event) => {
    setTask(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setTaskDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (task.trim().length === 0) {
      return;
    }
    if (taskDate.trim().length === 0) {
      return;
    }

    const taskData = {
      titleTask: task,
      titleDate: new Date(taskDate),
      id: Math.random().toString(),
    };

    props.getItems(taskData);

    setTask("");
    setTaskDate("");
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className={"inputs"}>
          <div className={"input-items"}>
            <label>Task Title </label>
            <br />
            <input type={"text"} onChange={taskChangeHandler} value={task} />
          </div>

          <div className={"input-items"}>
            <label>Task Date </label>
            <br />
            <input
              type={"date"}
              onChange={dateChangeHandler}
              value={taskDate}
            />
          </div>
        </div>
        <div className={"button"}>
          <button type="submit"> Add Task</button>
        </div>
      </form>
    </div>
  );
};
export default ToDoForm;
