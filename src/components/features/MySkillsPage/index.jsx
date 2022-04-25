import { Design, Develope, lightTheme, mediaQueries } from 'components/common';
import { motion } from 'framer-motion';
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

const Logo = lazy(() => import('components/common/Logo'));
const BigTitle = lazy(() => import('components/common/BigTitle'));
const PowerButton = lazy(() => import('components/common/PowerButton'));
const SocialIcons = lazy(() => import('components/common/SocialIcons'));
const CustomParticles = lazy(() => import('components/common/CustomParticles'));
const Loading = lazy(() => import('components/common/Loading'));

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;

  position: relative;
`;

const Main = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  ${mediaQueries(1023)`
    padding-top: 2rem;
    flex-direction: column;
    justify-content: center;
    gap: calc(2rem + 1vw);
  `}

  ${mediaQueries(767)`
    padding-top: 4rem;
  `}
`;

const Box = styled.div`
  width: 35vw;
  height: 65vh;
  position: relative;
  z-index: 2;

  border: 2px solid ${(props) => props.theme.text};

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 0 2rem;

  font-family: 'Ubuntu Mono', monospace;
  font-size: calc(0.5rem + 1vw);

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    transition: all 0.25s linear;
  }

  ${mediaQueries(1023)`
    height: 40vh;
    width: 45vw;
  `}

  ${mediaQueries(767)`
    height: 40vh;
    width: 75vw;
  `}
`;
const Designer = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.5rem;
  font-family: inherit;

  text-transform: uppercase;

  ${Box}:hover & {
    fill: ${(props) => props.theme.body};
  }
`;

const Description = styled.div`
  color: inherit;
  font-family: inherit;
  font-weight: 500;

  strong {
    text-transform: uppercase;
    & + p {
      padding: 0.5rem 2rem;
    }
  }

  ul {
    padding: 0.5rem 2rem;
    text-transform: capitalize;
  }
`;

const config = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    transition: { type: 'spring', duration: 1 },
  },
};

const MySkillsPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Container key="skills" variants={config} initial="hidden" animate="show" exit="hidden">
        <BigTitle text="skills" top="80%" right="30%" textTrans="capitalize" />
        <CustomParticles theme="light" />
        <Logo color={lightTheme.text} />
        <SocialIcons color={lightTheme.text} />
        <PowerButton />
        <Main>
          <Box>
            <Designer>
              <Design width={40} height={40} />
              <span>designer</span>
            </Designer>
            <Description>
              <p>I love to create design which speaks, Keep it clean, minimal and simple.</p>
            </Description>
            <Description>
              <strong>I LIKE TO DESIGN</strong>
              <ul>
                <li>Web Design</li>
                <li>Mobile Apps</li>
              </ul>
            </Description>
            <Description>
              <strong>tools</strong>
              <ul>
                <li>Figma</li>
              </ul>
            </Description>
          </Box>
          <Box>
            <Designer>
              <Develope width={40} height={40} />
              <span>Frontend Developer</span>
            </Designer>
            <Description>
              <p>
                I value business or brand for which i'm creating, thus i enjoy bringing new ideas to
                life.
              </p>
            </Description>
            <Description>
              <strong>SKILLS</strong>
              <p>Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase etc.</p>
            </Description>
            <Description>
              <strong>tools</strong>
              <p>VScode, Github, Codepen etc.</p>
            </Description>
          </Box>
        </Main>
      </Container>
    </Suspense>
  );
};

export default MySkillsPage;
