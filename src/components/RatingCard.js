import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import StarRating from "./StarRating";

const RatingCard = ({ name, rating, review }) => {
  return (
    <Card>
      <CardContent>
        <Grid direction="column">
          <Grid item>
            <StarRating value={rating} />
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Avatar
              style={{
                marginRight: "8px",
              }}
            />
            <span>{name}</span>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.secondary">
              {review}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default RatingCard;
