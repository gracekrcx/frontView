import React from 'react';
import Card from '@material-ui/core/Card';
import Skeleton from '@material-ui/lab/Skeleton';
import {imgCardStyles} from '../../styled/commonStyled'

const imgCardLoading = ()=>{
  const classes = imgCardStyles();

  return(
    <Card className={classes.card} elevation={0}>
      <div className={classes.mediaBox}>
        <Skeleton animation="wave" variant="rect" height={180}/>
      </div>
      <React.Fragment>
        <Skeleton animation="wave" height={28}  />
        <Skeleton animation="wave" height={28} style={{ marginBottom: 5}} />
      </React.Fragment>
      <div className={classes.infoWrp}>
        <div className={classes.leftInfo}>
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
          <div className={classes.day}>
            <React.Fragment>
              <Skeleton animation="wave" height={20} width='50%'/>
              <Skeleton animation="wave" height={20} width='50%'/>
            </React.Fragment>
          </div>
        </div>
      </div>
      <Skeleton animation="wave" variant="rect" height={60} style={{ marginTop: 10}}/>
    </Card>
  )
}

export default imgCardLoading