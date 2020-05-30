import styled, { css, keyframes } from 'styled-components';

const sizes = {
  xs: 0,
  sm: 540,
  md: 768,
  lg: 1024,
  xl: 1440,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `;
  return acc;
}, {});

export const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgba(0,0,0,0.7);
  position: sticky;
  top: 0px;
  z-index: 2;
`
export const ContentWrap = styled.div`
  width : 800px;
  margin: 50px auto 90px;

  ${media.lg`
    width: 88%;
  `}
`

export const FooterWrap = styled.div`
  background-color: #2b2b2b;
  height: 200px;
`

const loadingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`


export const Loader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;


  &:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #ccc;
    border-color: #ccc transparent #ccc transparent;
    animation: ${loadingAnimation} 0.8s linear infinite;
  }
`