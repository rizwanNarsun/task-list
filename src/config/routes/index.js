import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import BulkDelete from "../../pages/bulk-delete";
import CreateTask from "../../pages/create-task";
import ListTasks from "../../pages/list-tasks";

export default function Routes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Redirect to="/list-tasks" />}
          />
          <Route exact path="/bulk-delete" component={BulkDelete} />
          <Route exact path="/create-task" component={CreateTask} />
          <Route exact path="/list-tasks" component={ListTasks} />
        </Switch>
      </Router>
    </div>
  );
}
