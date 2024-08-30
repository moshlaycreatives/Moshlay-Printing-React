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
import RequestInstant from "./RequestInstant/RequestInstant";
import HomePageSlider from "./HomePageSlider/HomePageSlider";
import Faqs from "./FAQS/FAQS";
import TestimonialMain from "./Testimonial/TestimonialMain";
import HomePageBrands from "./HomePageBrands/HomePageBrands";
import WhyChooseMain from "./WhyChooseUs/WhyChooseMain";
import SubHeader from "../Components/Header/SubHeader";


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
  position:'relative'
}}>

<Box sx={{
  width:'100%',
  position:isScroll ? 'sticky' : 'absolute',
  top:10, left:0,
  display:'flex',
  justifyContent:'end',
  // transition:'.5s',
   background:isScroll || isMedium ? 'white' : 'transparent',
  zIndex:10,
  // top: isScroll && isMedium ? 53  :50,

  top:isScroll ? (isSmall ? 48 : isMedium ? 55 : 50) : (isSmall ? 2 : isMedium ? 7 : 50 ),
boxShadow: isScroll ? '0 4px 8px rgba(0, 0, 0, 0.3)' : 'none',
  // boxShadow: isScroll ? '1px 1px 15px black' : '0'
}}>
{isScroll || isMedium ? <Header2/> : <Header/>}
</Box>
<HeroSectionMain/>
<WholeSaleSectionMain/>
<FeaturedProductsMain/>
<CustomPackagingMain/>
<CustomInspireMain/>
<PremiumFinishMain/>
<WhyChooseMain/>
<TestimonialMain/>
<Faqs/>

<RequestInstant/>
<HomePageBrands/>

<HomePageSlider/>
</Box>

</Page>
    </>
  );
};

export default Landing;
