import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';

import Pokemon from './components/Pokemon';
import particleParams from './assets/particleSettings';

function App() {
  return (
    <>
      <StyledWrapper>
        <Pokemon />
      </StyledWrapper>
      <Particles id='particles-js' params={particleParams} />
    </>
  );
}

export default App;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
