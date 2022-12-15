import { ArchiveOutlined, Build, ContactsOutlined, Delete } from "@mui/icons-material";
import { Grid, IconButton, Paper } from "@mui/material";
import { useRef, useState } from "react";

const styles = {
  Icon: {
    marginLeft: "auto",
  },
  Paper: {
    margin: "auto",
    padding: 10,
    display: "flex",
    alignItems: "center",
    marginTop: 10,
    width: 500,
  },
};

const Todo = (props: any) => {
  const [fade, setFade] = useState(false);

  const gridRef = useRef() as any;

  const deleteTodo = () => {
    const fade = true;
    setFade(fade);

    var promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(true);
      }, 500);
    });

    promise.then(() => props.deleteTodo(props.index));
    console.log(fade);
  };
  const archiveTodo = (e: any) => {
    console.log(e)
  };
  const gridClass = fade ? "fade-out" : "";

  return (
    <Grid
      xs={12}
      className={`${gridClass}`}
      item
      key={props.index}
      ref={gridRef}
    >
      <Paper elevation={2} style={styles.Paper}>
        <span>{props.todo}</span>
        <IconButton
          color="primary"
          aria-label="Edit"
          style={styles.Icon}
          onClick={() => props.updateTodo(props.index)}
        >
          <Build fontSize="small" />
        </IconButton>
        <IconButton color="secondary" aria-label="Delete" onClick={deleteTodo}>
          <Delete fontSize="small" />
        </IconButton>
        <IconButton color="secondary" aria-label="Delete" onClick={archiveTodo}>
          <ArchiveOutlined fontSize="small" />
        </IconButton>
      </Paper>
    </Grid>
  );
};

export default Todo;
