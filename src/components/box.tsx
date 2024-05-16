"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import Image from "next/image";

export default function BoxHolder() {
  return (
    <div>
      <Box mb={5}>
        <Divider variant="fullWidth" sx={{ color: "black" }}>
          <Typography variant="h4">Partners</Typography>
        </Divider>
      </Box>
      <Box
        sx={{
          height: "auto",
          border: 0,
          mt: 0,
          mb: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <Grid item>
            <Image src={"/gcp.svg"} width={80} height={80} alt="" />
          </Grid>
          <Grid item>
            {" "}
            <Image src={"/azure.svg"} width={80} height={80} alt="" />
          </Grid>
          <Grid item>
            {" "}
            <Image src={"/aws.svg"} width={80} height={80} alt="" />
          </Grid>

          <Grid item>
            {" "}
            <Image src={"/3CX_logo.svg"} width={80} height={80} alt="" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
