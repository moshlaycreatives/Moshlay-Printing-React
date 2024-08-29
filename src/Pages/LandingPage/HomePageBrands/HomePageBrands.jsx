import { Box, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const HomePageBrands = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: 600 }}>
          Work With Official Brands
        </Typography>
        <Typography sx={{ fontSize: "1.2rem" }}>
          Get to know all about our services through various business clients.
        </Typography>
      </Box>

      <Box
        sx={{
          padding: "3rem 5%",
          display: "flex",
          alignItems: "center",
          // flexWrap: isSmall ? "wrap" : "no-wrap",
          flexWrap:'wrap',
          justifyContent: "center",
        }}
        gap={2}
      >
        <Card sx={{ padding:"1rem", }}>

<Box sx={{width:'10rem'}}>
<img src="/partner1.png" width={"100%"} />

</Box>
        </Card>

        <Card sx={{ padding:"1rem" }}>

<Box sx={{width:'10rem'}}>
<img src="/partner2.png" width={"100%"} />

</Box>
        </Card>
        <Card sx={{ padding:"1rem" }}>

<Box sx={{width:'10rem'}}>
<img src="/partner3.png" width={"100%"} />

</Box>
        </Card>

        <Card sx={{ padding:"1rem" }}>

<Box sx={{width:'10rem'}}>
<img src="/partner4.png" width={"100%"} />

</Box>
        </Card>
        <Card sx={{ padding:"1rem" }}>

<Box sx={{width:'10rem'}}>
<img src="/partner5.png" width={"100%"} />

</Box>
        </Card>


      </Box>
    </>
  );
};

export default HomePageBrands;
