import astronaut from 'assets/Images/spaceman.png';
import { darkTheme, mediaQueries } from 'components/common';
import { motion } from 'framer-motion';
import React from 'react';
import { lazy, Suspense } from 'react/cjs/react.production.min';
import styled, { keyframes, ThemeProvider } from 'styled-components';

const CustomParticles = lazy(() => import('components/common/CustomParticles'));
const Logo = lazy(() => import('components/common/Logo'));
const BigTitle = lazy(() => import('components/common/BigTitle'));
const PowerButton = lazy(() => import('components/common/PowerButton'));
const SocialIcons = lazy(() => import('components/common/SocialIcons'));
const Loading = lazy(() => import('components/common/Loading'));

const translate = keyframes`
0% {
  transform: translateY(-10%);
}
50% {
  transform: translateY(0) translateX(10%);
}
100% {
  transform: translateY(-10%);
}
`;

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  position: relative;
  overflow: hidden;
`;

const Main = styled(motion.div)`
  width: 55vw;
  height: 65vh;

  padding: 3rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(4px);
  color: ${(props) => props.theme.text};
  font-family: 'Ubuntu Mono', monospace;

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  z-index: 2;

  & > * {
    font-size: calc(0.6rem + 1vw);
    line-height: 1.5;
    color: inherit;
  }

  ${mediaQueries(1279)`
    justify-content: center;
    gap: calc(1rem + 1vw);
  `}

  ${mediaQueries(767)`
    width:80vw;
    left: calc(2rem + 5vw);
  `}
`;

const Spaceman = styled(motion.div)`
  position: absolute;
  z-index: 3;
  width: 20vw;

  animation: ${translate} 4s ease infinite;

  & > * {
    width: 100%;
    height: auto;
  }
`;

const config = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    transition: { type: 'spring', duration: 1 },
  },
};

const AboutPage = (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Container key="about" variants={config} initial="hidden" animate="show" exit="hidden">
        <ThemeProvider theme={darkTheme}>
          <BigTitle text="about" top="12%" left="5%" />
          <CustomParticles theme="dark" />
          <Logo color={darkTheme.text} />
          <SocialIcons theme="dark" />
          <PowerButton />
          <Spaceman
            initial={{ right: '-20%', top: '100%' }}
            animate={{
              right: '5%',
              top: '10%',
              transition: { duration: 2, delay: 0.5 },
            }}
          >
            <img src={astronaut} alt="spacement" className="astronaut" />
          </Spaceman>
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'spring', duration: 1, delay: 1 }}
          >
            <p>
              I'm a front-end developer located in India. I love to create simple yet beautiful
              websites with great user experience.
            </p>
            <p>
              I'm interested in the whole frontend stack Like trying new things and building great
              projects. I'm an independent freelancer and blogger. I love to write blogs and read
              books.
            </p>
            <p>
              I believe everything is an Art when you put your consciousness in it. You can connect
              with me via social links.
            </p>
          </Main>
        </ThemeProvider>
      </Container>
    </Suspense>
  );
};

export default AboutPage;
