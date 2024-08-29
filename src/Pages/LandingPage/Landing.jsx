import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import WholeSaleSectionMain from "./WholeSaleSection/WholeSaleSectionMain";
import Page from "../../components/page/page";
import FeaturedProductsMain from "./FeaturedProducts/FeaturedProductsMain";
import HeroSectionMain from "./HeroSection/HeroSectionMain";
import CustomPackagingMain from "./Custompackaging/CustomPackagingmain";
import CustomInspireMain from "./CustomInspire/CustomInspireMain";
import PremiumFinishMain from "./PremiumFinish/PremiumFinishMain";
import Header from "../Components/Header/Header";
import Header2 from "../Components/Header/Header2";


const Landing = () => {
  const [isScroll , setIsScroll] = useState(false);
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const is1200   = useMediaQuery('(max-width:1200px)'); 
  const isSeven70 = useMediaQuery ('(max-width:770px)')

  useEffect(()=>{
  const handleScroll = ()=>{
    if (window.scrollY > 100) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  };
    window.addEventListener('scroll', handleScroll);

    return ()=>{
      window.removeEventListener('scroll' , handleScroll);
    }
  
  },[])




  return (
    <>

<Page title='Moshlay Printing'>

<Box sx={{
  width:'100%',
  position:isScroll ? 'fixed' : 'absolute',
  top:0, left:0,
  display:'flex',
  justifyContent:'end',
   background:isScroll || isMedium ? 'white' : 'transparent',
  zIndex:10,
  top: isScroll  || isMedium ? 0 :30,
  boxShadow: isScroll ? '1px 1px 15px black' : '0'
}}>
{isScroll || isMedium ? <Header2/> : <Header/>}
</Box>

<HeroSectionMain/>
<WholeSaleSectionMain/>
<FeaturedProductsMain/>
<CustomPackagingMain/>
<CustomInspireMain/>
<PremiumFinishMain/>

</Page>
    </>
  );
};

export default Landing;
