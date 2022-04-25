import { Anchor, Link } from 'components/common';
import React, { useEffect, useRef } from 'react';
import { Container, PreLoad } from './style';

const CustomAnchor = ({ numbers }) => {
  const ref = useRef();
  const hiddenRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.pageYOffset;
      const windowSize = window.innerHeight;
      const bodySize = document.body.offsetHeight;

      const diff = Math.max(bodySize - (Math.floor(scrollPos) + windowSize));
      const diffPercent = (diff * 100) / (bodySize - windowSize);

      ref.current.style.transform = `translateY(-${diffPercent}%)`;

      if (window.innerWidth > 767) {
        if (scrollPos > 5) {
          hiddenRef.current.style.display = 'none';
        } else {
          hiddenRef.current.style.display = 'block';
        }
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <PreLoad ref={hiddenRef}>
        <Anchor width={70} height={70} fill="currentColor" />
      </PreLoad>
      <Container ref={ref}>
        {[...Array(numbers)].map((v, idx) => (
          <Link key={idx} width={25} height={25} fill="currentColor" className="chain" />
        ))}
        <Anchor width={70} height={70} fill="currentColor" />
      </Container>
    </>
  );
};

export default CustomAnchor;
