import React from "react";
import Actor from "../actorCard";
import Grid from "@material-ui/core/Grid";

const ActorList = ( {persons, action }) => {
  let actorCards = persons.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return actorCards;
};

export default ActorList;