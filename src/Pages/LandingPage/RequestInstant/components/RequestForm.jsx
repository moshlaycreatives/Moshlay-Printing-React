import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const inputStyles = {
  marginBottom: "0.5rem",
  marginTop: "0.9rem",
};

const labelStyles = {
  fontSize: "1rem",
  fontWeight: "400",
};

const boxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "4px",
  width: "100%",
};

const fileInputStyles = {
  "& .MuiInputBase-root": {
    padding: "0",
  },
  "& input": {
    display: "none",
  },
};

const fileButtonStyles = {
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "1rem",
  padding: "0.5rem 1rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#f1f1f1",
  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
};

const RequestForm = () => {
  const theme = useTheme();
const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const [fileName, setFileName] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const correctAnswer = 10; // For the math captcha 2 + 8 = 10

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || "No file chosen");
  };

  const handleSubmit = () => {
    if (parseInt(captchaAnswer, 10) !== correctAnswer) {
      alert("Wrong answer to the captcha!");
      return;
    }

    // Add your submit logic here
    alert("Form submitted successfully!");
  };

  return (
    <>
      <Box sx={{}}>
        <Box
          sx={{
            padding: "0.5rem 0rem",
            borderRadius: "10px 10px 0px 0px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Typography sx={{ color: "white", fontSize:isSmall ? "1.3rem" : "2rem" }}>
            GET CUSTOM QUOTE
          </Typography>
        </Box>

        <Box
          sx={{
            padding: "1rem 2rem",
            border: "2px solid grey",
            borderTop: "none",
            borderRadius: "0px 0px 20px 20px",
          }}
        >
          <Box sx={{ display: "flex" }} gap={3}>
            <Box sx={{ width: "100%" }}>
              <Typography>Name</Typography>

              <TextField fullWidth size="small" placeholder="Enter Name" />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography>Email</Typography>

              <TextField fullWidth size="small" placeholder="Enter Email" />
            </Box>
          </Box>

          <br />

          <Box sx={{ display: "flex" }} gap={3}>
            <Box sx={{ width: "100%" }}>
              <Typography>Phone No.</Typography>

              <TextField
                fullWidth
                size="small"
                placeholder="Enter Phone Number"
              />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography>Product Name</Typography>

              <TextField
                fullWidth
                size="small"
                placeholder="Enter Product Name"
              />
            </Box>
          </Box>

          <br />

          <Box sx={{ display: "flex" }} gap={3}>
            <Box sx={{ width: "100%" }}>
              <Typography>Length</Typography>

              <TextField fullWidth size="small" placeholder="Enter Length" />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography>Width</Typography>
              <FormControl fullWidth size="small">
                <InputLabel id="width-select-label">Select Width</InputLabel>
                <Select
                  labelId="width-select-label"
                  id="width-select"
                  label="Select Width"
                >
                  <MenuItem value={10}>10 cm</MenuItem>
                  <MenuItem value={20}>20 cm</MenuItem>
                  <MenuItem value={30}>30 cm</MenuItem>
                  <MenuItem value={40}>40 cm</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <br />

          <Box sx={{ display: "flex" }} gap={3}>
            <Box sx={{ width: "100%" }}>
              <Typography>Depth</Typography>

              <TextField fullWidth size="small" placeholder="Enter Depth" />
            </Box>

            <Box sx={{ width: "100%" }}>
              <Typography>Unit</Typography>

              <TextField fullWidth size="small" placeholder="Enter Unit" />
            </Box>
          </Box>

          <br />

          <Typography>Message</Typography>
          <TextField
            multiline
            rows={5}
            fullWidth
            placeholder="Write short message"
          />

          <br />

          <Box sx={inputStyles}>
            <Typography sx={labelStyles}>Upload Your Artwork</Typography>
            <Box sx={boxStyles}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                sx={fileInputStyles}
                InputProps={{
                  endAdornment: (
                    <>
                      <Box component="label" sx={fileButtonStyles}>
                        <Typography variant="body2">Choose File</Typography>
                        <input
                          type="file"
                          name="courseImage"
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </Box>{" "}
                      {fileName}
                    </>
                  ),
                }}
              />
            </Box>
          </Box>
          <br />
          <Box
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              flexWrap: "wrap",
              margin: "auto",
            }}
            gap={5}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              gap={3}
            >
              <TextField
                value="2"
                InputProps={{ readOnly: true }}
                size="small"
                sx={{ width: "60px" }}
              />{" "}
              +
              <TextField
                value="2"
                InputProps={{ readOnly: true }}
                size="small"
                sx={{ width: "60px" }}
              />{" "}
              =
              <TextField
                value="4"
                InputProps={{ readOnly: true }}
                size="small"
                sx={{ width: "60px" }}
              />
            </Box>

            <Typography variant="body2" color="textSecondary">
              (Are you human, or spambot?)
            </Typography>
          </Box>
          <br />
          <Button
            variant="contained"
            sx={{
              borderRadius: "9px",
              fontSize: isSmall ? "1.1rem": "1.3rem",
              fontWeight: 500,
              textTransform: "none",
              padding: "0.4rem",
              color: "white",
            }}
            fullWidth
          >
            Submit Quote
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default RequestForm;
