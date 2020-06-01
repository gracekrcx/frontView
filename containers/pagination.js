import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import {getApiArticles} from '../actions'


const useStyles = makeStyles(theme=>({
  root:{
    '& .MuiPaginationItem-root' :{
      [theme.breakpoints.down('xs')]: {
        'min-width': 20,
        height: 20,
        'font-size': 12,
      },
    }
  }
}))

const PaginationButtons = (props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const {getApiArticles, totalPage = 10, articleTyle, isData} = props

  const handleChange = (event, val) => {
    setPage(val)
    getApiArticles(val, articleTyle)
  }

  return (
    <div>
      {
        Object.keys(isData).length === 0 ? (
          <div></div>
        ) : (
          <Pagination
            className={classes.root}
            count={totalPage} 
            color="primary" 
            showFirstButton 
            showLastButton 
            defaultPage={1}
            onChange={handleChange}
          />
        )
      }
    </div>
  );
}

export default connect(
  state => ({
    totalPage: state.api.data.total_pages,
    articleTyle: state.api.articleTyle,
    isData: state.api.data,
  }), 
  dispatch => ({
    getApiArticles(val, type){
      dispatch(getApiArticles(val, type))
    }
  })
)(PaginationButtons)