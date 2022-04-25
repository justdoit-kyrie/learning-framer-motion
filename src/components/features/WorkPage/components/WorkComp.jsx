import { Github, mediaQueries } from 'components/common';
import { motion } from 'framer-motion';
import React, { lazy } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Box = styled(motion.div)`
  flex: 1;
  width: 20vw;
  height: 45vh;

  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  border: 2px solid transparent;

  border-radius: 0 50px 0 50px;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border-color: ${(props) => props.theme.text};

    backdrop-filter: blur(4px);
    transition: all 0.2s linear;
  }

  ${mediaQueries(1023)`
      width: 20rem;
      height: 40vh;
  `}
`;

const Titlte = styled.h4`
  font-size: calc(1rem + 0.5vw);
`;

const Description = styled.p`
  font-size: calc(0.8rem + 0.3vw);
  font-weight: 500;
  padding: 0 0 2rem;

  border-bottom: 2px solid ${(props) => props.theme.body};

  ${Box}:hover & {
    border-bottom: 2px solid ${(props) => props.theme.text};
    transition: all 0.2s linear;
  }
`;

const HashTags = styled.div`
  display: flex;
  gap: 0.25rem 0.5rem;
  flex-wrap: wrap;

  ${Box}:hover & {
    color: ${(props) => props.theme.text};
    transition: all 0.2s linear;
  }
`;

const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Visit = styled(NavLink)`
  width: 50%;
  padding: 0.5rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.text};
  font-size: calc(0.8rem + 0.6vw);
  text-transform: capitalize;

  background: ${(props) => props.theme.body};
  border-radius: 0 0 0 50px;

  ${Box}:hover & {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    transition: all 0.2s linear;
  }
`;

const Git = styled(NavLink)`
  & > * {
    fill: ${(props) => props.theme.body};

    ${Box}:hover & {
      fill: ${(props) => props.theme.text};
      transition: all 0.2s linear;
    }
  }
`;

const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: 'spring', duration: 0.5 } },
};

const WorkComp = ({ work }) => {
  const { name, description, tags, demo, github } = work;
  return (
    <Box variants={item}>
      <Titlte>{name}</Titlte>
      <Description>{description}</Description>
      <HashTags>
        {tags.map((tag, idx) => (
          <span key={`tag - ${idx}`}>#{tag}</span>
        ))}
      </HashTags>
      <Action>
        <Visit target="_blank" to={{ pathname: demo }}>
          visit
        </Visit>
        <Git target="_blank" to={{ pathname: github }}>
          <Github width={25} height={25} />
        </Git>
      </Action>
    </Box>
  );
};

export default WorkComp;
