import { Gradient } from "@mui/icons-material";
import { Box, Button, Grid, Rating, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const HeroSectionMain = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const is1500   = useMediaQuery('(max-width:1500px)');
  const is1200   = useMediaQuery('(max-width:1200px)');

  return (
    <>
      <Box>              
        <Grid container>
          <Grid item lg={3.5} md={2.5} sm={4} xs={4} sx={{
            display: isMedium ? 'none' : 'block',
          }}>
            <Box
              sx={{
                backgroundColor: "white",
                paddingLeft:'15%', paddingTop:'5%'
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src="/logo.png" alt="" style={{
                  width:is1200 ? '60%': '45%'
                }} />
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  border: "10px solid white",
                  display: "flex",
                  justifyContent: "end",
                  marginRight: "-5rem",
                  marginTop:is1200 ? '5rem ' : '0rem',
                }}
              >
                <img src="/heroimage.png" alt=""
                style={{
                  width: is1200 ?  "70%": is1500 ? '60%' : '65%',
                  zIndex: 2
                }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={8.5} md={9.5} sm={12} xs={12}>
            <Box
              sx={{
                backgroundImage: "url(/herobg.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",
                height:is1200 ? "auto" : "80vh",
              }}
            >
              <Box
                sx={{
                  padding:isMedium ?  "20% 10% 5% 10%" : is1200 ?  "15% 5% 10% 15% ": "10% 5% 5% 15%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.5rem",
                      sm: "2.5rem",
                      md: "3rem",
                      lg: "3.5rem",
                    },
                    fontWeight: "600",
                    color: "white",
                    marginBottom: "-.5rem",
                    // fontFamily:'Montserrat'
                  }}
                >
                  Custom Packaging
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.3rem",
                      sm: "1.8rem",
                      md: "2rem",
                      lg: "2.5rem",
                    },
                    fontWeight: "400",
                    color: "white",
                    fontStyle: "italic",
                    // fontFamily:'Montserrat'
                  }}
                >
                  Your customers will love
                </Typography>
                <br />
                {/* <br /> */}
                <Button
                  sx={{
                    backgroundColor: "#57adec",
                    padding: isSmall ? '0.2rem 1rem' : "0.5rem 2rem",
                    color: "white",
                    textTransform: "none",
                    fontWeight: "400",
                    fontSize: isSmall ? '1rem' : "1.2rem",
                    borderRadius: "10px",
                  marginRight:'1rem',

                    "&:hover": {
                      color: "black",
                      backgroundColor: "white",
                    },
                  }}
                >
                  Get A Quote
                </Button>
                <Button
                  sx={{
                    backgroundColor: "white",
                    padding: isSmall ? '0.2rem 1rem' : "0.5rem 2rem",
                    color: "black",
                    textTransform: "none",
                    fontWeight: "400",
                    fontSize: isSmall ? '1rem' : "1.2rem",
                    borderRadius: "10px",
                    // marginTop: isSmall ? '.5rem' : '',
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#57adec",
                    },
                  }}
                >
                  Contact Sales
                </Button>

                <Box
                  sx={{
                    marginTop: "1rem",
                    marginBottom: "2rem",
                  }}
                >
                  {/* ===============================================================REVIEW SECTION=================================== */}
                  {/* <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      // flexDirection:{ sm:'column', md:'column', lg:'row'},
                      //  justifyContent:'center',
                      // justifyContent:'center',
                      alignItems: "center",
                      gap: isSmall ? 1 :3,
                    }}
                  >
                    <img src="/herostar.png" alt="" width={isSmall ?  '25rem': isMedium ? '38rem':  "45rem"} />
                    <Typography
                      sx={{
                        fontSize:isSmall ? '1.3rem' : isMedium ? "2rem"  : "2.5rem",
                        fontWeight: "600",
                        color: "white",
                        // fontStyle:'italic'
                        // fontFamily:'Montserrat'
                      }}
                    >
                      4.9
                    </Typography>
                    <Typography
                      sx={{
                        fontSize:isSmall ? "1rem"  : "1.2rem",
                        fontWeight: "400",
                        color: "white",
                        // fontStyle:'italic'
                        // fontFamily:'Montserrat'
                      }}
                    >
                      336 Reviews
                    </Typography>
                    <Rating value={5} readOnly sx={{ color: "#57adec" }} />
                  </Box> */}

                  <Typography
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: "400",
                      color: "white",
                      // fontStyle:'italic'
                      // fontFamily:'Montserrat'
                    }}
                  >
                    We provide you the best packaging solutions with customized
                    printed box service.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "1.5rem",
                        sm: "2.5rem",
                        md: "3.1rem",
                        lg: "4rem",
                      },
                      fontWeight: "700",
                      color: "transparent",
                      WebkitTextStroke: " 1px #57adec",

                      // fontStyle:'italic'
                      // fontFamily:'Montserrat'
                    }}
                  >
                    MOSHLAY PRINTING
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* =======================================BOTTOM BAR============================================ */}
        <Box 
        sx={{
          marginTop: isMedium ?' 0rem' :  '-3rem', 
          // padding:'0% 10%',
          // backgroundImage:'linear-Gradient(to right, #57adec 0% 40%, white 40% 100%)',
        }}>
          <Grid container>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Box
                sx={{
                  display:'flex', 
                  flexWrap:'wrap',
                  justifyContent:'space-between',
                  backgroundColor: "#57adec",
                  padding: isMedium ? '3% 10%' : "3% 3% 3% 15%", 
                }}
              >
           {/* =====================================================CIRCLE ONE================================================ */}
          <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
          }}>
            <Box
  sx={{
    position: 'relative', // Relative positioning for the inner content
    width:isSmall ? '4.5rem' : is1200 ? '6rem' : '7rem',
    height:isSmall ? '4.5rem' : is1200 ? '6rem' : '7rem',
    borderRadius: '50%', // Make the shape circular
    background: 'conic-gradient(white 0% 33%, #ffffff 33% 66%, #ffffff 66% 90%, #61c2f1 90% 100%)', // Apply the gradient to the background
    padding: '10px', // Space around the inner content to mimic border
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
>
  <Box
    sx={{
      width: '100%',
      height: '100%',
      borderRadius: '50%', // Make sure inner content is also circular
      backgroundColor: '#57adec', // Color of the inner background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography
      sx={{
        color: 'white',
        fontWeight: '700',
        fontSize: isSmall ? '1.3rem' : isMedium ? '1.6rem' : '1.8rem'
      }}
    >
      95%
    </Typography>
  </Box>
        </Box>
        <Typography  sx={{
        color: 'white',
        fontWeight: '500',
        fontSize: isSmall ? "1.1rem" : isMedium ? "1.3rem" : '1.4rem',
         marginTop:'.5rem'
      }}
        >Quality</Typography>
          </Box>

        {/* =====================================================CIRCLE TWO================================================ */}
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
          }}>
            <Box
  sx={{
    position: 'relative', // Relative positioning for the inner content
    width:isSmall ? '4.5rem' : is1200 ? '6rem' : '7rem',
    height:isSmall ? '4.5rem' : is1200 ? '6rem' : '7rem',
    borderRadius: '50%', // Make the shape circular
    background: 'conic-gradient(white 0% 33%, #ffffff 33% 66%, #ffffff 66% 90%, #61c2f1 90% 100%)', // Apply the gradient to the background
    padding: '10px', // Space around the inner content to mimic border
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
>
  <Box
    sx={{
      width: '100%',
      height: '100%',
      borderRadius: '50%', // Make sure inner content is also circular
      backgroundColor: '#57adec', // Color of the inner background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography
      sx={{
        color: 'white',
        fontWeight: '700',
        fontSize: isSmall ? '1.3rem' : isMedium ? '1.6rem' : '1.8rem'
      }}
    >
      93%
    </Typography>
  </Box>
        </Box>
        <Typography  sx={{
        color: 'white',
        fontWeight: '500',
        fontSize: isSmall ? "1.1rem" : isMedium ? "1.3rem" : '1.4rem',
         marginTop:'.5rem'
      }}
        >Sustainable</Typography>
          </Box>


        {/* =====================================================CIRCLE THREE================================================ */}
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
          }}>
            <Box
  sx={{
    position: 'relative', // Relative positioning for the inner content
    width:isSmall ? '4.5rem' : is1200 ? '6rem' : '7rem',
    height:isSmall ? '4.5rem' : is1200 ? '6rem' : '7rem',
    borderRadius: '50%', // Make the shape circular
    background: 'conic-gradient(white 0% 33%, #ffffff 33% 66%, #ffffff 66% 90%, #61c2f1 90% 100%)', // Apply the gradient to the background
    padding: '10px', // Space around the inner content to mimic border
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
>
  <Box
    sx={{
      width: '100%',
      height: '100%',
      borderRadius: '50%', // Make sure inner content is also circular
      backgroundColor: '#57adec', // Color of the inner background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography
      sx={{
        color: 'white',
        fontWeight: '700',
        fontSize: isSmall ? '1.3rem' : isMedium ? '1.6rem' : '1.8rem'
      }}
    >
      90%
    </Typography>
  </Box>
        </Box>
        <Typography  sx={{
        color: 'white',
        fontWeight: '500',
        fontSize: isSmall ? "1.1rem" : isMedium ? "1.3rem" : '1.4rem',
         marginTop:'.5rem'
      }}
        >Design</Typography>
          </Box>


              </Box>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box sx={{
                display:'flex', 
                justifyContent:'space-around',
                 alignItems:'center',
                marginTop:'1rem',
                 height:'100%',
                 padding:isMedium ? '0% 10%' : '3% 10% 3% 3%',
                //  backgroundColor:'white'
              }}>
              <Box>
                <img src="/trustpilot.png" alt="" width={isSmall ?  "60%" : '80%'} />
              </Box>
              <Box>
                <img src="/google.png" alt=""  width={isSmall ?  "60%" : '80%'} />
              </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HeroSectionMain;
