import { Grid, IconButton, Input, Paper } from "@mui/material";
import React, { Component, useRef } from "react";
import  { Save } from "@mui/icons-material";

const styles: any = {
  Icon: {
    marginLeft: "auto",
    width: "10%",
  },
  Paper: {
    margin: "auto",
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    width: 500,
  },
};

const EditTodo = (props: any) => {
  const inputRef = useRef() as any;

  return (
    <Grid xs={12} item key={props.index}>
      <Paper elevation={2} style={styles.Paper}>
        <form
          onSubmit={() => {
            props.saveTodo(props.index, inputRef?.current.value);
          }}
          style={{ display: "flex" }}
        >
          <Input
            style={{ width: "90%" }}
            defaultValue={props.todo}
            inputRef={inputRef}
          />
          <IconButton
            type="submit"
            color="primary"
            aria-label="Add"
            style={styles.Icon}
          >
            <Save fontSize="small" />
          </IconButton>
        </form>
      </Paper>
    </Grid>
  );
};

export default EditTodo;
