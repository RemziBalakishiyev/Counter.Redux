import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
function CounterContent() {
  const counterVaue = useSelector((state) => state.value);
  return (
    <Stack>
      <Typography sx={{ fontSize: 80 }} color="text.secondary">
        {counterVaue}
      </Typography>
    </Stack>
  );
}

export default CounterContent;
