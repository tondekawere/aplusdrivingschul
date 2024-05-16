"use client";
import React from "react";
import { Box, Typography, Grid, Divider, Button } from "@mui/material";
import { CalendarViewDayOutlined } from "@mui/icons-material";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import LooksThreeIcon from "@mui/icons-material/Looks3";
import LooksFourIcon from "@mui/icons-material/Looks4";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Box>
        <Box>
          <Divider>
            <Typography variant="h4">Signup</Typography>
          </Divider>
        </Box>


        <Box
          sx={{
            border: 0,
            borderColor: "red",
            display: "flex",
            alignContent: "center",
            justifyItems: "center",
            p: 0,
          }}
        >
          <Grid container direction="row"  gap={0}>
            <Grid xs={12} sm={3} md={3} item>
              <LooksOneIcon fontSize="large" color="secondary" />
              <Typography variant="h5" fontWeight={"bold"}>
                Connect
              </Typography>
            </Grid>
            <Grid xs={12} sm={3} md={3} item>
              <LooksTwoIcon fontSize="large" color="secondary" />
              <Typography variant="h5" fontWeight={"bold"}>
                Design
              </Typography>
            </Grid>
            <Grid xs={12} sm={3} md={3} item>
              <LooksThreeIcon fontSize="large" color="secondary" />
              <Typography variant="h5" fontWeight={"bold"}>
                Setup
              </Typography>
            </Grid>
            <Grid xs={12} sm={3} md={3} item>
              <LooksFourIcon fontSize="large" color="secondary" />
              <Typography variant="h5" fontWeight={"bold"}>
                Scale
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
