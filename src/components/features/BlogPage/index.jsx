import BG from 'assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import { mediaQueries } from 'components/common';
import { Blogs } from 'data/BlogData';
import { motion } from 'framer-motion';
import React, { lazy, useEffect, useState } from 'react';
import styled from 'styled-components';
import Blog from './components/Blog';

const Logo = lazy(() => import('components/common/Logo'));
const BigTitle = lazy(() => import('components/common/BigTitle'));
const PowerButton = lazy(() => import('components/common/PowerButton'));
const SocialIcons = lazy(() => import('components/common/SocialIcons'));
const CustomAnchor = lazy(() => import('./components/CustomAnchor'));

const MainContainer = styled(motion.div)`
  background: ${`url(${BG})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minMax(calc(12rem + 15vw), 1fr));
  gap: calc(1.5rem + 2vw);
  padding-top: 10rem;

  ${mediaQueries(1023)`
    gap: calc(0.5rem + 2vw);
  `}

  ${mediaQueries(767)`
    grid-template-columns: repeat(1, minMax(calc(12rem + 15vw), 1fr));
  `}
`;

const config = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    transition: { type: 'spring', duration: 1, staggerChildren: 0.5 },
  },
};

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    setNumbers(Math.floor((window.innerHeight - 70) / 25));
  }, []);

  return (
    <MainContainer key="blog" variants={config} initial="hidden" animate="show" exit="hidden">
      <Container>
        <BigTitle text="blog" top="12%" left="5%" />

        <Logo />
        <SocialIcons />
        <PowerButton />

        <Center>
          <Grid>
            {Blogs.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>

        {numbers && <CustomAnchor numbers={numbers} />}
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
