import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface RecipeReviewCardProps {
  title: string;
  summary: string;
  description: string;
  src: string;
}

const CustomCard = styled(Card)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    boxShadow: theme.shadows[5],
  },
}));

export default function RecipeReviewCard({
  title,
  summary,
  description,
  src,
}: RecipeReviewCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <CustomCard sx={{ width: 300, mb: 5 }}>
      <Image
        src={src}
        alt=""
        width={300}
        height={200}
        layout="responsive"
        objectFit="cover"
      />
      <CardContent>
        <Typography variant="button" fontWeight={"bold"} color="text.main">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {summary}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: "primary.secondary" }} />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ backgroundColor: "lightgrey" }}>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </CustomCard>
  );
}
