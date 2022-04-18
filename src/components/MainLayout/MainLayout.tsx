import React from "react";
import { Typography } from "@mui/material";
import CurrencyConverter from "../CurrencyConverter";
import { StMainLayout } from "../styled/common";

const MainLayout = () => (
  <StMainLayout maxWidth="xl" height="100vh" padding="30px 0">
    <Typography
      component="h1"
      color="#041c32"
      fontSize="50px"
      textAlign="center"
      data-testid="header-title"
      margin="0 0 30px"
    >
      Converter app
    </Typography>
    <CurrencyConverter />
  </StMainLayout>
);

export default MainLayout;
