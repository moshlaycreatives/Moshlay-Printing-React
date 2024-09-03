import { Grid } from "@mui/material";
import React from "react";
import RequestForm from "./components/RequestForm";
import RequestInstantText from "./components/RequestInstantText";

const RequestInstant = () => {
  return (
    <>
      <Grid container sx={{ padding: "1rem 5%" }} spacing={3}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <RequestForm />
        </Grid>

        <Grid item lg={6} md={6} sm={12} xs={12}>
          <RequestInstantText />
        </Grid>
      </Grid>
    </>
  );
};

export default RequestInstant;
