import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const FeaturedProductCard = () => {
  const data = [
    {
      image: "/featureimage.png",
      title: "Kraft Boxes",
    },
    {
      image: "/featureimage1.png",
      title: "Product Boxes",
    },
    {
      image: "/featureimage3.png",
      title: "Custom Boxes",
    },
    {
      image: "/featureimage4.png",
      title: "Mailer Boxes",
    },
    {
      image: "/featureimage5.png",
      title: "Luxury Boxes",
    },
    {
      image: "/featureimage6.png",
      title: "Cardboard Boxes",
    },
    {
      image: "/featureimage7.png",
      title: "Soap Boxes",
    },
    {
      image: "/featureimage8.png",
      title: "Candle Boxes",
    },
  ];

  return (
    <>
      <Box>
        <Grid container spacing={3}>
          {data.map((val, ind) => (
            <>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Box>
                  <img src={val.image} width={'100%'} style={{borderRadius:'30px 0px 30px 0px'}}/>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontSize: "1.1rem", marginRight: "1rem" }}>
                    {val.title}
                  </Typography>{" "}
                  <ArrowForwardIcon />
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default FeaturedProductCard;
