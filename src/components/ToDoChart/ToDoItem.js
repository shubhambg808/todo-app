import "./ToDoItem.css";
import ToDoList from "./ToDoList";
const ToDoItem = (props) => {
  return (
    <ul>
      {props.items.map((item, index) => (
        <ToDoList
          date={item.titleDate}
          title={item.titleTask}
          key={index}
          id={item.id}
          deleteItem={props.deleteFunction}
        />
      ))}
    </ul>
  );
};
export default ToDoItem;
