import React, { useState } from "react";
import Header from "../../components/header";
import SC from "../../components/styledComponents";

export default function List() {
  const [tasks, setTasks] = useState();

  React.useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("tasks"));
    arr.length > 0 && setTasks(arr);
  }, []);

  return (
    <div>
      <Header show />
      {tasks?.map((t, i) => (
        <SC.List key={i}>{t.task}</SC.List>
      ))}
    </div>
  );
}
