import React from "react";
import Header from "../../components/header";
import { v4 } from "uuid";

import SC from "../../components/styledComponents";
import { withRouter } from "react-router-dom";

function Create({ history }) {
  const [task, setTask] = React.useState("");

  const handleSubmit = () => {
    const arr = JSON.parse(localStorage.getItem("tasks")) || [];
    const id = v4();
    if (task) {
      arr.push({ task: task, id: id });
      localStorage.setItem("tasks", JSON.stringify(arr));
      history.push("/");
    } else alert("Task can not be empty");
  };

  return (
    <div>
      <Header />
      <SC.Input
        placeholder="task to perform"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <SC.Button onClick={handleSubmit}>ADD</SC.Button>
    </div>
  );
}
export default withRouter(Create);
