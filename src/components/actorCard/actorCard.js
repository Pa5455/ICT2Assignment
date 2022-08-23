import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";

import Typography from "@material-ui/core/Typography";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function ActorCard({ person}) {
  const classes = useStyles();
  



  return (
    <Card className={classes.card}>
      <CardHeader
      
      title={
        <Typography variant="h5" component="p">
          {person.name}{" "}
        </Typography>
      }
    />
      <CardMedia
        
        
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {person.known_for_department}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}