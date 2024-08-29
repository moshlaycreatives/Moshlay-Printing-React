import React from 'react'
import { Box, Typography, useTheme, useMediaQuery, Grid } from '@mui/material'

const CustomPackagingMain = () => {


  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const listData = [

    {
      careerlogo: "custompack1.png",
      careertitle: "Starting From 100 Boxes",
      carrerdes:
        "Check our packaging quality first by ordering a minimum of 100 boxes.",
    },
    {
      careerlogo: "custompack2.png",
      careertitle: "High Quality Offset Printing",
      carrerdes:
        "Aesthetically showcase your brand identity by trusting our high-end printing.",
    },
    {
      careerlogo: "custompack3.png",
      careertitle: "Free Die & Plates Charge",
      carrerdes:
        "Make your product visually appealing by getting free die and plate designs.",
    },
    {
      careerlogo: "custompack4.png",
      careertitle: "Fast Turnaround 10-12 Business Days",
      carrerdes:
        "Win over your customers to deliver quality products using our customized packaging.",
    },
    {
      careerlogo: "custompack5.png",
      careertitle: "Competitive Pricing",
      carrerdes:
        "Get affordable custom packaging solutions without compromising quality.",
    },
    {
      careerlogo: "custompack6.png",
      careertitle: "Custom Design, Sizes & Style",
      carrerdes:
        "Improve your customer’s unboxing experience using our unique customized.",
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