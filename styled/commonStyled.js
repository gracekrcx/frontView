import styled, { css, keyframes } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

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


export const imgCardStyles = makeStyles((theme)=>({
  card: {
    width: 245,
    height: 351,
    margin: '0px 0px 15px',
    background: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
      width: '32%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '48%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: 'auto',
      margin: '0px 0px 20px',
    },
  },
  mediaBox:{
    width: '100%',
    height: 180,
    overflow: 'hidden',
  },
  media: {
    transition: '0.5s',
    width: '100%',
    height: 180,
    '.MuiCard-root:hover &':{
      transform: 'scale(1.1)',
    }
  },
  title:{
    height: 50,
    fontSize: 18,
    cursor: 'pointer',
    margin: '5px 0px',
    display: 'box',
    'line-clamp': 2,
    'box-orient': 'vertical',
    overflow: 'hidden',
    color: '#fff',

    '&:hover':{
      color: '#e7008c',
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  infoWrp:{
    display: 'flex',
    'justify-content': 'space-between',
  },
  leftInfo:{
    display: 'flex',
  },
  day:{
    fontSize: 11,
    fontWeight: 200,
    'margin-left': 4,
    color: '#dcdcdc',
    width: 100,
  },
  ctx:{
    display: 'box',
    'line-clamp': 3,
    'box-orient': 'vertical',
    overflow: 'hidden',
    color:'#9e9e9e',
    'margin-top': 5,
  },
  icon:{
    background: '#5f47e2',
    width: 36,
    'font-size': 10,
    color: '#fff',
    'border-radius': 10,
    margin: '10px 2px',
    display: 'flex',
    'align-items': 'center',
    'justify-content': 'center',
    'line-height': 0,
  }
}));