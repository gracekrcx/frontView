import React from 'react';
import Header from '../components/common/header'
import Footer from '../components/common/footer'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.default
  }
}))

const Tamplate = props => {    
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Tamplate
	
