import { Grid, Paper } from "@mui/material";
import {  useState } from "react";
import { Route, Routes } from "react-router";
import AddTodoForm from "../../../design/components/AddTodo";
import ListItem from "../../../design/components/ListItem";
import Weather from "./Weather";

const styles : any = {
  Paper: {
    padding: 20,
    margin: "auto",
    textAlign: "center",
    width: 500,
  },
};
const HomePage = () => {
  const [list, setList] = useState({});
  const addToList = (todo: any) => {
    let newList: any = { ...list };
    newList[`todo${Date.now()}` as any] = {
      todo: todo,
      status: "active",
    };

    setList(newList);
  };
  const deleteTodo = (key: any) => {
    let newList: any = { ...list };
    newList[key] = null;

    setList(newList);
  };
  const updateTodo = (key: any) => {
    let newList: any = { ...list };
    newList[key as any]["status"] = "editing";

    setList(newList);
  };
  const saveTodo = (key: any, todo: any) => {
    let newList: any = { ...list };
    newList[key as any] = {
      todo: todo,
      status: "active",
    };

    setList(newList);
  };

  return (
    <>
      <Grid container spacing={0}>
        <Weather />
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper elevation={2} style={styles.Paper}>
            <AddTodoForm addToList={addToList} />
          </Paper>
        </Grid>
        <Grid item xs={12} style={styles.Paper}>
          <ListItem
            deleteTodo={deleteTodo}
            list={list}
            updateTodo={updateTodo}
            saveTodo={saveTodo}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
