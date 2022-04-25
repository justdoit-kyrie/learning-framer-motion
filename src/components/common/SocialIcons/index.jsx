import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Facebook, Github, Twitter, YouTube } from '../AllSVG';
import { darkTheme, mediaQueries } from '../Theme';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 2;

  ${mediaQueries(1023)`
      left: 1rem;
    `}
`;

const Link = styled(motion(NavLink))`
  color: ${(props) => props.theme.text};
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background: ${(props) => props.color};
`;

const SocialIcons = ({ theme }) => {
  return (
    <Flex>
      <Link
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.2,
        }}
        target="_blank"
        to={{ pathname: 'https://github.com' }}
      >
        <Github width={25} height={25} fill={theme === 'dark' ? darkTheme.text : darkTheme.body} />
      </Link>
      <Link
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.4,
        }}
        target="_blank"
        to={{ pathname: 'https://twitter.com' }}
      >
        <Twitter width={25} height={25} fill={theme === 'dark' ? darkTheme.text : darkTheme.body} />
      </Link>
      <Link
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.6,
        }}
        target="_blank"
        to={{ pathname: 'https://facebook.com' }}
      >
        <Facebook
          width={25}
          height={25}
          fill={theme === 'dark' ? darkTheme.text : darkTheme.body}
        />
      </Link>
      <Link
        initial={{ transform: 'scale(0)' }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8,
        }}
        target="_blank"
        to={{ pathname: 'https://youTube.com' }}
      >
        <YouTube width={25} height={25} fill={theme === 'dark' ? darkTheme.text : darkTheme.body} />
      </Link>
      <Line
        initial={{ height: 0 }}
        animate={{ height: '8rem' }}
        transition={{
          type: 'spring',
          duration: 1,
        }}
        color={theme === 'dark' ? darkTheme.text : darkTheme.body}
      />
    </Flex>
  );
};

export default SocialIcons;
