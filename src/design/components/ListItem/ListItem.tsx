import React from "react";
import { Grid } from "@mui/material";
import EditTodo from "../EditTodo";
import Todo from "../Todo";

const ListItem = (props: any) => {
  const renderTodo = (key: any) => {
    if (props.list[key] == null) return null;
    if (props.list[key]["status"] === "active") {
      return (
        <Todo
          key={key}
          index={key}
          todo={props.list[key]["todo"]}
          deleteTodo={props.deleteTodo}
          updateTodo={props.updateTodo}
        />
      );
    } else if (props.list[key]["status"] === "editing") {
      return (
        <EditTodo
          key={key}
          index={key}
          todo={props.list[key]["todo"]}
          saveTodo={props.saveTodo}
        />
      );
    }
  };

    return (
      <Grid container>
        {Object.keys(props.list).map((key) => renderTodo(key))}
      </Grid>
    );

}

export default ListItem;
