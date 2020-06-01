import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import {dateHander} from '../../helper/dateHelper'
import {imgCardStyles} from '../../styled/commonStyled'


export default function ImgCard(props) {
  const { item = null } = props;
  const classes = imgCardStyles();

  // console.log('-item-->',item);

  return (
    <Card className={classes.card} elevation={0}>
      <div className={classes.mediaBox}>
        <CardMedia
          className={classes.media}
          component="img"
          title="img"
          src={item.first_image ? item.first_image :'/static/placeholder.png'}
        />
      </div>
      <div className={classes.title}>{item.content_title}</div>
      <div className={classes.infoWrp}>
        <div className={classes.leftInfo}>
          <Avatar
            alt="avatar"
            src={item.author.author_photo ? `https://img.ezding.com.tw/photos/mymovie/act/${item.author.author_photo}` :"https://img.ezding.com.tw/photos/mymovie/act/ezding.png"} 
          />
          <div className={classes.day}>
            <React.Fragment>
              <div>{item.author.author_name ? item.author.author_name : '作者'}</div>
              <div>{dateHander(item.created_time)}</div>
            </React.Fragment>
          </div>
        </div>
        { item.eval != 1 ? null :  <div className={classes.icon}>有雷</div>}
      </div>
      <div className={classes.ctx}>{item.content_title}</div>
    </Card>
  );
}
