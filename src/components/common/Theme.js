export const lightTheme = {
  body: '#FCF6F4',
  text: '#000000',
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: '252, 246, 244',
  textRgba: '0,0,0',
};
export const darkTheme = {
  body: '#000000',
  text: '#FCF6F4',
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: '0,0,0',
  textRgba: '252, 246, 244',
};

export const mediaQueries = (breakPoint) => {
  return (style) => `@media (max-width: ${breakPoint}px) { ${style} }`;
};