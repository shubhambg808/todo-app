import "./ToDoDate.css";
function ToDoDate(props) {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className="dateBlock">
      <div>
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>
    </div>
  );
}
export default ToDoDate;
