import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

const WhyChooseMain = () => {
  const theme = useTheme();
const isSmall = useMediaQuery(theme.breakpoints.down('md'))
  const data = [
    {
      image: "/whychooseicon1.png",
      title: "Exclusive Discounts on Offer",
      desc: "Get best printing services with most affordable prices and wholesale rates on bulk orders",
    },

    {
      image: "/whychooseicon2.png",
      title: "Modern Design and Dimensions",
      desc: "Select the most suitable and valuable design requirements that include layout, style, size, color, and artwork",
    },
    {
      image: "/whychooseicon3.png",
      title: "Super-Fast Delivery",
      desc: "We take pride in ensuring fast turnaround and super-fast delivery service on all custom orders",
    },
    {
      image: "/whychooseicon4.png",
      title: "Impeccable Print Quality",
      desc: "We provide incredible and colorful print quality for your common and elaborate designs",
    },
    {
      image: "/whychooseicon5.png",
      title: "Distinctive Finishes",
      desc: "Get a Wide Assortment of Exclusive Finishes, Laminations, and Coating Under One Roof, One Click, and One Price",
    },
    {
      image: "/whychooseicon6.png",
      title: "Cost-effective Pricing",
      desc: "We offer most affordable price of custom packaging with wholesale rates not found anywhere else",
    },
    {
      image: "/whychooseicon7.png",
      title: "No Extra Charge",
      desc: "Get truly spectacular custom graphics and artwork without any extra costs.",
    },
    {
        image: "/whychooseicon8.png",
        title: "Robust & Functional Materials",
        desc: "We are well aware of CSR and use high-quality eco-friendly packaging materials to ensure a sustainable environment",
      },
  ];

  return (
    <>
      <Box sx={{padding: isSmall ? "3rem 0% 3rem 0rem" : '3rem 5% 3rem 0rem'}}>
        <Grid container>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            sx={{

            backgroundImage: "url(/whychoosebg.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "white",
              height:isSmall ? '50vh': "auto",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{paddingLeft:'5%', paddingTop:'3rem'}}>
              <Typography sx={{fontSize:'2rem', fontWeight:600}}>Why Choose Us</Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                padding: "2rem",
                width: isSmall ? "70% " :"50%",
                position: "absolute",
                bottom: 0,
              }}
            >
              <Typography>
                Custom Packaging Boxes with Logo Make Your Brand Speak Itself.
              </Typography>

              <Typography>
                The packaging industry is highly lucrative for product-selling
                businesses that can bring in enormous profits for the business.
                An appropriate type of product packaging is critical to keep.
              </Typography>
            </Box>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} sx={{paddingLeft:isSmall ? "0rem":'4rem', paddingTop:isSmall ? '3rem': "0rem"}}>
            {data.map((val, ind) => (
              <Box sx={{ marginTop: "0.4rem", padding:isSmall ? '0rem 10%' :'0rem' }}>
                <Box
                  sx={{
                    display: "flex",
                    marginBottom: "0.4rem",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <img src={val.image} width={"90%"} />
                  </Box>
                  <Typography sx={{ fontWeight: "600" }}>
                    {val.title}
                  </Typography>
                </Box>
                <Typography sx={{ marginBottom: "0.4rem" }}>
                  {val.desc}
                </Typography>
                <Divider />
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WhyChooseMain;
