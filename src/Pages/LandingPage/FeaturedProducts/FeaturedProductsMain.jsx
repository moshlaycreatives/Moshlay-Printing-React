import { Box, Typography } from "@mui/material";
import React from "react";
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProductsMain = () => {
  return (
    <>
      <Box sx={{ padding: "0rem 10% 3rem 10%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
            Featured Products
          </Typography>
          <Typography sx={{ color: "grey", fontSize: "1.1rem" }}>
            With quick turnaround and low minimums, we’re a leading custom
            printed box manufacturer to wholesalers and retail brands for a
            reason.
          </Typography>
        </Box>
        <br />
        <br />

        <FeaturedProductCard />
      </Box>
    </>
  );
};

export default FeaturedProductsMain;
