import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPokemon } from '../actions/index';

const Pokemon = ({ pokemon, isGetting, error, getPokemon }) => {
  useEffect(() => {
    getPokemon();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <h1>TESTING!!</h1>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    isGetting: state.isGetting,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getPokemon })(Pokemon);
