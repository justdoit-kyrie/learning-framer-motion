import { mediaQueries } from 'components/common';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  z-index: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transform: translateY(-100%);

  .chain {
    transform: rotate(135deg);
  }

  ${mediaQueries(1023)`
    right: 0.5rem;
  `}

  ${mediaQueries(767)`
    display: none;
  `}
`;

export const PreLoad = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;

  ${mediaQueries(1023)`
    right: 0.5rem;
  `}

  ${mediaQueries(767)`
    display: none;
  `}
`;
