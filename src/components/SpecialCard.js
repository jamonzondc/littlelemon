import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const SpecialCard = ({ title, description, image }) => {
  return (
    <Card sx={{ height: 360 }}>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Order a delivery</Button>
      </CardActions>
    </Card>
  );
};

export default SpecialCard;
