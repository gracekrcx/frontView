import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme)=>({
  card: {
    width: 245,
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
    }
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

export default function ImgCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} elevation={0}>
      <div className={classes.mediaBox}>
        <CardMedia
          className={classes.media}
          component="img"
          title="Ted talk"
          src='/static/placeholder.png'
        />
      </div>
      <div className={classes.title}>影評∣《美好拾光公司》人生充滿了投射、期望、自己寫的腳本</div>
      <div className={classes.infoWrp}>
        <div className={classes.leftInfo}>
          <Avatar
            alt="Ted talk"
            src="https://img.ezding.com.tw/photos/mymovie/act/ezding.png"
          />
          <div className={classes.day}>
            <span>白色豆腐蛋糕</span><br/>
            <span>2020/05/11</span>
          </div>
        </div>
        <div className={classes.icon}>有雷</div>
      </div>
      <div className={classes.ctx}>2019 金馬獎最佳男主角、新導演、原創電影歌曲入圍｜2020 香港電影金像獎最佳男主角、女主角、女配角、新晉導演等八項大獎入圍｜榮獲迷影精神賞年度榮譽大奬、華</div>
    </Card>
  );
}