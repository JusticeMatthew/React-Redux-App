import axios from 'axios';

const randomPokeNum = () => Math.floor(Math.random() * 898) + 1;

export const GET_POKEMON_START = 'GET_POKEMON_START';
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const GET_POKEMON_FAILURE = 'GET_POKEMON_FAILURE';

export const getPokemon = () => (dispatch) => {
  dispatch({ type: GET_POKEMON_START });
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${randomPokeNum()}`)
    .then((res) => {
      dispatch({ type: GET_POKEMON_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_POKEMON_FAILURE, payload: err.response.code });
    });
};
