import React from "react";
import {
  Box,
  Button,
  Grid,
  Rating,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { IoIosCheckmarkCircleOutline, IoIosMedal } from "react-icons/io";

const TestimonialMain = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const is1500 = useMediaQuery("(max-width:1500px)");
  const is1200 = useMediaQuery("(max-width:1200px)");
  return (
    <>
    <Box sx={{
        backgroundImage:'url(testimonialhead.png)',
        backgroundPosition:'center', 
        backgroundSize:'cover',
        objectFit:'cover', padding:'5%'
    }}>
        <Typography
                sx={{
                  fontSize:isSmall ?  "2.7rem" : isMedium ? " 4rem": "5rem",
                  color: "transparent",
                  fontWeight: "600",
                  WebkitTextStroke:'2px #57adec',
                }} 
              >
                Testimonial
              </Typography>
        <Typography
                sx={{
                    fontSize:isSmall ?  "1.7rem" : isMedium ? " 2.5rem": "3.1rem",
                  color: "white",
                  fontWeight: "500",
                  marginTop: isSmall ? "-2.3rem": isMedium ?  '-3.4rem':'-4.2rem'
                }}
              >
                Our Client Said
              </Typography>
              <br />
              <Typography
                sx={{
                  fontSize:isSmall ? '0.9rem' : "1rem",
                  color: "white",
                  fontWeight: "400",
                  width: isMedium ?  " 100%":'45%'
                }}
              >
                Always a great experience with oxo packaging as its very high
                quality and quick shipping times. Mr. Zack made sure my design
                met my standards and Daniel White did a great job with making
                sure all is good before shipping out the packaging.
              </Typography>
    </Box>

      <Box
        sx={{
          padding:isMedium ? "0%" : '0% 5%', 
          marginTop:isMedium ? "0rem":"-12rem",
        }}
      >
        <Grid container>
          <Grid item lg={6} md={6} sm={12} xs={12} order={isMedium ? 2 : 1}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
                // marginTop: "1rem",
                height: "100%",
                padding:isMedium ? "1% 5%": "0%",
                //  padding:isMedium ? '0% 10%' : '3% 10% 3% 3%',
                //  backgroundColor:'white'
              }}
            >
              {/* <Box Width={'50%'}> */}
                <img
                  src="/trustpilot.png"
                  alt=""
                  width={ "30%"}
                />
              {/* </Box> */}
              <Typography>336 Reviews</Typography>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#242424",
                  textTransform: "none",
                  fontWeight: "400",
                  fontSize:isMedium ?  "0.8rem": is1200 ? '1rem': "1.1rem",
                  padding:is1200 ? "0.5rem 1rem": "0.5rem 1.5rem",
                  marginRight: isMedium ? "0rem" : is1200 ?'1rem' :'1rem',
                  "&:hover": {
                    background: "#57adec",
                  },
                }}
              >
                Write A Review
              </Button>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12} order={isMedium ? 1 : 2}>
            <Box
              sx={{
                backgroundColor: "#57adec",
                padding:'1.5rem'
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  readOnly
                  value={5}
                  sx={{
                    color: "white",
                    // background: "red",
                    fontSize:isSmall ? "1rem":'1.3rem',
                    "& .MuiRating-iconFilled": {
                        backgroundColor: "#4fa66f   ", // Background color for filled stars
                        borderRadius: "0%",    // Make the background color round
                        padding: "2px",         // Add padding inside each star
                        margin: "1.5px",        // Add margin to create a gap between stars
                      },
                      "& .MuiRating-iconEmpty": {
                        backgroundColor: "#ffffff", // Background color for empty stars
                        borderRadius: "50%",
                        padding: "2px",
                        margin: "0 4px",         // Add margin to create a gap between stars
                      },
                  }}
                />
                <IconButton sx={{ color: "white" }}>
                  <IoIosCheckmarkCircleOutline />{" "}
                  <span style={{ fontSize: "1rem", marginLeft: ".5rem" }}>
                    Verified
                  </span>
                </IconButton>
              </Box>
              <br />
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Always a great experience with oxo…
              </Typography>
              <br />
              <Typography
                sx={{
                  fontSize:isSmall ?  '0.9rem': "1rem",
                  color: "white",
                  fontWeight: "400",
                }}
              >
                Always a great experience with oxo packaging as its very high
                quality and quick shipping times. Mr. Zack made sure my design
                met my standards and Daniel White did a great job with making
                sure all is good before shipping out the packaging.
              </Typography>
              <Box sx={{
                display:'flex', 
                alignItems:'end',
                justifyContent:'space-between',
                 width:'100%'
                }}>
              <Typography
                sx={{
                  fontSize:isSmall ? "1.1rem" : "1.2rem",
                  color: "white",
                  fontWeight: "500", 
                }}
              >
                Trevor Sain <span style={{marginLeft:'2rem', fontSize:'1rem', fontWeight:400}}> 5 Years</span>
              </Typography>
             
              <Box sx={{
                // justifySelf:'end'
                textAlign:'end'
              }}>
                <img src="/testimonialqoute.png" alt="" width={isSmall ?  '50%':'100%'} />
              </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

      </Box>
    </>
  );
};

export default TestimonialMain;
