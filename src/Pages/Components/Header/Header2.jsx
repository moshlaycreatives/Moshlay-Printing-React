// import React, { useState } from "react";
// import {
//   Avatar,
//   Box,
//   Button,
//   Drawer,
//   FormControl,
//   MenuItem,
//   Select,
//   Typography,
//   IconButton,
//   useTheme,
//   Menu,
//   useMediaQuery,
// } from "@mui/material";
// import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../store/actions/authActions";
// import { MdOutlineArrowDropDown } from "react-icons/md";
// import { MdOutlineMessage } from "react-icons/md";

// const Header = () => {


//   const [anchorSolutionEl, setAnchorSolutionEl] = useState(null);
//   const [anchorMarketingEl, setAnchorMarketingEl] = useState(null);

//   const openMenuSolution = Boolean(anchorSolutionEl);
//   const openMenuMarketing = Boolean(anchorMarketingEl);

 
//   const handleAnchorElClickSolution = (e) => {
//     setAnchorSolutionEl(e.currentTarget);
//   };
//   const handleAnchorElClickMarketing = (e) => {
//     setAnchorMarketingEl(e.currentTarget);
//   };

//   const handleAchorClose = ( setAnchorFn, path) => {
//     if (typeof setAnchorFn === handleAnchorElClickSolution) {
//       setAnchorFn(null);
//   } else {
//       console.error('setAnchorFn is not a function');
//   }
//   navigate(path);
//   };

//   const handleClickMenu = (path)=>{
//      navigate(path);
//   }

//   const location = useLocation();
//   const navigate = useNavigate();
//   const judge_check =
//     location.pathname.includes("judge-score-card") ||
//     location.pathname.includes("judge-login");

//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const theme = useTheme();
//   const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
//   const isMedium = useMediaQuery(theme.breakpoints.down("md"));

//   const handleDrawerOpen = () => {
//     setDrawerOpen(true);
//   };

//   // const handleLogin = () => {
//   //   navigate("/admin-login");
//   //   setDrawerOpen(false);
//   // };

//   const handleLogin = () => {
//     if (judge_check) {
//       navigate("/judge-login");
//     } else {
//       navigate("/admin-login");
//     }
//     setDrawerOpen(false);
//   };

//   const handleDrawerClose = () => {
//     setDrawerOpen(false);
//   };
//   const dispatch = useDispatch();

//   const handleMenuItemClick = (value) => {
//     if (value === "Logout") {
//       dispatch(logout());
//       dispatch({
//         type: "RESET_STATE",
//       });
//     }
//   };

//   const participantPageRegex = /^\/public-screen\/[^\/]+$/;
//   const participantRegisterPage = /^\/admin\/contest\/[^\/]+$/;
//   const publicResultPage = /^\/public-screen-result\/[^\/]+$/;

//   const currentPath = location.pathname;

//   const isHidden =
//     participantPageRegex.test(currentPath) ||
//     participantRegisterPage.test(currentPath) ||
//     publicResultPage.test(currentPath) ||
//     currentPath === "/public-screen-result" ||
//     currentPath === "/admin_side_screen1" ||
//     currentPath === "/admin_side_screen2" ||
//     currentPath === "/participant-registered";

//   if (isHidden) {
//     return null;
//   }

//   const auth = useSelector((state) => state?.admin?.isAuthenticated);
//   const username = useSelector((state) => state?.admin?.user?.name);

//   const handleAddEvent = () => {
//     navigate("/admin/welcome");
//   };


//   // const menuListRoutes= [
//   //   {routes : }
//   // ]

//   return (
//     <Box
//       sx={{
//         // backgroundColor: "white",
//         padding: "1% 10%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "sticky",
//         top: 0,
//         zIndex: 10000000,
//         // boxShadow: "1px 1px 1px black ",
//       }}
//     >
//       {/* ==============================================NAVBAR=========================== */}
//       <Box
//         sx={{
//           display: { xs: "none", sm: "flex" },
//           justifyContent: "space-between",
//           alignItems: "end",
//           gap:3,
//           color:'white',
//           width:'100%'
//         }}
//       >

//         <Box display={"flex"} justifyContent={"start"} width={'25%'}>
//           <img src="logo.svg" alt=""  style={{ maxWidth:isMedium ? '80px' : '100px  ' , height:"auto"}}/>
//         </Box>
//         <Box sx={{
//           display:'flex',
//           justifyContent:"center",
//           alignItems:'end',
//           gap:2,
//           width:'80%'
//         }}>
//         <Typography 
//         aria-controls="digital-solution"
//         aria-haspopup="true" 
//         aria-expanded={ openMenuSolution ? 'true' : undefined}
//         onClick={handleAnchorElClickSolution}
//         style={{cursor:'pointer', fontSize:isMedium ? ".8rem" : '1rem'}}
//         // display={"flex"} 
//         >
//           Digital Solution
//         </Typography>
//         <Typography sx={{
//             fontSize:'1.5rem',
//             marginLeft:"-1rem",
//             marginRight:'-1rem',
//             marginTop :'1rem',
//             display:'flex',
//             textAlign:'center',
//             color:theme.palette.primary.main
//           }}><MdOutlineArrowDropDown /></Typography>
//         {/* drop down list  */}
//         <Typography>
//           <Menu id="digital-solution" anchorEl={anchorSolutionEl} open={openMenuSolution} onClose={handleAchorClose}>
//             <MenuItem onClick={()=> handleAchorClose(setAnchorSolutionEl, 'about-section')}> Example 1</MenuItem>
//             <MenuItem onClick={()=>handleAchorClose( setAnchorMarketingEl, 'contact-section')}>  Example 2</MenuItem>
//           </Menu>
//         </Typography>
//         <Typography
//         aria-controls="digital-marketing"
//         aria-haspopup="true" 
//         aria-expanded={ openMenuMarketing ? 'true' : undefined}
//         onClick={handleAnchorElClickMarketing}
//         style={{cursor:'pointer', fontSize:isMedium ? ".8rem" : '1rem'}}>
//           Digital Marketing 
//         </Typography>
//         <Typography sx={{
//             fontSize:'1.5rem',
//             marginLeft:"-1rem",
//             marginTop :'.5rem',
//             marginRight:'-1rem',
//             textAlign:'center',
//             display:'flex',
//             color:theme.palette.primary.main
//           }}><MdOutlineArrowDropDown /></Typography>  
//         <Typography>
//         <Menu id="digital-marketing" anchorEl={anchorMarketingEl} open={openMenuMarketing} onClose={handleAchorClose}>
//             <MenuItem onClick={()=> handleAchorClose(setAnchorMarketingEl, 'about-section')}> Example 1</MenuItem>
//             <MenuItem onClick={()=>handleAchorClose( setAnchorMarketingEl, 'contact-section')}>  Example 2</MenuItem>
//           </Menu>
//         </Typography>
//         <Typography marginRight={'.5rem'} onClick={()=>(handleClickMenu('contact-section'))} sx={{ cursor:'pointer', fontSize:isMedium ? ".8rem" : '1rem'}} >
//           Company
//         </Typography>
//         <Typography marginRight={'.5rem'} onClick={()=>(handleClickMenu('contact-section'))} sx={{ cursor:'pointer', fontSize:isMedium ? ".8rem" : '1rem'}} >
//           Blog
//         </Typography>
//         <Typography marginRight={'.5rem'} onClick={()=>(handleClickMenu('contact-section'))} sx={{ cursor:'pointer', fontSize:isMedium ? ".8rem" : '1rem'}} >
//           Careers
//         </Typography>
//         <Typography onClick={()=>(handleClickMenu('contact-section'))} sx={{ cursor:'pointer', fontSize:isMedium ? ".8rem" : '1rem'}} >
//           Contact
//         </Typography>
//         </Box>

//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "end",
//             justifyContent:'end', 
//             width:'25%',
//             cursor: "pointer",
//             marginBottom:'-.5rem'
//           }}
//         >
//           <Button sx={{ fontSize: isMedium ? '.8rem' : '.9rem'}}>
//           <MdOutlineMessage style={{marginRight:'.5rem'}} /> contact
//           </Button>
//         </Box>
//       </Box>

//       {/* <=================================DRAWER ========================== */}
//       <Box sx={{ display: { xs: "flex", sm: "none" } }}>
//         <IconButton
//           onClick={handleDrawerOpen}
//           sx={{ padding: "10px", color: "white" }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Drawer
//           anchor="right"
//           open={drawerOpen}
//           onClose={handleDrawerClose}
//           sx={{ zIndex: 1300 }}
//         >
//           <Box sx={{ width: 250, padding: "20px" }}>
//             {/* <Box
//         sx={{
//           display: { xs: "none", sm: "flex" },
//           justifyContent: "center",
//           alignItems: "center",
//           gap:3,
//           color:'white'
//         }}
//       > */}

//             <Box
//               sx={{
//                 gap: 5,
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                 }}
//               >
//                 <Typography
//                   aria-controls="digital-solution"
//                   aria-haspopup="true"
//                   aria-expanded={openMenuSolution ? "true" : undefined}
//                   onClick={handleAnchorElClickSolution}
//                   style={{ cursor: "pointer" }}
//                   // display={"flex"}
//                 >
//                   Digital Solution
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "1.5rem",
//                     // marginLeft:"-1.5rem",
//                     // marginTop :'.5rem',
//                     textAlign: "center",
//                     color: theme.palette.primary.main,
//                   }}
//                 >
//                   <MdOutlineArrowDropDown />
//                 </Typography>
//                 {/* drop down list  */}
//                 <Typography
//                   sx={{
//                     zIndex: 2000,
//                     position: "fixed",
//                   }}
//                 >
//                <Menu id="digital-solution" anchorEl={anchorSolutionEl} open={openMenuSolution} onClose={handleAchorClose}>
//             <MenuItem onClick={()=> handleAchorClose(setAnchorSolutionEl, 'about-section')}> Example 1</MenuItem>
//             <MenuItem onClick={()=>handleAchorClose( setAnchorMarketingEl, 'contact-section')}>  Example 2</MenuItem>
//           </Menu>
//                 </Typography>
//               </Box>

//               <Box
//                 sx={{
//                   display: "flex",
//                 }}
//               >
//                 <Typography
//                   aria-controls="digital-marketing"
//                   aria-haspopup="true"
//                   aria-expanded={openMenuMarketing ? "true" : undefined}
//                   onClick={handleAnchorElClickMarketing}
//                   style={{ cursor: "pointer" }}
//                 >
//                   Digital Marketing
//                 </Typography>
//                 <Typography
//                   sx={{
//                     fontSize: "1.5rem",
//                     // marginLeft:"-1.5rem",
//                     // marginTop :'.5rem',
//                     textAlign: "center",
//                     color: theme.palette.primary.main,
//                   }}
//                 >
//                   <MdOutlineArrowDropDown />
//                 </Typography>
//                 <Typography
//                   sx={{
//                     zIndex: 2000,
//                     postion: "fixed",
//                     // marginBottom:'4rem'
//                   }}
//                 >
//                   <Menu id="digital-marketing" anchorEl={anchorMarketingEl} open={openMenuMarketing} onClose={handleAchorClose}>
//             <MenuItem onClick={()=> handleAchorClose(setAnchorMarketingEl, 'about-section')}> Example 1</MenuItem>
//             <MenuItem onClick={()=>handleAchorClose( setAnchorMarketingEl, 'contact-section')}>  Example 2</MenuItem>
//           </Menu>
//                 </Typography>
//               </Box>

//               <Typography onClick={()=>(handleClickMenu('contact-section'))} cursor={'pointer'}>Company</Typography>
//               <Typography onClick={()=>(handleClickMenu('contact-section'))} cursor={'pointer'}>Blog</Typography>
//               <Typography onClick={()=>(handleClickMenu('contact-section'))} cursor={'pointer'}>Careers</Typography>
//               <Typography onClick={()=>(handleClickMenu('contact-section'))} cursor={'pointer'}> Contact</Typography>

//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",

//                   cursor: "pointer",
//                 }}
//               ></Box>
//             </Box>
//           </Box>
//         </Drawer>
//       </Box>
//     </Box>
//   );
// };

// export default Header;






// chnges ======================================================================================
// =================================================================================================
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  FormControl,
  MenuItem,
  Select,
  Typography,
  IconButton,
  useTheme,
  Menu,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../store/actions/authActions";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import SubHeader from "./SubHeader";

const Header2 = () => {
  const [anchorSolutionEl, setAnchorSolutionEl] = useState(null);
  const [anchorMarketingEl, setAnchorMarketingEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  

  const openMenuSolution = Boolean(anchorSolutionEl);
  const openMenuMarketing = Boolean(anchorMarketingEl);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSeven70 = useMediaQuery ('(max-width:770px)')
  const is1200 = useMediaQuery ('(max-width:1200px)')

  const judge_check =
    location.pathname.includes("judge-score-card") ||
    location.pathname.includes("judge-login");

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleLogin = () => {
    if (judge_check) {
      navigate("/judge-login");
    } else {
      navigate("/admin-login");
    }
    setDrawerOpen(false);
  };

  const handleAnchorElClickSolution = (e) => {
    setAnchorMarketingEl(null);
    setAnchorSolutionEl(openMenuSolution ? null : e.currentTarget);
  };

  const handleAnchorElClickMarketing = (e) => {
    setAnchorSolutionEl(null);
    setAnchorMarketingEl(openMenuMarketing ? null : e.currentTarget);
  };

  const handleAnchorClose = (setAnchorFn, path) => {
    setAnchorFn(null);
    navigate(path);
  };

  const handleClickMenu = (path) => {
    navigate(path);
  };

  const handleMenuItemClick = (value) => {
    if (value === "Logout") {
      dispatch(logout());
      dispatch({
        type: "RESET_STATE",
      });
    }
  };

  const participantPageRegex = /^\/public-screen\/[^\/]+$/;
  const participantRegisterPage = /^\/admin\/contest\/[^\/]+$/;
  const publicResultPage = /^\/public-screen-result\/[^\/]+$/;

  const currentPath = location.pathname;

  const isHidden =
    participantPageRegex.test(currentPath) ||
    participantRegisterPage.test(currentPath) ||
    publicResultPage.test(currentPath) ||
    currentPath === "/public-screen-result" ||
    currentPath === "/admin_side_screen1" ||
    currentPath === "/admin_side_screen2" ||
    currentPath === "/participant-registered";

  if (isHidden) {
    return null;
  }

  const auth = useSelector((state) => state?.admin?.isAuthenticated);
  const username = useSelector((state) => state?.admin?.user?.name);

  const handleAddEvent = () => {
    navigate("/admin/welcome");
  };

  return (
    <>
    <Box
      sx={{
        width:'100%',
        padding: "1% 5%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* ==============================================NAVBAR=========================== */}
      <Box
        sx={{
          display:  isSeven70 ? 'none' : 'flex' ,
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
          color: "white",
          width: "100%",
        }}
      >
        <Box display={"flex"} justifyContent={"start"} width={"25%"}>
          <img
            src="/logo.png"
            alt=""
            style={{ maxWidth: isMedium ? "100px" : "120px", height: "auto", cursor:'pointer' }}
            onClick={()=>{navigate("/")}}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: " center",
            // marginBottom:'1rem',
            gap: 2,
            width: "100%",
          }}
        >
          <Box onClick={handleAnchorElClickSolution} sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            cursor:'pointer'
          }} >

<Typography
            aria-controls="digital-solution"
            aria-haspopup="true"
            aria-expanded={openMenuSolution ? "true" : undefined}
            onClick={handleAnchorElClickSolution}
            style={{ cursor: "pointer", fontSize: isMedium ? ".8rem" : "1rem" }}
            sx={{
              color: 'Black',
              transition: 'color .5s',
              '&:hover': {
                color: theme => theme.palette.primary.main, 
              },
            }}
          >
            Box By Industry
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              // marginLeft: "-1rem",
              // marginRight: "-1rem",
            //   marginTop: "1rem",
              display: "flex",
              textAlign: "center",
              color: theme.palette.primary.main,
              marginRight:'.2rem'
            }}
          >
            <MdOutlineArrowDropDown />
          </Typography>
          </Box>
          
          <Menu
            id="digital-solution"
            anchorEl={anchorSolutionEl}
            open={openMenuSolution}
            onClose={() => setAnchorSolutionEl(null)}
          sx={{
            zIndex:1100
          }}
          >
            <MenuItem
              onClick={() =>
                handleAnchorClose(setAnchorSolutionEl, "/web-development")
              }
            >
              Web Development
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleAnchorClose(setAnchorSolutionEl, "/app-development")
              }
            >
              App Development
            </MenuItem>
          </Menu>

          <Box onClick={handleAnchorElClickMarketing} sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            cursor:'pointer'
          }} >
            <Typography
            aria-controls="digital-marketing"
            aria-haspopup="true"
            aria-expanded={openMenuMarketing ? "true" : undefined}
            onClick={handleAnchorElClickMarketing}
            style={{ cursor: "pointer", fontSize: isMedium ? ".8rem" : "1rem" }}
            sx={{
              color: 'Black',
              transition: 'color .5s',
              '&:hover': {
                color: theme => theme.palette.primary.main, 
              },
            }}
          >
            Shapes & Style
          </Typography>
          <Typography
            sx={{
              fontSize: "1.5rem",
              // marginLeft: "-1rem",
            //   marginTop: ".5rem",
              // marginRight: "-1rem",
              textAlign: "center",
              display: "flex",
              color: theme.palette.primary.main,
               marginRight:'.2rem'
            }}
          >
            <MdOutlineArrowDropDown />
          </Typography>
          </Box>
          
          <Menu
            id="digital-marketing"
            anchorEl={anchorMarketingEl}
            open={openMenuMarketing}
            onClose={() => setAnchorMarketingEl(null)}
            sx={{
              zIndex:1100
            }}
          >
            <MenuItem
              onClick={() =>
                handleAnchorClose(setAnchorMarketingEl, "/about")
              }
            >
              Example 1
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleAnchorClose(setAnchorMarketingEl, "/contact")
              }
            >
              Example 2
            </MenuItem>
          </Menu>

          <Typography
            marginRight={".5rem"}
            onClick={() => handleClickMenu("/about")}
            sx={{ cursor: "pointer", fontSize: isMedium ? ".8rem" : "1rem",
              color: 'Black',
              transition: 'color .5s',
              '&:hover': {
                color: theme => theme.palette.primary.main, } 
             }}
          >
            Printing Products
          </Typography>
          <Typography
            marginRight={".5rem"}
            onClick={() => handleClickMenu("/blogs")}
            sx={{ cursor: "pointer", fontSize: isMedium ? ".8rem" : "1rem",
              color: 'Black',
              transition: 'color .5s',
              '&:hover': {
                color: theme => theme.palette.primary.main, } 
             }}
          >
           Premium Finishes
          </Typography>
          <Typography
            marginRight={".5rem"}
            onClick={() => handleClickMenu("/careers")}
            sx={{ cursor: "pointer", fontSize: isMedium ? ".8rem" : "1rem",
              color: 'Black',
              transition: 'color .5s',
              '&:hover': {
                color: theme => theme.palette.primary.main, } 
             }}
          >
            Packaging News
          </Typography>

          {/* <Typography
            onClick={() => handleClickMenu("/contact-section")}
            sx={{ cursor: "pointer", fontSize: isMedium ? ".8rem" : "1rem" }}
          >
            Contact
          </Typography> */}
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "end",
            width: "25%",
            cursor: "pointer",
            // marginBottom: ".5rem",
          }}
          onClick={() => handleClickMenu("/contact")}
        >
          <Button variant="none" sx={{ fontSize: isMedium ? ".8rem" : "1rem", alignSelf:'start', color:'white', textTransform:'none',
             fontFamily:'Montserrat',
             transition: 'color .5s',
              '&:hover': {
                color: theme => theme.palette.primary.main, } 
             }} >
            <MdOutlineMessage style={{ marginRight: ".5rem", color:theme.palette.primary.main, fontSize:'1.4rem' }} /> Contact
          </Button>
        </Box> */}

      </Box>

      {/* <=================================DRAWER ========================== */}
      <Box sx={{ display:  isSeven70 ? 'flex' : 'none', width:'100%'}}>
       <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        // backgroundColor:'white'
               }}>
        <Box width={'50%'} sx={{display:'flex' , justifyContent:'start'}}
        onClick={()=>{navigate("/")}}
        >
          <img src="/logo.png" alt=""  width={'50%'}/>
        </Box>
        <IconButton onClick={handleDrawerOpen} sx={{ padding: "10px", color: "black", textAlign:'end',
          display: drawerOpen ? 'none' : 'flex'
         }}>
          <MenuIcon />
        </IconButton>
        </Box> 
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          sx={{ zIndex: 1200 }}
        >
          <Box sx={{ width: 250, padding: "20px" }}>
            <Box sx={{ gap: 5 }}>
              <Box sx={{ display: "flex" , marginTop:'.5rem'}}>

              <Box onClick={handleAnchorElClickSolution} sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            cursor:'pointer'
          }} >

<Typography
                  aria-controls="digital-solution"
                  aria-haspopup="true"
                  aria-expanded={openMenuSolution ? "true" : undefined}
                  onClick={handleAnchorElClickSolution}
                  style={{ cursor: "pointer" }}
                >
                  Box By Industry
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    textAlign: "center",
                    color: theme.palette.primary.main,
                  }}
                >
                  <MdOutlineArrowDropDown />
                </Typography>
                
          </Box>
                
                <Menu
                  id="digital-solution"
                  anchorEl={anchorSolutionEl}
                  open={openMenuSolution}
                  onClose={() => setAnchorSolutionEl(null)}
                  zIndex={1300}
                >
                  <MenuItem
                    onClick={() =>
                      handleAnchorClose(setAnchorSolutionEl, "/web-development")
                    }
                  >
                    Web development
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handleAnchorClose(setAnchorSolutionEl, "/App-Development")
                    }
                  >
                    App Development
                  </MenuItem>
                </Menu>
              </Box>
              <Divider sx={{
                  width:'100%',
                backgroundColor:theme.palette.primary.main
                }}/>


              <Box sx={{ display: "flex" , marginTop:'.5rem'}}>

              <Box onClick={handleAnchorElClickSolution} sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            cursor:'pointer'
          }} >

<Typography
                  aria-controls="digital-marketing"
                  aria-haspopup="true"
                  aria-expanded={openMenuMarketing ? "true" : undefined}
                  onClick={handleAnchorElClickMarketing}
                  style={{ cursor: "pointer" }}
                >
                 Shapes & Style
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    textAlign: "center",
                    color: theme.palette.primary.main,
                  }}
                >
                  <MdOutlineArrowDropDown />
                </Typography>
          </Box>
               
                <Menu
                  id="digital-marketing"
                  anchorEl={anchorMarketingEl}
                  open={openMenuMarketing}
                  onClose={() => setAnchorMarketingEl(null)}
                  zIndex={1300}
                >
                  <MenuItem
                    onClick={() =>
                      handleAnchorClose(setAnchorMarketingEl, "/about")
                    }
                  >
                    Example 1
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      handleAnchorClose(setAnchorMarketingEl, "/contact")
                    }
                  >
                    Example 2
                  </MenuItem>
                </Menu>
              </Box>
              <Divider sx={{
                  width:'100%',
                backgroundColor:theme.palette.primary.main
                }}/>

              <Typography
                onClick={() => handleClickMenu("/about")}
                cursor={"pointer"}
                marginBottom={'.5rem'}
                marginTop={'.5rem'}
              >
                Printing Products
              </Typography>
              <Divider sx={{
                  width:'100%',
                  marginTop:'.5rem',
                  cursor:'pointer',
                backgroundColor:theme.palette.primary.main
                }}/>
              <Typography
                onClick={() => handleClickMenu("/blogs")}
                cursor={"pointer"}
                marginBottom={'.5rem'}
                marginTop={'.5rem'}
              >
                Premium Finishes
              </Typography>
              <Divider sx={{
                  width:'100%',
                  marginTop:'.5rem',
                  cursor:'pointer',
                backgroundColor:theme.palette.primary.main
                }}/>
              <Typography
                onClick={() => handleClickMenu("/careers")}
                cursor={"pointer"}
                marginBottom={'.5rem'}
                marginTop={'.5rem'}
              >
                Packaging News
              </Typography>
              <Divider sx={{
                  width:'100%',
                  marginTop:'.5rem',
                  cursor:'pointer',
                backgroundColor:theme.palette.primary.main
                }}/>

              {/* <Typography
                onClick={() => handleClickMenu("/contact")}
                cursor={"pointer"}
                marginBottom={'.5rem'}
                marginTop={'.5rem'}
                sx={{
                  color:'white'
                }}
              >
                Contact
              </Typography> */}

              {/* <Divider sx={{
                  width:'100%',
                  marginTop:'.5rem',
                  cursor:'pointer',
                backgroundColor:theme.palette.primary.main
                }}/> */}
            </Box>
          </Box>
        </Drawer>
      </Box>
    </Box>
    </>
  );
};

export default Header2;
