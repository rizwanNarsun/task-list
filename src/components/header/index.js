import React from "react";
import { withRouter } from "react-router-dom";
import SC from "../styledComponents";

function Header({ show, del, tasks, history }) {
  const handleDelete = () => {
    if (del.length > 0) {
      const arr = tasks.filter((t) => {
        if (!del.includes(t.id)) return t;
      });
      localStorage.setItem("tasks", JSON.stringify(arr));
      history.push("/");
    } else alert("Nothing to delete");
  };
  return (
    <SC.Container>
      <SC.MyLink href="/list-tasks">list-tasks</SC.MyLink>
      <SC.MyLink href="/create-task">create-task</SC.MyLink>
      <SC.MyLink href="/bulk-delete">bulk-delete</SC.MyLink>
      {show && (
        <SC.CancelButton onClick={handleDelete}>
          <ion-icon name="close-outline" size="large"></ion-icon>
        </SC.CancelButton>
      )}
    </SC.Container>
  );
}

export default withRouter(Header);
