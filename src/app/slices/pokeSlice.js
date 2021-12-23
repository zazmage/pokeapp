import { createSlice } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const pokeSlice = createSlice({
  name: "pokeDesk",
  initialState: {
    pokemons: [],
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = [...state.pokemons, ...action.payload];
    },
  },
});

export const { setPokemons } = pokeSlice.actions;

export default pokeSlice.reducer;

export const getPokemons = () => async (dispatch) => {
  try {
    const pokeData = [];
    let res = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=25"
    );
    res = await res.json();
    res.results.map(async (el) => {
      let pokemon = { name: el.name };
      let res2 = await fetch(el.url);
      res2 = await res2.json();
      pokemon.imgUrl = res2.sprites.front_default;
      pokemon.height = res2.height;
      pokemon.weight = res2.weight;
      pokemon.spirtes = res2.sprites;
      pokemon.abilities = res2.abilities;
      let res3 = await fetch(res2.species.url);
      res3 = await res3.json();
      pokemon.evolveFrom = res3.evolves_from_species
        ? res3.evolves_from_species.name
        : null;
      let res4 = await fetch(res3.evolution_chain.url);
      res4 = await res4.json();
      pokemon.evolveTo = res4.chain.evolves_to[0].species.name
        ? res4.chain.evolves_to[0].species.name
        : null;
      pokeData.push(pokemon);
      pokeData.length === 25 && dispatch(setPokemons(pokeData));
    });
  } catch (error) {
    console.log(error);
  }
};
