import React, { useState } from "react";
import ToDoItem from "./components/ToDoChart/ToDoItem";
import ToDoForm from "./components/toDoInputs/ToDoForm";

function App() {
  const [taskData, setTaskData] = useState([]);

  const formData = (data) => {
    setTaskData((prevTask) => {
      const updateTask = [...prevTask];
      updateTask.unshift(data);
      return updateTask;
    });
  };

  const deleteButton = (delId) => {
    setTaskData((prev) => {
      const updateTask = prev.filter((taskId) => taskId.id !== delId);
      return updateTask;
    });
  };

  let taskList = (
    <p style={{ textAlign: "center" }}>No task found. you can add one</p>
  );

  if (taskData.length > 0) {
    taskList = <ToDoItem items={taskData} deleteFunction={deleteButton} />;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>To Do App</h1>
      <ToDoForm getItems={formData} />
      {taskList}
    </div>
  );
}

export default App;
