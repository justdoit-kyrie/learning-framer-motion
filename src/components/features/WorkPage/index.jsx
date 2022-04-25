import { darkTheme, mediaQueries, YinYang } from 'components/common';
import { Work } from 'data/WorkData';
import { motion } from 'framer-motion';
import React, { useEffect, useRef, lazy } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WorkComp from './components/WorkComp';

const Logo = lazy(() => import('components/common/Logo'));
const BigTitle = lazy(() => import('components/common/BigTitle'));
const PowerButton = lazy(() => import('components/common/PowerButton'));
const SocialIcons = lazy(() => import('components/common/SocialIcons'));

const MainContainer = styled(motion.div)`
  height: ${`${Work.length * 450}px`};

  background: ${(props) => props.theme.body};

  ${mediaQueries(1023)`
     height: 300vh
  `}
`;
const Container = styled.div`
  height: 100vh;
  position: relative;
`;

const Main = styled(motion.div)`
  position: fixed;
  top: calc(5rem + 15vh);
  left: calc(10rem + 15vw);

  color: ${(props) => props.theme.text};

  display: flex;
  gap: calc(3rem + 5vw);
`;

const Icon = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  & > * {
    fill: ${(props) => props.theme.text};
  }

  transition: all 0.2s ease;
`;

const WorkPage = (props) => {
  const ref = useRef();
  const Iconref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      ref.current.style.transform = `translateX(-${window.pageYOffset}px)`;
      Iconref.current.style.transform = `rotate(${window.pageYOffset}deg)`;
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const config = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: 'spring', duration: 1, staggerChildren: 0.5 } },
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <BigTitle text="work" top="10%" right="20%" />
          <Logo color={darkTheme.text} />
          <SocialIcons theme="dark" />
          <PowerButton />
          <Main ref={ref} variants={config} initial="hidden" animate="show">
            {Work.map((work) => (
              <WorkComp key={work.id} work={work} />
            ))}
          </Main>
          <Icon ref={Iconref}>
            <YinYang width={80} height={80} />
          </Icon>
        </Container>
      </MainContainer>
    </ThemeProvider>
  );
};

export default WorkPage;
