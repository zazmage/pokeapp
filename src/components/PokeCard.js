import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

const PokeCard = ({ props: { name, imgUrl, evolve } }) => {
  return (
    <Grid item xs>
      <Link to={`/pokeInfo/${name}`}>
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia component="img" height="140" image={imgUrl} alt={name} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {evolve ? `Evolve from ${evolve}` : "First evolution"}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default PokeCard;
