import React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { useDispatch } from "react-redux";
function Counter() {
  const dispacth = useDispatch();

  const incrementValue = () => {
    dispacth({ type: "increment" });
  };

  const decrementValue = () => {
    dispacth({ type: "decrement" });
  };

  const incrementTen = () => {
    dispacth({ type: "incrementTen", count: 10 });
  };

  const reset = () => {
    dispacth({ type: "reset" });
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent={"space-evenly"}
      spacing={1}
    >
      <IconButton size="medium" onClick={incrementValue}>
        <AddCircleOutline
          color="secondary"
          sx={{ fontSize: "50px", border: "none" }}
        />
      </IconButton>
      <Button variant="contained" color="secondary" onClick={incrementTen}>
        +10
      </Button>
      <Button variant="contained" color="secondary" onClick={reset}>
        Reset
      </Button>
      <IconButton size="medium" onClick={decrementValue}>
        <RemoveCircleOutline
          color="secondary"
          sx={{ fontSize: "50px", border: "none" }}
        />
      </IconButton>
    </Stack>
  );
}

export default Counter;
