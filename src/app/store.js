import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import pokeReducer from "./slices/pokeSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    pokemons: pokeReducer,
  },
});
