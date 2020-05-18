import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Skeleton from '@material-ui/lab/Skeleton';
import {dateHander} from '../../helper/dateHelper'

const useStyles = makeStyles((theme)=>({
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

export default function ImgCard(props) {
  const { loading = false, item = null } = props;
  const classes = useStyles();

  // console.log('-item-->',item);

  return (
    <Card className={classes.card} elevation={0}>
      <div className={classes.mediaBox}>
        {loading ? (
          <Skeleton animation="wave" variant="rect" height={180}/>
        ) : (
          <CardMedia
            className={classes.media}
            component="img"
            title="img"
            src={item.first_image ? item.first_image :'/static/placeholder.png'}
          />
        )}
      </div>
      {
        loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={28}  />
            <Skeleton animation="wave" height={28} style={{ marginBottom: 5}} />
          </React.Fragment>
        ) : (
          <div className={classes.title}>{item.content_title}</div>
        )
      }
      <div className={classes.infoWrp}>
        <div className={classes.leftInfo}>
          {
            loading ? (
              <Skeleton animation="wave" variant="circle" width={40} height={40} />
            ) : (
              <Avatar
                alt="avatar"
                src={item.author.author_photo ? `https://img.ezding.com.tw/photos/mymovie/act/${item.author.author_photo}` :"https://img.ezding.com.tw/photos/mymovie/act/ezding.png"} 
              />
            )
          }
          <div className={classes.day}>
            {
              loading ? (
                <React.Fragment>
                  <Skeleton animation="wave" height={20} width='50%'/>
                  <Skeleton animation="wave" height={20} width='50%'/>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div>{item.author.author_name ? item.author.author_name : '作者'}</div>
                  <div>{dateHander(item.created_time)}</div>
                </React.Fragment>
              )
            }
          </div>
        </div>
        {
          loading ? null : (
            item.eval != 1 ? null :  <div className={classes.icon}>有雷</div>
          )
        }

      </div>
      {loading ? (
        <Skeleton animation="wave" variant="rect" height={60} style={{ marginTop: 10}}/>
      ) : (
        <div className={classes.ctx}>{item.content_title}</div>
      )}
    </Card>
  );
}
