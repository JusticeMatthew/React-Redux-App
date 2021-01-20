import {
  GET_POKEMON_START,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE,
} from '../actions';

const initialState = {
  pokemon: {
    id: '',
    name: '',
    abilities: '',
  },
  isGetting: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_START:
      return {
        ...state,
        isGetting: true,
      };
    case GET_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: {
          id: action.payload.id,
          name: action.payload.name,
          abilities: action.payload.abilities,
        },
        isGetting: false,
        error: '',
      };
    case GET_POKEMON_FAILURE:
      return {
        ...state,
        error: action.payload,
        isGetting: false,
      };
    default:
      return state;
  }
};
