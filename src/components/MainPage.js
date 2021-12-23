import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavigationBar from "./NavigationBar";
import { getPokemons } from "../app/slices/pokeSlice";
import PokeCard from "./PokeCard";
import { Container, Grid } from "@mui/material";

const MainPage = () => {
  const { pokemons } = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemons.length == 0) dispatch(getPokemons());
  }, [pokemons, dispatch]);

  return (
    <Container>
      <Grid container spacing={2}>
        <h1>Pokeapp</h1>
        <NavigationBar />
        {pokemons.length === 0 ? (
          <h3>Loading...</h3>
        ) : (
          pokemons.map((el, i) => <PokeCard key={i} props={el} />)
        )}
      </Grid>
    </Container>
  );
};

export default MainPage;
