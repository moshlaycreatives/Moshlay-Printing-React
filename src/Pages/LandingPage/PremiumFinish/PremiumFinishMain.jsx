import React from 'react'
import { Box, Typography, useTheme, useMediaQuery, Grid } from '@mui/material'

const PremiumFinishMain = () => {


  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));


  

  return (
    <>
    <Box sx={{
        // backgroundImage: 'linear-gradient(to right, #1c2844, #1c2844)',
        // backgroundColor:'#cdeefb',
        width:'100%',
 
    }}>
     <Box sx={{
         backgroundImage:'url(appdevplatfomsmask.png)',
         backgroundPosition:'center',
         backgroundRepeat:'no-repeat',
         backgroundSize:'cover',
         padding:' 4rem 15%'
     }}>
     <Box sx={{
             display:'flex',
             flexDirection:'column',
             alignItems:'center'
             // justifyContent:'center'
         }}>
           <Typography
             sx={{
               fontSize: isSmall ? "1.5rem" : isMedium ? "2rem" : "2.5rem",
               fontWeight: 600,
               color: 'black',
               textAlign: "center",
             //   marginTop:'4rem',
              //  fontFamily: "montserrat",
             }}
           >
             {" "}
             Premium Finishes
           </Typography>
           <Typography
             sx={{
               fontSize: "1rem",
               fontWeight: 400,
               color: "#666666",
               textAlign: "center",
               width:isSmall ? '100%' : isMedium  ? '90%' : '70%',
             }}
           >
          Variety of finishing options to ensure spectacular looks and feel of custom boxes
           </Typography>
         </Box>
         <br /><br />
 
         {/* ================================================CARDS =============================================== */}
         <Box sx={{
         }}>
         <Grid container spacing={2} marginBottom={'10px'}>
         <Grid  item lg={4} md={4} sm={12} xs={12}>
             <Box sx={{
                height:'auto',
                position:'relative',
                width:'100%',
                // '&:hover .overlay': {
                //     opacity: 1, 
                //   }
               }}
               >
                 <img src="/premium1.png" alt=""  width={'100%'} height={'300rem'} />
                 <Box className="overlay" sx={{
                    position:'absolute',
                    // backgroundColor:'#00000073',
                    width:'100%',
                    height:'100%',
                    top:0,
                    left:0,
                    right:0, 
                    bottom:0,
                    display:'flex',
                    justifyContent:'center',
                     alignItems:'end',
                    //  padding:'4rem',
                     transition:'.5s',
                    //  opacity: 0, // Start with hidden opacity
                    //  transition: 'opacity 0.5s, background-color 0.5s',
                    //  '&:hover':{
                    //      visibility:'visible',
                       
                    //  }
                 }}>
                    <Typography 
                     sx={{
                        fontSize: "1.8rem",
                        fontWeight: 600,
                        color: "white",
                        textAlign: "center",
                        // width:isSmall ? '100%' : isMedium  ? '90%' : '70%',
                      }}> Retail Packing</Typography>
                 </Box>
               </Box>
             </Grid>
             <Grid  item lg={4} md={4} sm={12} xs={12}>
             <Box sx={{
                height:'auto',
                position:'relative',
                width:'100%',
                // '&:hover .overlay': {
                //     opacity: 1, 
                //   }
               }}
               >
                 <img src="/premium2.png" alt=""  width={'100%'} height={'300rem'} />
                 <Box className="overlay" sx={{
                    position:'absolute',
                    // backgroundColor:'#00000073',
                    width:'100%',
                    height:'100%',
                    top:0,
                    left:0,
                    right:0, 
                    bottom:0,
                    display:'flex',
                    justifyContent:'center',
                     alignItems:'end',
                    //  padding:'4rem',
                     transition:'.5s',
                    //  opacity: 0, // Start with hidden opacity
                    //  transition: 'opacity 0.5s, background-color 0.5s',
                    //  '&:hover':{
                    //      visibility:'visible',
                       
                    //  }
                 }}>
                    <Typography 
                     sx={{
                        fontSize: "1.8rem",
                        fontWeight: 600,
                        color: "white",
                        textAlign: "center",
                        // width:isSmall ? '100%' : isMedium  ? '90%' : '70%',
                      }}> Retail Packing</Typography>
                 </Box>
               </Box>
             </Grid>
             <Grid  item lg={4} md={4} sm={12} xs={12}>
             <Box sx={{
                height:'auto',
                position:'relative',
                width:'100%',
                // '&:hover .overlay': {
                //     opacity: 1, 
                //   }
               }}
               >
                 <img src="/premium3.png" alt=""  width={'100%'} height={'300rem'} />
                 <Box className="overlay" sx={{
                    position:'absolute',
                    // backgroundColor:'#00000073',
                    width:'100%',
                    height:'100%',
                    top:0,
                    left:0,
                    right:0, 
                    bottom:0,
                    display:'flex',
                    justifyContent:'center',
                     alignItems:'end',
                    //  padding:'4rem',
                     transition:'.5s',
                    //  opacity: 0, // Start with hidden opacity
                    //  transition: 'opacity 0.5s, background-color 0.5s',
                    //  '&:hover':{
                    //      visibility:'visible',
                       
                    //  }
                 }}>
                    <Typography 
                     sx={{
                        fontSize: "1.8rem",
                        fontWeight: 600,
                        color: "white",
                        textAlign: "center",
                        // width:isSmall ? '100%' : isMedium  ? '90%' : '70%',
                      }}> Retail Packing</Typography>
                 </Box>
               </Box>
             </Grid>
         </Grid>

         <Grid container spacing={2} marginBottom={'10px'}>
         <Grid  item lg={4} md={4} sm={12} xs={12}>
             <Box sx={{
                height:'auto',
                position:'relative',
                width:'100%',
                // '&:hover .overlay': {
                //     opacity: 1, 
                //   }
               }}
               >
                 <img src="/premium4.png" alt=""  width={'100%'} height={'300rem'} />
                 <Box className="overlay" sx={{
                    position:'absolute',
                    // backgroundColor:'#00000073',
                    width:'100%',
                    height:'100%',
                    top:0,
                    left:0,
                    right:0, 
                    bottom:0,
                    display:'flex',
                    justifyContent:'center',
                     alignItems:'end',
                    //  padding:'4rem',
                     transition:'.5s',
                    //  opacity: 0, // Start with hidden opacity
                    //  transition: 'opacity 0.5s, background-color 0.5s',
                    //  '&:hover':{
                    //      visibility:'visible',
                       
                    //  }
                 }}>
                    <Typography 
                     sx={{
                        fontSize: "1.8rem",
                        fontWeight: 600,
                        color: "white",
                        textAlign: "center",
                        // width:isSmall ? '100%' : isMedium  ? '90%' : '70%',
                      }}> Retail Packing</Typography>
                 </Box>
               </Box>
             </Grid>
             <Grid  item lg={4} md={4} sm={12} xs={12}>
             <Box sx={{
                height:'auto',
                position:'relative',
                width:'100%',
                // '&:hover .overlay': {
                //     opacity: 1, 
                //   }
               }}
               >
                 <img src="/premium5.png" alt=""  width={'100%'} height={'300rem'} />
                 <Box className="overlay" sx={{
                    position:'absolute',
                    // backgroundColor:'#00000073',
                    width:'100%',
                    height:'100%',
                    top:0,
                    left:0,
                    right:0, 
                    bottom:0,
                    display:'flex',
                    justifyContent:'center',
                     alignItems:'end',
                    //  padding:'4rem',
                     transition:'.5s',
                    //  opacity: 0, // Start with hidden opacity
                    //  transition: 'opacity 0.5s, background-color 0.5s',
                    //  '&:hover':{
                    //      visibility:'visible',
                       
                    //  }
                 }}>
                    <Typography 
                     sx={{
                        fontSize: "1.8rem",
                        fontWeight: 600,
                        color: "white",
                        textAlign: "center",
                        // width:isSmall ? '100%' : isMedium  ? '90%' : '70%',
                      }}> Retail Packing</Typography>
                 </Box>
               </Box>
             </Grid>
             <Grid  item lg={4} md={4} sm={12} xs={12}>
             <Box sx={{
                height:'auto',
                position:'relative',
                width:'100%',
                // '&:hover .overlay': {
                //     opacity: 1, 
                //   }
               }}
               >
                 <img src="/premium6.png" alt=""  width={'100%'} height={'300rem'} />
                 <Box className="overlay" sx={{
                    position:'absolute',
                    // backgroundColor:'#00000073',
                    width:'100%',
                    height:'100%',
                    top:0,
                    left:0,
                    right:0, 
                    bottom:0,
                    display:'flex',
                    justifyContent:'center',
                     alignItems:'end',
                    //  padding:'4rem',
                     transition:'.5s',
                    //  opacity: 0, // Start with hidden opacity
                    //  transition: 'opacity 0.5s, background-color 0.5s',
                    //  '&:hover':{
                    //      visibility:'visible',
                       
                    //  }
                 }}>
                    <Typography 
                     sx={{
                        fontSize: "1.8rem",
                        fontWeight: 600,
                        color: "white",
                        textAlign: "center",
                        // width:isSmall ? '100%' : isMedium  ? '90%' : '70%',
                      }}> Retail Packing</Typography>
                 </Box>
               </Box>
             </Grid>
         </Grid >
         </Box>
 
     </Box>
 
    </Box>
    </>
  )
}

export default PremiumFinishMain