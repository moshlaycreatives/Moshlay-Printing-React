import React from 'react'
import { Box, Typography, useTheme, useMediaQuery, Grid } from '@mui/material'

const CustomInspireMain = () => {


  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [

    {
      careerlogo: "custompack1.png",
      careertitle: "Native Mobile App Development",
      carrerdes:
        "Native apps are platform-specific, offering optimal performance and device access. However, they require separate development for each platform.",
    },
    {
      careerlogo: "custompack1.png",
      careertitle: "Hybrid Mobile App Development",
      carrerdes:
        "Hybrid apps combine native and web elements, enabling cross-platform deployment. They balance performance and efficiency but may have limitations compared to fully native apps.",
    },
    {
      careerlogo: "custompack1.png",
      careertitle: "Progressive Web App Development",
      carrerdes:
        "PWAs offer a native-like experience without requiring app store downloads. They use web technologies and can provide offline functionality and push notifications.",
    },
    {
      careerlogo: "custompack1.png",
      careertitle: "Wearables and Embedded Software",
      carrerdes:
        "These specialized apps focus on wearable devices and IoT systems. They often have unique requirements for power consumption, performance, and hardware interaction.",
    },
    {
      careerlogo: "custompack1.png",
      careertitle: "Progressive Web App Development",
      carrerdes:
        "PWAs offer a native-like experience without requiring app store downloads. They use web technologies and can provide offline functionality and push notifications.",
    },
    {
      careerlogo: "custompack1.png",
      careertitle: "Wearables and Embedded Software",
      carrerdes:
        "These specialized apps focus on wearable devices and IoT systems. They often have unique requirements for power consumption, performance, and hardware interaction.",
    },
  ];

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
         padding:' 4rem 5%'
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
             Custom Packaging That Inspires
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
             <Grid  item lg={6} md={6} sm={6} xs={12}>
               <Box sx={{
                height:'auto',
                position:'relative',
                width:'100%',
                '&:hover .overlay': { // Apply hover effect on the child when the parent is hovered
                    opacity: 1, // Make it fully visible on hover
                  }
               }}>
                 <img src="/custominspire1.png" alt="" width={'100%'} height={'auto'}/>
                 <Box className="overlay" sx={{
                    position:'absolute',
                    backgroundColor:'#00000073',
                    width:'100%',
                    height:'100%',
                    top:0,
                    left:0,
                    right:0,
                    bottom:0,
                    display:'flex',
                    justifyContent:'center',
                     alignItems:'center',
                     transition:'.5s',
                     opacity: 0, // Start with hidden opacity
                     transition: 'opacity 0.5s, background-color 0.5s',
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
             <Grid  item lg={6} md={6} sm={6} xs={12}>
             <Box sx={{
                height:'auto',
                position:'relative',
                width:'100%',
                '&:hover .overlay': { // Apply hover effect on the child when the parent is hovered
                    opacity: 1, // Make it fully visible on hover
                  }
               }}
               >
                 <img src="/custominspire2.png" alt=""  width={'100%'} height={'auto'} />
                 <Box className="overlay" sx={{
                    position:'absolute',
                    backgroundColor:'#00000073',
                    width:'100%',
                    height:'100%',
                    top:0,
                    left:0,
                    right:0,
                    bottom:0,
                    display:'flex',
                    justifyContent:'center',
                     alignItems:'center',
                     transition:'.5s',
                     opacity: 0, // Start with hidden opacity
                     transition: 'opacity 0.5s, background-color 0.5s',
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

         <Grid container spacing={2} >
             <Grid  item lg={4} md={6} sm={6} xs={12}>
               <Box sx={{
                height:'auto',
                position:'relative',
                width:'100%',
                '&:hover .overlay': { // Apply hover effect on the child when the parent is hovered
                    opacity: 1, // Make it fully visible on hover
                  }
               }}>
                 <img src="/custominspire3.png" alt="" width={'100%'} height={'auto'}/>
                 <Box className="overlay" sx={{
                    position:'absolute',
                    backgroundColor:'#00000073',
                    width:'100%',
                    height:'100%',
                    top:0,
                    left:0,
                    right:0,
                    bottom:0,
                    display:'flex',
                    justifyContent:'center',
                     alignItems:'center',
                     transition:'.5s',
                     opacity: 0, // Start with hidden opacity
                     transition: 'opacity 0.5s, background-color 0.5s',
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
             <Grid  item lg={4} md={6} sm={6} xs={12}>
             <Box sx={{
                height:'auto',
                position:'relative',
                width:'100%',
                '&:hover .overlay': { // Apply hover effect on the child when the parent is hovered
                    opacity: 1, // Make it fully visible on hover
                  }
               }}
               >
                 <img src="/custominspire4.png" alt=""  width={'100%'} height={'auto'} />
                 <Box className="overlay" sx={{
                    position:'absolute',
                    backgroundColor:'#00000073',
                    width:'100%',
                    height:'100%',
                    top:0,
                    left:0,
                    right:0,
                    bottom:0,
                    display:'flex',
                    justifyContent:'center',
                     alignItems:'center',
                     transition:'.5s',
                     opacity: 0, // Start with hidden opacity
                     transition: 'opacity 0.5s, background-color 0.5s',
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
             <Grid  item lg={4} md={6} sm={6} xs={12}>
             <Box sx={{
                height:'auto',
                position:'relative',
                width:'100%',
                '&:hover .overlay': { // Apply hover effect on the child when the parent is hovered
                    opacity: 1, // Make it fully visible on hover
                  }
               }}
               >
                 <img src="/custominspire5.png" alt=""  width={'100%'} height={'auto'} />
                 <Box className="overlay" sx={{
                    position:'absolute',
                    backgroundColor:'#00000073',
                    width:'100%',
                    height:'100%',
                    top:0,
                    left:0,
                    right:0,
                    bottom:0,
                    display:'flex',
                    justifyContent:'center',
                     alignItems:'center',
                     transition:'.5s',
                     opacity: 0, // Start with hidden opacity
                     transition: 'opacity 0.5s, background-color 0.5s',
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
         </Box>

     </Box>

    </Box>
    </>
  )
}

export default CustomInspireMain