import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CardItem = ({ image, title, description }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: "35px 35px 0px 0px",

        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "450px",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "rgba(106, 103, 99, 0.7)",
          color: "#ffffff",
          padding: "1rem",
        }}
      >
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "#bfbfbf" }}
        >
          {description}
        </Typography>
        <br />
        <Box
          sx={{
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            right: 20,
            color: theme.palette.primary.main,
            padding: "0.2rem 1.5rem",
          }}
        >
          <ArrowForwardIcon />
        </Box>
      </Box>
    </Box>
  );
};

const WholeSaleCard = () => {
  const cards = [
    {
      image: "/WholeSale.png",
      title: "Wholesale Gift Boxes",
      description: "Easily create your personalized high-quality",
    },
    {
      image: "wholesale2.png",
      title: "Wholesale Cosmetic Boxes",
      description: "Easily create your personalized high-quality",
    },
    {
      image: "wholesale3.png",
      title: "Wholesale Retail Boxes",
      description: "Easily create your personalized high-quality",
    },
  ];

  return (
    <Grid container spacing={5}>
      {cards.map((card, index) => (
        <Grid item lg={4} md={6} sm={12} xs={12} key={index}>
          <CardItem
            image={card.image}
            title={card.title}
            description={card.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default WholeSaleCard;
