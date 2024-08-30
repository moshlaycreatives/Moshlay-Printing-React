import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";

const SubHeader = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        sx={{
          background: theme.palette.primary.main,
         position:'fixed', top:0,left:0, 
        zIndex:isMedium ?  9 : 11,
         width:'100%'
         


        }}
      >
      <Box sx={{
        padding:'1rem 5%', display:'flex',
        justifyContent:'space-between',
        
      }}>
      <Box sx={{
        display:'flex', 
        alignItems:'center'
       }}>
       <IoTimeOutline color="white" fontSize={isSmall ?'1rem' :'1.5rem'}  />
       <Typography sx={{
        fontSize: isSmall ? '0.7rem' : '1rem', 
        color:'white',
         fontWeight:400,
          marginLeft:'0.5rem'
       }}>Office Timings Mon - Fri 08:00 pm 5:00 am</Typography>
       </Box>

       <Box sx={{
                display:'flex',
                // justifyContent:'space-between',
                 gap: isSmall ? 1 : 2
              }}>
                    <a href="https://www.google.com/">
                <Typography variant="i" sx={{
                    color:'white',
                    border:'2px solid white',
                    padding: '.3rem .2rem 0rem .2rem',
                    borderRadius:'4px',
                    fontSize: isSmall ?  "0.6rem": '1rem', 
                     fontFamily: 'Montserrat',
                    transition:'0.3s',
                    '&:hover':{
                      color:'white',
                      border:'2px solid white',
                    }
                }}>
                <FaFacebookF />
                </Typography>
                    </a>

                    <a href="https://www.google.com/">
                <Typography variant="i" sx={{
                    color:'white',
                    border:'2px solid white',
                    padding:'.3rem .2rem 0rem .2rem',
                    borderRadius:'4px',
                    fontSize: isSmall ?  "0.6rem": '1rem', 
                    fontFamily: 'Montserrat',
                    transition:'0.3s',
                    '&:hover':{
                      color:'white',
                      border:'2px solid white',
                    }
                }}>
                <FaInstagram />
                </Typography>
                    </a>

                    <a href="https://www.google.com/">
                <Typography variant="i" sx={{
                    color:'white',
                    border:'2px solid white',
                    padding:'.3rem .2rem 0rem .2rem',
                    borderRadius:'4px',
                    fontSize: isSmall ?  "0.6rem": '1rem', 
                    fontFamily: 'Montserrat',
                    transition:'0.3s',
                    '&:hover':{
                      color:'white',
                      border:'2px solid white',
                    }
                }}>
                <FaXTwitter />
                </Typography>
                    </a>

                    <a href="https://www.google.com/">
                <Typography variant="i" sx={{
                    color:'white',
                    border:'2px solid white',
                    padding:'.3rem .2rem 0rem .2rem',
                    borderRadius:'4px',
                    fontSize: isSmall ?  "0.6rem": '1rem', 
                    fontFamily: 'Montserrat',
                    transition:'0.3s',
                    '&:hover':{
                      color:'white',
                      border:'2px solid white',
                    }
                }}>
                <FaThreads />
                </Typography>
                    </a>
              </Box>
      </Box>

      </Box>
    </>
  );
};

export default SubHeader;
