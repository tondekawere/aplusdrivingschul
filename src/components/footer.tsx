'use client'
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Products
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Cloud Infrastructure
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Voice Over Internet Protocol
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Virtual Private Network
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Internet of Things
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Contact Us
            </Typography>
            <Typography variant="body1" color="text.secondary">
              123 Main Street, Cape Town, South Africa
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <Link
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#fcba03",
                    textDecoration: "underline",
                  },
                }}
                color="inherit"
                onClick={() => window.open("mailto:info@digitalnyika.com")}
              >
                Email: info@digitalnyika.com
              </Link>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <Link
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  "&:hover": {
                    color: "#fcba03",
                    textDecoration: "underline",
                  },
                }}
                color="inherit"
                onClick={() => window.open("tel:+27210233698")}
              >
                Phone: +27 21 023 3698
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  ":hover": {
                    transform: "scale(1.1)",
                    color: "#fcba03",
                  },
                }}
              />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  ":hover": {
                    transform: "scale(1.1)",
                    color: "#fcba03",
                  },
                }}
              />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter
                sx={{
                  transition: "transform 0.3s ease-in-out",
                  ":hover": {
                    transform: "scale(1.1)",
                    color: "#fcba03",
                  },
                }}
              />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body1" color="text.secondary" align="center">
            {"Copyright © "}
            <Link
              color="inherit"
              href="https://your-website.com/"
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": {
                  color: "#fcba03",
                  textDecoration: "underline",
                  
                },
              }}
            >
              Digital Nyika
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}