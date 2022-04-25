import React from 'react';
import { Box, HashTags, Image, Title } from './style';

const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: 'spring', duration: 0.5 } },
};

const Blog = ({ blog: { id, name, tags, date, imgSrc, link } }) => {
  return (
    <Box key={id} variants={item} target="_blank" to={{ pathname: link }}>
      <Image img={imgSrc} />
      <Title>{name}</Title>
      <HashTags>
        {tags.map((tag, idx) => (
          <span key={`tag - ${idx}`}>#{tag}</span>
        ))}
      </HashTags>
      <span>{date}</span>
    </Box>
  );
};

export default Blog;
