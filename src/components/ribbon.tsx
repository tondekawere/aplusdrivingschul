"use client";
import * as React from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import Image from "next/image";

export default function Ribbon({
  title,
  subtitle,
}: {
  title: String;
  subtitle: string;
}) {
  return (
    <div>
      <Box sx={{ width: "100%", mb: 2 }}>
        <Divider>
          <Typography variant="h4"></Typography>
        </Divider>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: 0,
          borderColor: "red",
        }}
      >
        <Grid container  border={0} p={1}>
          <Grid item xs={12} sm={12} border={0} display={'flex'} justifyContent={'center'}>
            <Typography
              sx={{
                typography: {
                  xs: "h3",
                  sm: "h3",
                  md: "h3",
                  lg: "h3",
                  xl: "h3",
                },
                fontWeight:'bold'
              }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} border={0} borderColor={"red"} display={'flex'} justifyContent={'center'}>
            <Typography
              sx={{
                typography: {
                  xs: "subtitle1",
                  sm: "subtitle1",
                  md: "subtitle1",
                  lg: "subtitle1",
                  xl: "subtitle1",
                },
             
              }}
              align="center"
            >
              {subtitle}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
