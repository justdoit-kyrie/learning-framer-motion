import music from 'assets/audio/u-said-it-v13-1167.mp3';
import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { mediaQueries } from '../Theme';

const wave = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(1.5);
}
100% {
  transform: scale(1);
}
`;

const Container = styled.div`
  position: fixed;
  top: 2.5rem;
  left: calc(2rem + 5vw);
  z-index: 5;

  transform: translateY(50%);

  cursor: pointer;

  display: flex;
  gap: 5px;

  ${mediaQueries(1023)`
    left: calc(4rem + 5vw);
  `}

  ${mediaQueries(767)`
    left: calc(5rem + 5vw);
    transform: none;
  `}

  & > span {
    display: block;
    width: 3px;
    height: calc(1rem + 1vh);
    background-color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.body};
    border-radius: 6px;
    animation: ${wave} 2s ease infinite;
    animation-play-state: ${(props) => (props.click ? 'running' : 'paused')};

    &:first-child {
      animation-delay: 0.2s;
    }
    &:nth-child(2) {
      animation-delay: 0.4s;
    }
    &:nth-child(3) {
      animation-delay: 0.6s;
    }
    &:nth-child(4) {
      animation-delay: 0.8s;
    }

    &:last-child {
      animation-delay: 1s;
    }
  }
`;

const SoundBar = () => {
  const [click, setClick] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const audio = ref.current;
    if (click) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [click]);

  return (
    <Container click={click} onClick={() => setClick(!click)}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <audio ref={ref} src={music}></audio>
    </Container>
  );
};

export default SoundBar;
