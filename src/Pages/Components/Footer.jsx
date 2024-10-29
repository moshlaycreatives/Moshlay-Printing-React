import {
  Box,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
  Link as MuiLink,
  Button,
} from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

import { RiVisaLine } from "react-icons/ri";
import { RiMastercardLine } from "react-icons/ri";
import { GrAmex } from "react-icons/gr";
import { SiDiscover } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";

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
                sx={{ fontSize: "1.1rem", marginTop: "1rem", color: "white" }}
              >
                We collaborate with people <br/> and brands.
                <br />
                Lets build something great <br/> together.
                <br />
                Signup for exclusive offers <br/>and updates!
              </Typography>
            </Grid>
            <Grid item lg={2.5} md={2.5} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                  color: "white",
                }}
              >
                Information
                <Divider sx={{ color: "white" , backgroundColor:'#57adec', width:'5rem ', height:'1px'}} />
              </Typography>
              <Typography
                sx={{
                  color: "grey",
                  fontSize: "1rem",
                  marginTop: "0.5rem",

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
                  marginTop: "0.5rem",

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
                  marginTop: "0.5rem",

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
                  marginTop: "0.5rem",

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
                  marginTop: "0.5rem",

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
                  marginTop: "0.5rem",

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

            <Grid item lg={2.5} md={2.5} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                  color: "white",
                }}
              >
                INDUSTRIES
                <Divider sx={{ color: "white" , backgroundColor:'#57adec', width:'5rem ', height:'1px'}}  />
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
                  marginTop: "0.5rem",

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
                  marginTop: "0.5rem",

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
                  marginTop: "0.5rem",

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
                  marginTop: "0.5rem",

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
                    marginTop: "0.5rem",

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
                  marginTop: "0.5rem",

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

            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "0.9rem",
                  color: "white",
                }}
              >
                CONTACT US
                 <Divider sx={{ color: "white" , backgroundColor:'#57adec', width:'5rem ', height:'1px'}}  />
              </Typography>
              {/* <Typography
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
                    alignItems: "start",
                    display: "flex",

                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  <IoLocationSharp style={{ fontSize: "1.5rem" }} />
                  1601 Ware Bottom Spring Rd, Suite 210, Chester - VA 23836
                </MuiLink>
              </Typography> */}

              {/* <Typography
                sx={{
                  marginTop: "0.5rem",
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
                    display: "flex",
                    alignItems: "center",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  <MdLocalPhone style={{ fontSize: "1.2rem" }} /> 0800-208-8043
                </MuiLink>
              </Typography> */}

              <Typography
                sx={{
                  marginTop: "0.5rem",

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
                    display: "flex",
                    alignItems: "center",
                    "&:hover": { textDecoration: "none" },
                  }}
                >
                  <MdOutlineMail style={{ fontSize: "1.2rem" }} />{" "}
                  info@moshlayprinting.com
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
                        <Button
                          sx={{
                            color: "white",
                            textTransform: "none",
                            fontSize: "1rem",
                            fontWeight: 400,
                          }}
                        >
                          Submit
                        </Button>
                      </InputAdornment>
                    ),
                    sx: {
                      "& input::placeholder": {
                        color: "grey",
                      },
                      padding: 0,
                    },
                  }}
                />
              </Box>
            </Grid>
            <Grid lg={4.5} md={4.5} sm={12} xs={12}></Grid>
            <Grid lg={4.5} md={4.5} sm={12} xs={12}>
              <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
                <Typography sx={{ color: "white" }}>
                  SSL 100% Secure Transactions :
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                  gap={1}
                >
                  <RiVisaLine style={{ fontSize: "2rem", color: "white" }} />
                  <RiMastercardLine
                    style={{ fontSize: "1.5rem", color: "white" }}
                  />
                  <GrAmex style={{ fontSize: "3rem", color: "white" }} />
                  <SiDiscover style={{ fontSize: "3rem", color: "white" }} />
                  <FaCcPaypal style={{ fontSize: "2rem", color: "white" }} />
                  <BsBank style={{ fontSize: "1.5rem", color: "white" }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <br />

          <Divider sx={{ borderColor: "white" }} />
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
