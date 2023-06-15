import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Counter from "./Counter";
import CounterContent from "./CounterContent";

function CounterContainer() {
  return (
    <>
      <CardContent
        sx={{
          width: 600,
          backgroundColor: "#fff",
          borderRadius: 2,
          height: "400px",
        }}
      >
        <Counter />
        <CounterContent />
      </CardContent>
    </>
  );
}

export default CounterContainer;
