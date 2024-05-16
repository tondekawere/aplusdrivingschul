"use client";
import * as React from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import Image from "next/image";

export default function RightSection({
  title,
  subtitle,
  buttonText,
  src,
}: {
  title: String;
  subtitle: string;
  buttonText: string;
  src: string;
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
        <Grid container>
          <Grid
            container
            xs={12}
            sm={4}
            md={4}
            border={0}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid item>
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "flex",
                    md: "flex",
                    lg: "flex",
                    xl: "flex",
                  },
                }}
              >
                <Image
                  src={src}
                  alt=""
                  fill

                />
              </Box>
            </Grid>
          </Grid>
          <Grid container xs={12} sm={8} md={8} border={0} p={1}>
            <Grid item xs={12} sm={12} border={0}>
              <Typography
                sx={{
                  typography: {
                    xs: "h5",
                    sm: "h4",
                    md: "h2",
                    lg: "h2",
                    xl: "h1",
                  },
                }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} border={0} borderColor={"red"}>
              <Typography
                sx={{
                  typography: {
                    xs: "subtitle1",
                    sm: "h6",
                    md: "h4",
                    lg: "h4",
                    xl: "h3",
                  },
                }}
              >
                {subtitle}
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  sx={{ m: 1 }}
                >
                  {buttonText}
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
