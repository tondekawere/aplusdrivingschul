import * as React from "react";
import { Box, Typography, Divider, Grid } from "@mui/material";
import Image from "next/image";

import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import FaxIcon from "@mui/icons-material/Fax";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import SettingsInputAntennaIcon from "@mui/icons-material/SettingsInputAntenna"; // features with tighter spacing
export default function FeaturesSmallColumn({
  features = [
    {
      icon: <CloudQueueIcon fontSize="large" color="primary" />,
      title: "Cloud",
      description:
        "We offer cloud services and cloud support for all your infrastructure, computing and storage solutions",
    },
    {
      icon: <VpnLockIcon fontSize="large" color="primary" />,
      title: "VPN",
      description:
        "Enhance your security with our reliable point-to-point encryption technologies",
    },
    {
      icon: <FaxIcon fontSize="large" color="primary" />,
      title: "VOIP",
      description:
        "Improve your customer service and manage productivity with our wide range of voice solutions",
    },
    {
      icon: <SettingsInputAntennaIcon fontSize="large" color="primary" />,
      title: "IOT",
      description:
        "Deploy end to end IOT solutions for your home, business and industrial use cases",
    },
  ],
}) {
  return (
    <Box sx={{ border: 0, borderColor: "red" }}>


      <Box
        sx={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: {
            sm: "repeat(2,minmax(0,1fr))",
            md: "repeat(4,minmax(0,1fr))",
          },
          gap: 4,
          px: { xs: 2, sm: 10 },
          py: 6,
        }}
      >
        {features.map((feature) => {
          return (
            <Feature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </Box>
    </Box>
  );
}
function Feature({ title, description, icon }:{title:string, description:string,icon:React.ReactNode}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        fontSize: "md",
        lineHeight: 1.5,
        gap: 1,
        
      }}
    >
      <Box>{icon}</Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
}
