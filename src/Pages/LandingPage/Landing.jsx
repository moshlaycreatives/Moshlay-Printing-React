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
import React from "react";
import WholeSaleSectionMain from "./WholeSaleSection/WholeSaleSectionMain";
import Page from "../../components/page/page";
import FeaturedProductsMain from "./FeaturedProducts/FeaturedProductsMain";
import HeroSectionMain from "./HeroSection/HeroSectionMain";
import CustomPackagingMain from "./Custompackaging/CustomPackagingmain";
import CustomInspireMain from "./CustomInspire/CustomInspireMain";
import PremiumFinishMain from "./PremiumFinish/PremiumFinishMain";
import RequestInstant from "./RequestInstant/RequestInstant";
import HomePageSlider from "./HomePageSlider/HomePageSlider";


const Landing = () => {
  const theme = useTheme();




  return (
    <>

<Page title='Moshlay Printing'>

<HeroSectionMain/>
<WholeSaleSectionMain/>
<FeaturedProductsMain/>
<CustomPackagingMain/>
<CustomInspireMain/>
<PremiumFinishMain/>

<RequestInstant/>
<HomePageSlider/>

</Page>
    </>
  );
};

export default Landing;
