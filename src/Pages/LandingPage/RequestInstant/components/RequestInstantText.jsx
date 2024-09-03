import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

const RequestInstantText = () => {
  return (
    <>
      <Box
        sx={{
          border: "2px solid grey",
          borderRadius: "20px",
          padding: "1.5rem",
          height: "47.7rem",
          overflow: "auto",
        }}
      >
        <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
          Custom Packaging Your Business Needs
        </Typography>
        <Typography sx={{ color: "grey" }}>
          We give you reliable and aesthetically pleasing personalised packaging
          solutions that increase sales and boost customer retention.
        </Typography>
        <br />
        <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
          Give Your Products Premium Touch by Using Our Premium Finishes
        </Typography>
        <Typography sx={{ color: "grey" }}>
          Invest in the right finish from our range of premium finishes for your
          product packaging to attract customers' attention:
        </Typography>

        <List
          sx={{
            listStyle: "disc",
            padding: 0,
            color: "grey",
            pl: 4,
            "& .MuiListItem-root": {
              paddingLeft: 0,
              paddingRight: 0,
              paddingBottom: 0,
              marginBottom: 0,
            },

            "& .MuiTypography-root": {
              marginBottom: -2,
            },
          }}
        >
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Debossing" />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Spot UV" />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Silver Foiling" />
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Embossing" />
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Holographic foiling" />
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Gold Foiling" />
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Gloss UV" />
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Matte Lamination" />
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Gloss Lamination" />
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Gloss AQ" />
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <ListItemText primary="Matte UV" />
          </ListItem>
        </List>

        <br />
        <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
          Why Your Business Needs OXO Packaging
        </Typography>
        <Typography sx={{ color: "grey" }}>
          We provide customised packaging services considering your business and
          your customer’s needs.
        </Typography>

        <br />
        <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
          Get Custom Boxes to Grow Your Business
        </Typography>
        <Typography sx={{ color: "grey" }}>
          Without compromising quality, we make customised packaging that is
          more cost-effective for your business.
        </Typography>

        <br />
        <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
          Differentiate Your Business
        </Typography>
        <Typography sx={{ color: "grey" }}>
          We demonstrate your business identity using your brand name, logo,
          tagline, and message in a visually pleasing way that makes your
          product look different in the market.
        </Typography>

        {/* ---------------------------need content to be add -------------------- */}

        <br />
        <Typography sx={{ fontSize: "1.2rem", fontWeight: 600 }}>
          Benefits from High-Grade Materials
        </Typography>

        <Typography sx={{ color: "grey" }}>
          High-grade materials are often more resistant to wear, tear, and
          damage, leading to longer-lasting product packing.
        </Typography>
        <br />
        <Typography sx={{ color: "grey" }}>
          These materials can enhance the performance of products, such as
          improving insulation, strength, or conductivity.
        </Typography>
        <br />
        <Typography sx={{ color: "grey" }}>
          High-grade materials often have a superior appearance, adding value
          and desirability to products.
        </Typography>
        <br />
        <Typography sx={{ color: "grey" }}>
          In certain circumstances, high-grade materials can improve safety by
          being more resistant to hazards like fire, chemicals, or impact.
        </Typography>
        <br />
        <Typography sx={{ color: "grey" }}>
          Products made with high-grade materials tend to retain their value
          over time, making them a better investment.
        </Typography>
      </Box>
    </>
  );
};

export default RequestInstantText;
