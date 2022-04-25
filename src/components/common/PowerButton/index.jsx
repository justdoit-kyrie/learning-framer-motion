import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PowerBtn } from '../AllSVG';
import { mediaQueries } from '../Theme';

const Container = styled(NavLink)`
  position: fixed;
  top: 3rem;
  left: 50%;
  z-index: 5;
  transform: translateX(-50%);

  padding: 0.35rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100rem;
  border: 1px solid ${(props) => props.theme.text};

  cursor: pointer;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.body};

  &:hover {
    background: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 9px rgba(0, 255, 0, 0.4);
    transition: all 0.25s ease;
  }

  ${mediaQueries(767)`
    top: 2rem;
  `}
`;

const PowerButton = () => {
  return (
    <Container to="/">
      <PowerBtn width={30} height={30} fill="currentColor" />
    </Container>
  );
};

export default PowerButton;
