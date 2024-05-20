/** @jsxImportSource @emotion/react */
import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import { css } from "@emotion/react";
import Image from "next/image";
import image1 from "../../public/Images/about.png";

const imageStyle = css`
  width: 100%;
  height: auto;

  @media (min-width: 1280px) {
    width: 500px;
  }
`;

const About = () => {
  return (
    <Grid container spacing={6} sx={{ padding: { xs: 4, lg: 10 } }}>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <div css={imageStyle}>
          <Image
            width={500}
            height={565}
            alt="about-image"
            src={image1}
            layout="responsive"
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} sx={{ marginTop: { lg: "3%" } }}>
        <Typography variant="h4" fontWeight={800} component="h2" gutterBottom>
          About us
        </Typography>
        <Typography paragraph>
          A Plus Driving School is a renowned institution in Zimbabwe that has
          been dedicated to shaping safe and confident drivers since it was
          established in 2024. Our comprehensive curriculum is designed to cover
          all aspects of driving, ensuring that our students not only pass their
          tests but also gain a thorough understanding of road safety and
          driving proficiency. Our experienced instructors bring a wealth of
          knowledge and passion to each lesson, offering personalized guidance
          to cater to individual learning styles.
        </Typography>
        <Typography paragraph sx={{ display: { xs: "none", md: "block" } }}>
          Our state-of-the-art facilities, including modern classrooms and
          advanced simulators, provide an immersive learning experience
          conducive to rapid skill development. We understand the demands of
          modern life, which is why we offer flexible scheduling options to
          accommodate diverse schedules. Committed to community engagement, we
          actively promote road safety through partnerships and outreach
          initiatives.
        </Typography>
        <Link
          href="/"
          color="error"
          sx={{
            textDecoration: "none",
            ":hover": {
              color: "blue",
              textDecoration: "underline",
            },
          }}
        >
          Learn more
        </Link>
      </Grid>
    </Grid>
  );
};

export default About;
