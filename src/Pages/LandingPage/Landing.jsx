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

const Landing = () => {
  const theme = useTheme();




  return (
    <>

<Page title='Moshlay Printing'>

<HeroSectionMain/>
<WholeSaleSectionMain/>
<FeaturedProductsMain/>

</Page>
    </>
  );
};

export default Landing;
