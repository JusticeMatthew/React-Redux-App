import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getPokemon } from '../actions/index';

const Pokemon = ({ pokemon, isGetting, error, getPokemon }) => {
  useEffect(() => {
    getPokemon();
    //eslint-disable-next-line
  }, []);

  const handleClick = () => {
    getPokemon();
  };

  const pokeLink = `https://www.pokemon.com/us/pokedex/${pokemon.name}`;
  const pokeImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`;

  if (isGetting) {
    return (
      <StyledDiv>
        <div className='wrapper'>
          <div className='pokeball' />
        </div>
      </StyledDiv>
    );
  }

  return (
    <StyledDiv>
      <h1>Choose your Pokemon</h1>
      <button onClick={handleClick}>I CHOOSE...</button>
      <br />
      <a target='blank' href={pokeLink}>
        <img src={pokeImg} href={pokeLink} alt={pokemon.name} />
      </a>
      <h2>
        #{pokemon.id} {pokemon.name.toUpperCase()}
      </h2>
      <h3>Abilities:</h3>
      {pokemon.abilities.map((power) => (
        <p>{power.ability.name.toUpperCase()}</p>
      ))}
    </StyledDiv>
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

const StyledDiv = styled.div`
  position: absolute;
  background-color: white;
  width: 400px;
  min-height: 300px;
  margin: 30px auto;
  border-radius: 7px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  font-family: 'Source Code Pro', monospace;

  h1 {
    font-family: 'Press Start 2P', cursive;
    font-size: 1.8rem;
  }

  button {
    padding: 10px;
    margin: 0 0 10px;
    background: linear-gradient(to bottom, #d0451b 5%, #bc3315 100%);
    background-color: #d0451b;
    border-radius: 3px;
    border: 2px solid #942911;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 13px;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #854629;
  }

  button:hover {
    background: linear-gradient(to bottom, #bc3315 5%, #d0451b 100%);
    background-color: #bc3315;
  }

  img {
    max-height: 120px;
  }

  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }

  .pokeball {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    border: 3px solid;
    animation: frames 0.8s linear 0s infinite;
  }

  .pokeball:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    background-color: red;
    border: 4px solid;
    top: -4px;
  }

  .pokeball:before {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 10px;
    height: 10px;
    border: 4px solid;
    border-radius: 50%;
    bottom: 18px;
    right: 18px;
    z-index: 1;
  }

  /* AnimationFrames */
  @keyframes frames {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
