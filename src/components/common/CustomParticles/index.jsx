import lightConfig from 'config/particlesjs-config-light.json';
import darkConfig from 'config/particlesjs-config.json';
import React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { darkTheme } from '../Theme';

const Container = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  background: ${(props) => props.bg};
`;

const CustomParticles = ({ theme }) => {
  return (
    <Container bg={theme === 'dark' ? darkTheme.body : darkTheme.text}>
      <Particles
        style={{ position: 'absolute', top: 0 }}
        params={theme === 'dark' ? darkConfig : lightConfig}
      />
    </Container>
  );
};

export default CustomParticles;
