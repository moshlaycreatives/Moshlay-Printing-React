import { Gradient } from "@mui/icons-material";
import { Box, Button, Grid, Rating, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";

const HeroSectionMain = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box>
        <Grid container>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Box
              sx={{
                backgroundColor: "white",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src="/logo.png" alt="" />
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  border: "10px solid white",
                  display: "flex",
                  justifyContent: "end",
                  marginRight: "-5rem",
                }}
              >
                <img src="/heroimage.png" alt="" style={{ zIndex: 2 }} />
              </Box>
            </Box>
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={8}>
            <Box
              sx={{
                backgroundImage: "url(/herobg.png)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit: "cover",
                height: "90vh",
              }}
            >
              <Box
                sx={{
                  padding: "8% 5% 5% 10%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3.2rem",
                      lg: "3.8rem",
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
                      xs: "1.5rem",
                      sm: "1.8rem",
                      md: "2.2rem",
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
                    padding: "0.5rem 2rem",
                    color: "white",
                    textTransform: "none",
                    fontWeight: "400",
                    fontSize: "1.2rem",
                    borderRadius: "10px",
                    marginRight: { xs: "0rem", sm: "2rem", md: "2rem" },

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
                    padding: "0.5rem 2rem",
                    color: "black",
                    textTransform: "none",
                    fontWeight: "400",
                    fontSize: "1.2rem",
                    borderRadius: "10px",
                    marginTop: { xs: "2rem", sm: "0rem" },
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
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      // flexDirection:{xs:'column', md:'column', lg:'row'},
                      //  justifyContent:'center',
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <img src="/herostar.png" alt="" width={"45rem"} />
                    <Typography
                      sx={{
                        fontSize: "2.5rem",
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
                        fontSize: "1.2rem",
                        fontWeight: "400",
                        color: "white",
                        // fontStyle:'italic'
                        // fontFamily:'Montserrat'
                      }}
                    >
                      336 Reviews
                    </Typography>
                    <Rating value={5} readOnly sx={{ color: "#57adec" }} />
                  </Box>
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
                        xs: "2rem",
                        sm: "3rem",
                        md: "4rem",
                        lg: "5rem",
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
          marginTop:'-3rem', 
          // padding:'0% 10%',
          // backgroundImage:'linear-Gradient(to right, #57adec 0% 40%, white 40% 100%)',
        }}>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
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
    width: '7rem',
    height: '7rem',
    borderRadius: '50%', // Make the shape circular
    background: 'conic-gradient(white 0% 33%, #ffffff 33% 66%, #ffffff 66% 90%, #61c2f1 90% 100%)', // Apply the gradient to the background
    padding: '12px', // Space around the inner content to mimic border
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
        fontSize: '1.8rem'
      }}
    >
      95%
    </Typography>
  </Box>
        </Box>
        <Typography  sx={{
        color: 'white',
        fontWeight: '600',
        fontSize: '1.4rem', marginTop:'.5rem'
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
    width: '7rem',
    height: '7rem',
    borderRadius: '50%', // Make the shape circular
    background: 'conic-gradient(white 0% 33%, #ffffff 33% 66%, #ffffff 66% 90%, #61c2f1 90% 100%)', // Apply the gradient to the background
    padding: '12px', // Space around the inner content to mimic border
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
        fontSize: '1.8rem'
      }}
    >
      95%
    </Typography>
  </Box>
        </Box>
        <Typography  sx={{
        color: 'white',
        fontWeight: '600',
        fontSize: '1.4rem', marginTop:'.5rem'
      }}
        >Quality</Typography>
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
    width: '7rem',
    height: '7rem',
    borderRadius: '50%', // Make the shape circular
    background: 'conic-gradient(white 0% 33%, #ffffff 33% 66%, #ffffff 66% 90%, #61c2f1 90% 100%)', // Apply the gradient to the background
    padding: '12px', // Space around the inner content to mimic border
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
        fontSize: '1.8rem'
      }}
    >
      95%
    </Typography>
  </Box>
        </Box>
        <Typography  sx={{
        color: 'white',
        fontWeight: '600',
        fontSize: '1.4rem', marginTop:'.5rem'
      }}
        >Quality</Typography>
          </Box>

              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box sx={{
                display:'flex', 
                justifyContent:'space-around',
                 alignItems:'center',
                marginTop:'1rem',
                 height:'100%',
                 padding:isMedium ? '3% 10%' : '3% 10% 3% 3%',
                //  backgroundColor:'white'
              }}>
              <Box>
                <img src="/trustpilot.png" alt="" width={isSmall ? '140rem'  : isMedium ? '180rem' : '200rem'} />
              </Box>
              <Box>
                <img src="/google.png" alt=""  width={isSmall ? '140rem'  : isMedium ? '180rem' : '200rem'}/>
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
