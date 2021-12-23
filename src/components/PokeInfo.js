import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemons } from "../app/slices/pokeSlice";
import { Container } from "@mui/material";

const PokeInfo = () => {
  const { pokeName } = useParams();
  const { pokemons } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemons.length == 0) dispatch(getPokemons());
  }, [pokemons, dispatch]);

  return (
    <Container>
      <h2>PokeInfo</h2>
      {pokemons.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <Container maxWidth="sm"></Container>
      )}
    </Container>
  );
};

export default PokeInfo;
