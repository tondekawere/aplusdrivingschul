"use client";
import React, { useState } from "react";
import HeroCenter from "@/components/hero";
import FeaturesSmallColumn from "@/components/feature";
import Footer from "@/components/footer";
import About from "@/components/about";
import BoxHolder from "@/components/box";
import { responsiveFontSizes } from '@mui/material/styles';


import {
  createTheme,
  ThemeProvider,
  Box,
  useMediaQuery,
  useTheme,
  Button,
  AppBar,
  Toolbar,
  Container,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  Grid,
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import CallToAction from "@/components/callToAction";
import Services from "@/components/services";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fcba03",
    },
    secondary: {
      main: "#49148c",
    },
  },
});


export default function Home() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <div>
        <CustomNavBarLandingPage />
      </div>
      <div id="Home">
        <Box sx={{ mb: 5, border: 0 }}>
          <HeroCenter></HeroCenter>
        </Box>{" "}
      </div>

      <div id="About">
        <About/>
      </div>

      <div>
        <Services/>
      </div>

      <div id="Contact">
        <FeaturesSmallColumn />
      </div>
      <div>
        <CallToAction></CallToAction>
      </div>
          <div id="Services">
        <BoxHolder></BoxHolder>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

const CustomNavBarLandingPage = () => {
  const menuItems = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },

    {
      id: 4,
      title: "Services",
    },
    {
      id: 5,
      title: "Contact",
    },
  ];
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [mobile, setMobile] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (isMobile) {
        setMobile(false);
      }
    }
  };

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {menuItems.map((page) => (
                    <MenuItem
                      key={page.id}
                      onClick={() => {
                        setAnchorElNav(null);
                        scrollToSection(`${page.title}`);
                      }}
                    >
                      <Typography
                        textAlign="center"
                        sx={{
                          cursor: "pointer",
                          textDecoration: "none",
                          "&:hover": {
                            color: "#fcba03",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {page.title}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          ) : (
            <>
              {" "}
              <Grid container display={"flex"} alignItems={"center"}>
                <Grid item md={4}>
                  <Box sx={{ border: 0, width: "100%", ml: 5 }}>
                    <Image width={125} height={62.5} alt="" src="/logo.svg" />
                  </Box>
                </Grid>
                <Grid item md={8}>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: {
                        xs: "none",
                        md: "flex",
                        justifyContent: "flex-end",
                      },
                      border: 0,
                      width: "90%",
                    }}
                  >
                    {menuItems.map((page) => (
                      <Button
                        color="inherit"
                        key={page.id}
                        onClick={() => scrollToSection(`${page.title}`)}
                      >
                        {page.title}
                      </Button>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const data = [
  {
    title: "Unified Communication Systems",
    summary: "Voice, video and chat About",
    description:
      "We offer end to end communications tools with integrations into your CRM tools",
    src: "/callcenter2.svg",
  },
  {
    title: "Virtual Private Networks",
    description: "For your business with multiple locations we can setup and manage your VPN",
    summary: "Multilocation shared resources",

    src: "/building2.svg",
  },
  {
    title: "Cloud Infrastructure",
    description: "We support your business with infrastructure as a service and platform as a service About",
    summary: "Managed services",
    src: "/server2.svg",
  },

  

];
