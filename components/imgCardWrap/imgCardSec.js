import React from 'react';
import ImgCard from './imgCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    'flex-wrap': 'wrap',
    'justify-content': 'space-between',
  },
  selector: {
    'font-size': 14,
    'font-weight': 200,
    cursor: 'pointer',
    color: '#9e9e9e',
    width: 63,
    height: 25,
    'border-radius': 10,
    display: 'flex',
    'justify-content': 'center',
    'align-items':'center',
  },
  checked:{
    background: '#2b2b2b',
    color: '#fff',
  },
  header:{
    width: 800,
    height: 35,
    display: 'flex',
    'margin-bottom': 20,
    'justify-content': 'space-between',
    'flex-wrap': 'wrap',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  title:{
    width: 100,
    height: 35,
    color: '#fff',
    'text-align': 'left',
    'font-size': 16,
    [theme.breakpoints.down('xs')]: {
      order:1,
    },
  },
  options:{
    display: 'flex',
    'justify-content': 'space-between',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      order: 3,
      'margin-top': 20,
    },
  },
  lineWrap:{
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      order: 2,
    },
  },
  lineLeft:{
    'border-bottom': '2px solid #e7008c',
    width: 100,
  },
  lineRight:{
    'border-bottom': '1px solid #fff',
    width: 'calc(100% - 100px)',
  }
}))

// 選項
const Selector = ({style, checked, text}) => {
  return (<div className={`${style.selector} ${checked && style.checked}`}>{text}</div>)
}

export default function ImgCardSec() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.title}>近期文章</div>
        <div className={classes.options}>
          <Selector style={classes} checked={false} text='全部' />
          <Selector style={classes} checked={false} text='專題' />
          <Selector style={classes} checked={true} text='影評' />
          <Selector style={classes} checked={false} text='新聞' />
        </div>
        <div className={classes.lineWrap}>
          <div className={classes.lineLeft}/>
          <div className={classes.lineRight}/>
        </div>
      </div>
      <ImgCard />
      <ImgCard />
      <ImgCard />
      <ImgCard />
      <ImgCard />
      <ImgCard />
    </div>
  );
}