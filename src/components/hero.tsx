import * as React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import Dialogs from "./Dialogs";

export default function HeroCenter({
  title = "Cloud solutions made simple for small businesses.",
  subtitle = "Our managed cloud services................................ integrate business tools",
  solutions = "Partners",
}) {

  const scrollToSection2 = () => {
    const element = document.getElementById("Partners");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box
        px={0}
        border={0}
        mt={15}
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3" fontWeight={"bold"} align="center">
              Reliable digital and cloud solutions tailored for
              <Typography
                color={"primary"}
                variant="h3"
                fontWeight={"bold"}
                align="center"
              >
                your business.
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} xl={12} display={"flex"} justifyContent={"center"}>
            <Box border={0} width={"80%"}>
              <Typography align="center" variant="h5">
                We offer end-to-end digital and cloud solutions helping{" "}
                <Typography variant="h5" fontWeight={"bold"}>
                  small and medium enterprises{" "}
                </Typography>{" "}
                build,operate and manage their digital infrastructure.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} xl={12} display={"flex"} justifyContent={"center"}>
            <Box border={0} width={"80%"}>
              <Typography
                variant="body1"
                fontWeight={"bold"}
                align="center"
                sx={{ color: "grey" }}
              >
                Let us help you build your digital competitive edge.
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            xl={12}
            border={0}
            display={"flex"}
            justifyContent={"center"}
          >
            <TextField
              label="enter your email address for technical support"
              size="small"
              sx={{ borderRadius: 8, width: "50%" }}
              required
            ></TextField>
          </Grid>
          <Grid
            item
            xs={12}
            xl={12}
            border={0}
            display={"flex"}
            justifyContent={"center"}
          >
            <Dialogs />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
