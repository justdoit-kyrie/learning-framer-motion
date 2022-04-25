import { mediaQueries } from 'components/common';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Box = styled(motion(NavLink))`
  width: calc(12rem + 15vw);
  height: 20rem;

  color: ${(props) => props.theme.text};
  font-family: 'Karla', sans-serif;

  padding: 1rem;

  border: 2px solid ${(props) => props.theme.text};

  display: flex;
  flex-direction: column;

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    transition: all 0.2s linear;
  }

  ${mediaQueries(767)`
    width: 75vw;
    font-size: calc(0.5rem + 1.5vw);
  `}
`;

export const Image = styled.div`
  background: ${(props) => `url('${props.img}')`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  width: 100%;
  height: 60%;

  border: 1px solid transparent;

  ${Box}:hover & {
    border-color: ${(props) => props.theme.body};
    transition: all 0.2s linear;
  }
`;

export const Title = styled.h3`
  padding: 0.5rem 0;

  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-color: ${(props) => props.theme.body};
    transition: all 0.2s linear;
  }
`;

export const HashTags = styled.div`
  display: flex;
  gap: 0.25rem 0.5rem;
  flex-wrap: wrap;

  padding: 0.5rem 0;
`;
