import React from 'react';
import ImgCardSec from '../containers/imgCardSec'
import {ContentWrap} from '../styled/commonStyled'
import Pagination from '../components/common/pagination'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  block:{
    display: 'flex',
    'justify-content': 'center',
    'margin-top': 50,
  }
})

export default function App() {
  const classes = useStyles();

  return (
    <ContentWrap>
      <ImgCardSec/>
      <div className={classes.block}>
        <Pagination/>
      </div>
    </ContentWrap>
  );
}