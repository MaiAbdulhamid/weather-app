import { Button, Checkbox, Grid, Input } from "@mui/material";
import React, { Component, useRef } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const AddTodoForm = (props: any) => {
  const inputRef = useRef() as any;
  const errorRef = useRef() as any;
  const handleSubmit = (e: any) => {
    console.log(inputRef.current.value);
    e.preventDefault();
    if (inputRef.current.value === "") {
      errorRef.current.classList.add("active");
      return null;
    }
    errorRef.current.classList.remove("active");

    props.addToList(inputRef.current.value);
    e.currentTarget.reset();
  };
  const handleChange = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Input
            placeholder="Title"
            inputProps={{
              "aria-label": "Title",
            }}
            onChange={handleChange}
            inputRef={inputRef}
            style={{ width: "90%" }}
            name="todo"
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            placeholder="Description"
            inputProps={{
              "aria-label": "Description",
            }}
            style={{ width: "90%" }}
            name="description"
          />
        </Grid>

        <Grid item xs={12}>
          <Checkbox name="checked" defaultChecked />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="createdAt"
            id="date"
            label="CreatedAt"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="finishedAt"
            id="date"
            label="FinishedAt"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="archiveAt"
            id="date"
            label="ArchiveAt"
            type="date"
            defaultValue="2017-05-24"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "10%" }}
          >
            Add
          </Button>
        </Grid>
      </Grid>

      <p ref={errorRef} className="error">
        Error, must enter a value!
      </p>
    </form>
  );
};

export default AddTodoForm;
