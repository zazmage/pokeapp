import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemons } from "../app/slices/pokeSlice";
import { Container } from "@mui/material";

const PokeInfo = () => {
  const [pokeSelected, setPokeSelected] = useState(null);
  const { pokeName } = useParams();
  const { pokemons } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemons.length === 0) dispatch(getPokemons());
  }, [pokemons, dispatch]);

  useEffect(() => {
    if (pokemons.length > 0 && pokeSelected === null)
      setPokeSelected(pokemons.filter((el) => el.name === pokeName)[0]);
  }, [pokemons, pokeSelected]);

  // console.log(pokemons);
  // console.log(pokeName);
  // console.log(pokeSelected);
  // if (pokeSelected)
  //   console.log(Object.values(pokeSelected.spirtes).slice(0, 8));

  return (
    <Container>
      <h2>PokeInfo</h2>
      {pokemons.length === 0 ? (
        <h3>Loading...</h3>
      ) : (
        <Container maxWidth="sm">
          {pokeSelected === null ? (
            <h3>Loading...</h3>
          ) : (
            <>
              <h2>{pokeSelected.name}</h2>
              <img src={pokeSelected.imgUrl} alt={pokeSelected.name} />
              {pokeSelected.evolveFrom ? (
                <p>Evolve from {pokeSelected.evolveFrom}</p>
              ) : (
                <p>First evolution</p>
              )}
              {pokeSelected.evolveTo ? (
                <p>Evolve to {pokeSelected.evolveTo}</p>
              ) : (
                <p>Final evolution</p>
              )}
              <p>Height: {pokeSelected.height}</p>
              <p>Weight: {pokeSelected.weight}</p>
              <h3>Abilities</h3>
              {pokeSelected.abilities.map((el, i) => (
                <p key={i}>{el.ability.name}</p>
              ))}
              <h3>More images</h3>
              {Object.values(pokeSelected.spirtes)
                .slice(0, 8)
                .filter((el) => el !== null)
                .map((el, i) => (
                  <img key={i} src={el} alt="pokeImg" />
                ))}
            </>
          )}
        </Container>
      )}
    </Container>
  );
};

export default PokeInfo;
