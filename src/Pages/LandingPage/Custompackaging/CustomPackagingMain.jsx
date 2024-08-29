import React from 'react'
import { Box, Typography, useTheme, useMediaQuery, Grid } from '@mui/material'

const CustomPackagingMain = () => {


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
        backgroundColor:'#cdeefb',
        width:'100%',

    }}>
     <Box sx={{
         backgroundImage:'url(appdevplatfomsmask.png)',
         backgroundPosition:'center',
         backgroundRepeat:'no-repeat',
         backgroundSize:'cover',
         padding:' 2rem 10%'
     }}>
     <Box sx={{
             display:'flex',
             flexDirection:'column',
             alignItems:'center'
             // justifyContent:'center'
         }}>
           <Typography
             sx={{
               fontSize: isSmall ? "1.8rem" : isMedium ? "2rem" : "2.5rem",
               fontWeight: 600,
               color: 'black',
               textAlign: "center",
             //   marginTop:'4rem',
              //  fontFamily: "montserrat",
             }}
           >
             {" "}
             One place to get your custom packaging
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
            OXO Packaging offers a variety of custom packaging solutions and project assistance with pricing and service you'll love.
           </Typography>
         </Box>
         <br /><br />

         {/* ================================================CARDS =============================================== */}
 <Grid container spacing={6}>
           {listData.map((row, id) => (
             <Grid key={id} item lg={4} md={6} sm={12} xs={12}>
               <Box
                 sx={{
                   height:'100%',
                   display: "flex",
                   flexDirection: "column",
                   alignItems: "center",
                   // justifyContent: "end",
                   // flexDirection: isSmall ? 'column' : 'row',
                   // padding:'1.5rem',
                   gap: 2,
                 }}
               >
                 <Box
                   sx={{
                     width: "100%",
                     display: "flex",
                     // justifyContent: "center",
                   }}
                 >
                   <img src={row.careerlogo} alt=""  />
                 </Box>

                 <Box
                   sx={{
                     display: "flex",
                     flexDirection: "column",
                     // alignItems: "center",
                     // justifyContent:'center'
                   }}
                 >
                   <Typography
                     sx={{
                       color: 'black',
                       fontSize: isSmall ? "1.1rem" : "1.2rem",
                      //  fontFamily: "Montserrat",
                       fontWeight: 600,
                       marginBottom:'.5rem'
                       // textAlign: "center",
                     }}
                   >
                     {row.careertitle}
                   </Typography>
                   {/* <br /> */}
                   <Typography
                     sx={{
                      color: "#666666",
                       fontSize: "1rem",
                      //  fontFamily: "Montserrat",
                       fontWeight: 400,
                       // textAlign: "center",
                     }}
                   >
                     {row.carrerdes}
                   </Typography>
                 </Box>
               </Box>
             </Grid>
           ))}
         </Grid>

     </Box>

    </Box>
    </>
  )
}

export default CustomPackagingMain