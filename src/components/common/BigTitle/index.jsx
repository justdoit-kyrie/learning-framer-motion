import React from 'react';
import styled from 'styled-components';

const Box = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  z-index: 2;

  color: ${(props) => `rgba(${props.theme.textRgba}, 0.1)`};
  font-size: calc(5rem + 5vw);
  text-transform: ${(props) => props.textTrans};
  font-weight: 700;
  line-height: 1;
`;

const BigTitle = ({ text, top, left, bottom, right, textTrans = 'uppercase' }) => {
  return (
    <Box top={top} left={left} bottom={bottom} right={right} textTrans={textTrans}>
      {text}
    </Box>
  );
};

export default BigTitle;
