import Avartar2 from 'assets/Images/catching snowflakes.png';
import {
  darkTheme,
  Logo,
  mediaQueries,
  PowerButton,
  SocialIcons,
  YinYang,
} from 'components/common';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

const MainContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  background: ${(props) => (props.md && props.click ? `rgb(${props.theme.bodyRgba})` : '')};
`;

const Container = styled.div`
  padding: 3rem 2rem;
  font-family: 'karla', sans-serif;
`;

const FooterBar = styled.div`
  display: flex;
  justify-content: space-evenly;

  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  z-index: 2;

  width: 100%;
`;

const Contact = styled(motion(NavLink))`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  font-weight: 400;

  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 20;
`;

const WORK = styled(motion(NavLink))`
  color: ${(props) =>
    props.md && props.click ? `rgba(${props.theme.bodyRgba})` : props.theme.text};
  text-shadow: ${(props) => (props.md && props.click ? `rgb(0 0 0) 0px 0px 4px` : '')};

  font-weight: 400;
  letter-spacing: 0.1rem;

  position: absolute;
  top: 50%;
  left: 0.8rem;
  z-index: 2;

  transform: translateY(-50%) rotate(-90deg);

  ${mediaQueries(767)`
    left: -0.5rem;
  `}
`;
const BLOG = styled(motion(NavLink))`
  color: ${(props) =>
    props.md && props.click ? `rgba(${props.theme.bodyRgba})` : props.theme.text};
  text-shadow: ${(props) => (props.md && props.click ? `rgb(0 0 0) 0px 0px 4px` : '')};

  font-weight: 400;
  letter-spacing: 0.1rem;

  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: translateY(-50%) rotate(90deg);
  z-index: 20;

  ${mediaQueries(767)`
    right: 0.5rem;
  `}
`;
const ABOUT = styled(motion(NavLink))`
  color: ${(props) => props.color};
  font-weight: 400;
`;
const MySkills = styled(motion(NavLink))`
  color: ${(props) => props.theme.text};
  font-weight: 400;
`;

const Center = styled.div`
  position: absolute;
  top: ${(props) => (props.click ? '85%' : '50%')};
  left: ${(props) => (props.click ? '90%' : '50%')};
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  transition: all 0.5s linear;

  & > *:first-child {
    cursor: pointer;
    animation: ${rotate} 1.5s infinite linear;
    transition: all 0.5s linear;
  }

  @media screen and (max-width: 767px) {
    top: ${(props) => (props.click ? '85%' : '50%')};
    left: ${(props) => (props.click ? '80%' : '50%')};
    gap: 0.5rem;
  }
`;

const DarkBg = styled.div`
  width: ${(props) => `${props.click ? '100%' : '0%'}`};
  height: ${(props) => `${props.click ? '100%' : '0%'}`};

  position: absolute;
  top: 0;
  right: 50%;
  z-index: 1;
  background: black;

  transition: height 0.5s ease, width 0.5s ease 0.5s;

  @media screen and (max-width: 1023px) {
    right: 0;
    width: 100%;
    height: ${(props) => `${props.click ? '50%' : '0%'}`};
    transition: height 1s ease;
  }
`;

const Main = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 4;
  transform: translate(-50%, -50%);

  width: 65vw;

  background: linear-gradient(
        to right,
        ${(props) => `rgba(${props.theme.bodyRgba},1)`} 50%,
        ${(props) => `rgba(${props.theme.textRgba},1)`} 50%
      )
      top,
    linear-gradient(
        to right,
        ${(props) => `rgba(${props.theme.bodyRgba},0.8)`} 50%,
        ${(props) => `rgba(${props.theme.textRgba},0.8)`} 50%
      )
      bottom;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  display: flex;
  transition: all 0.5s linear;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(${(props) => props.theme.body} 50%, ${(props) => props.theme.text} 50%);
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }
`;

const Box = styled.div`
  flex: 1;
  position: relative;
  padding-left: 2rem;

  color: ${(props) => props.color};
  font-size: calc(1rem + 2vw);
  font-family: 'Source Sans Pro', sans-serif;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > * {
    font-weight: 400;
    &:first-child {
      font-weight: 700;
    }
    &:last-child {
      color: ${(props) => `rgba(${props.theme.bodyRgba},0.5)`};
    }
  }
`;

const Image = styled(motion.div)`
  flex: 1;
  position: relative;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;

    height: 130%;
    width: 100%;
    object-fit: cover;

    ${mediaQueries(1279)`
      height: 100%;
      width: auto;
      left: -20%;

      transform: none;

    `}

    ${mediaQueries(1023)`
      height: 100%;
      width: auto;
      left: 50%;
      transform: translateX(-50%);
    `}
  }
`;

const MainPage = () => {
  const [click, setClick] = useState(false);
  const [path, setPath] = useState('');

  const moveX = { x: path === 'blog' ? '-100%' : '100%', opacity: 0 };
  const moveY = { y: '-100%', opacity: 0 };

  const md = window.matchMedia('(max-width: 1023px)').matches;
  const sm = window.matchMedia('(max-width: 767px)').matches;

  return (
    <MainContainer
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={path === 'about' || path === 'mySkills' ? moveY : moveX}
      transition={{ duration: 0.5 }}
      md={+md}
      click={+click}
    >
      <DarkBg click={click} />
      {click && (
        <Main
          initial={{ height: 0 }}
          animate={{ height: sm ? '50vh' : '60vh' }}
          transition={{
            type: 'spring',
            duration: 0.5,
            delay: 1,
          }}
        >
          <Box color={click ? darkTheme.text : darkTheme.body}>
            <h2>Hi,</h2>
            <h3>I'm Kyrie</h3>
            <h6>I design and Code simple yet beautiful websites.</h6>
          </Box>
          <Image
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 2,
            }}
          >
            <img src={Avartar2} alt="profile me" className="pic" />
          </Image>
        </Main>
      )}

      <Container>
        <PowerButton />
        <Logo color={click ? darkTheme.text : darkTheme.body} />

        <Contact
          click={+click}
          initial={{ y: -200, transition: { type: 'spring', duration: 1.5 } }}
          animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 0.5 } }}
          target="_blank"
          to={{ pathname: 'mailto:ducndm.01@gmail.com' }}
        >
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Say hi..
          </motion.h3>
        </Contact>

        <Center click={click}>
          {sm ? (
            <YinYang
              onClick={() => setClick(!click)}
              width={click ? 50 : 80}
              height={click ? 50 : 80}
            />
          ) : (
            <YinYang
              onClick={() => setClick(!click)}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
            />
          )}
          <span>click here</span>
        </Center>

        <SocialIcons theme={click ? 'dark' : 'light'} />
        <BLOG md={+md} click={+click} onClick={() => setPath('blog')} to="/blog">
          <motion.h2
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 0.5 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </BLOG>
        <WORK
          md={+md}
          click={+click}
          to="/work"
          onClick={() => setPath('work')}
          color={click ? darkTheme.text : darkTheme.body}
        >
          <motion.h2
            initial={{ y: -200 }}
            animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 0.5 } }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>
        <FooterBar>
          <ABOUT
            to="/about"
            onClick={() => setPath('about')}
            color={click && !md ? darkTheme.text : darkTheme.body}
          >
            <motion.h2
              initial={{
                y: 200,
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 0.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </ABOUT>
          <MySkills onClick={() => setPath('mySkills')} to="/mySkills">
            <motion.h2
              initial={{ y: 200 }}
              animate={{ y: 0, transition: { type: 'spring', duration: 1.5, delay: 0.5 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              MySkills.
            </motion.h2>
          </MySkills>
        </FooterBar>
      </Container>
    </MainContainer>
  );
};

export default MainPage;
