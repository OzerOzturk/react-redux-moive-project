import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const actorSlice = createSlice({
  name: "actors",
  initialState: {
    value: { isLoading: false, detailActors: [], error: "" },
  },
  reducers: {
    FETCH_ACTOR_REQUEST: (state, action) => {
      state.value.isLoading = true;
    },
    FETCH_ACTOR_SUCCESS: (state, action) => {
      state.value.isLoading = false;
      state.value.detailActors = action.payload;
      state.value.error = " ";
    },
    FETCH_ACTOR_FAILURE: (state, action) => {
      state.value.error = action.payload;
      state.value.isLoading = false;
      state.value.detailActors = [];
    },
  },
});

export const { FETCH_ACTOR_REQUEST, FETCH_ACTOR_SUCCESS, FETCH_ACTOR_FAILURE } =
  actorSlice.actions;
export default actorSlice.reducer;

export const fetchActors = () => {
  return (dispatch) => {
    dispatch(FETCH_ACTOR_REQUEST());
    axios
      .get(
        "https://api.themoviedb.org/3/person/popular?api_key=700d3a1260c205edbb3e4e388f37e877"
      )
      .then((response) => {
        const detailActors = response.data.results;
        console.log(detailActors);
        dispatch(FETCH_ACTOR_SUCCESS(detailActors));
      })
      .catch((error) => {
        dispatch(FETCH_ACTOR_FAILURE(error.message));
      });
  };
};
