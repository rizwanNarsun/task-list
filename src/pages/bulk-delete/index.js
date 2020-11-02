import React, { useState } from "react";
import Header from "../../components/header";
import SC from "../../components/styledComponents";

export default function Delete() {
  const [tasks, setTasks] = useState();
  const [tasksToDelete, setTasksToDelete] = useState([]);

  React.useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("tasks"));
    arr.length > 0 && setTasks(arr);
  }, []);

  const handleChange = (e, id) => {
    if (e.target.checked) {
      setTasksToDelete([...tasksToDelete, id]);
    }
  };

  return (
    <div>
      <Header del={tasksToDelete} tasks={tasks} show />
      {tasks?.map((t, i) => (
        <SC.DelList key={i}>
          {t.task}
          <input
            type="checkbox"
            onChange={(e) => handleChange(e, t.id)}
          ></input>
        </SC.DelList>
      ))}
    </div>
  );
}
