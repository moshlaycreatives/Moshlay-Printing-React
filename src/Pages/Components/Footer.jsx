import {
  Box,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
  Link as MuiLink,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useLocation } from "react-router-dom";

import { MdOutlineMail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const theme = useTheme();

  return (
    <>
      <Box>
        <Box sx={{ padding: "3rem 5% 1rem 5%", backgroundColor: "#242424" }}>
          <Grid container spacing={5} alignItems={"start"}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box>
                <Link to="/" style={{ textDecoration: "none" }}>

                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        textDecoration: "none",
                        color: theme.palette.primary.main,
                        fontSize: "2rem",
                        fontWeight: 600,
                        marginRight: "0.6rem",
                      }}
                    >
                      Moshlay{" "}
                    </Typography>
                    <Typography
                      sx={{
                        textDecoration: "none",
                        color: "white",
                        fontSize: "2rem",
                        fontWeight: 600,
                      }}
                    >
                      {" "}
                      Printing
                    </Typography>
                  </Box>
                </Link>
              </Box>
              <Typography
                sx={{ fontSize: "1.2rem", marginTop: "1rem", color: "white" }}
              >
                We collaborate with people and brands.
                <br />
                Lets build something great together.
                <br />
                Signup for exclusive offers and updates!
              </Typography>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                  color: "white",
                }}
              >
                Information
                <Divider sx={{ color: "white" }} />
              </Typography>
              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Privacy and Security
                </MuiLink>
              </Typography>

              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  terms and Conditions
                </MuiLink>
              </Typography>

              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  About Us{" "}
                </MuiLink>
              </Typography>
              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Contact Us
                </MuiLink>
              </Typography>

              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Sitemap
                </MuiLink>
              </Typography>
              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Portfolio
                </MuiLink>
              </Typography>
            </Grid>

            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                  color: "white",
                }}
              >
                INDUSTRIES <Divider sx={{ color: "white" }} />
              </Typography>
              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Cosmatic Packging
                </MuiLink>
              </Typography>

              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Eco Friendly Packaging
                </MuiLink>
              </Typography>

              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Food Packaging
                </MuiLink>
              </Typography>
              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Gift Packaging
                </MuiLink>
              </Typography>

              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Luxury Packaging
                </MuiLink>
              </Typography>
              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  Retail Packaging
                </MuiLink>
              </Typography>
            </Grid>

            <Grid item lg={2} md={2} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                  color: "white",
                }}
              >
                CONTACT US <Divider sx={{ color: "white" }} />
              </Typography>
              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  <IoLocationSharp />
                  87 Rutter St, Walsall United Kingdom
                </MuiLink>
              </Typography>

              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  <MdLocalPhone /> 0800-208-8043
                </MuiLink>
              </Typography>

              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",

                  textTransform: "none",
                }}
              >
                <MuiLink
                  component={Link}
                  to="/"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  <MdOutlineMail /> sales@poppackaging.co.uk
                </MuiLink>
              </Typography>
            </Grid>
          </Grid>

          <br />
          <Grid container>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <TextField
                  fullWidth
                  placeholder="Enter your Email"
                  size="small"
                  sx={{
                    "& .MuiInputBase-root": {
                      border: "none",
                      padding: 0, // Set padding to 0
                      "&:hover": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused": {
                        boxShadow: "none",
                      },
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      display: "none",
                    },
                    borderRadius: "5px",
                    backgroundColor: "white",
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        sx={{
                          borderRadius: "5px",
                          backgroundColor: theme.palette.primary.main,
                          padding: "1.3rem 1rem",
                          color: "white",
                        }}
                      >
                        <Typography>Submit</Typography>
                      </InputAdornment>
                    ),
                    sx: {
                      "& input::placeholder": {
                        color: "grey",
                      },
                      padding: 0, // Ensure no padding for the input
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid lg={4} md={4} sm={12} xs={12}></Grid>
            <Grid lg={5} md={5} sm={12} xs={12}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ color: "white" }}>
                  SSL 100% Secure Transactions:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                  gap={1}
                >
                  <img src="/visaimage.png" alt="" />
                  <img src="/american.png" alt="" />
                  <img src="/mastercard.png" alt=" " />
                  <img src="/stripe.png" alt="" />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <br />

          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
              padding: "1rem",
            }}
          >
            <Typography sx={{ fontSize: "0.9rem", color: "white" }}>
              Copyright 2024. Moshlay Printing All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
