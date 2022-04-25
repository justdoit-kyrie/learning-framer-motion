import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../Theme';
const Text = styled.h1`
  position: fixed;
  top: 3rem;
  left: 2rem;
  z-index: 3;

  font-family: 'Pacifico', sans-serif;
  color: ${(props) => props.color};

  ${mediaQueries(767)`
    top: 2rem;
  `}
`;

const Logo = ({ color }) => {
  return <Text color={color}>CB</Text>;
};

export default Logo;
