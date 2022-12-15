import { Button, Input } from "@mui/material";
import React, { Component, useRef } from "react";

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
      <Input
        placeholder="Todo"
        inputProps={{
          "aria-label": "Description",
        }}
        onChange={handleChange}
        inputRef={inputRef}
        style={{ width: "90%" }}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ width: "10%" }}
      >
        Add
      </Button>

      <p ref={errorRef} className="error">
        Error, must enter a value!
      </p>
    </form>
  );
};

export default AddTodoForm;
