import React from 'react';
import { connect } from 'react-redux'
import { getApi } from '../actions'

const Api = props => {

  const {getApi} = props

  const style = {
    background:'#fff',
    height:'40px',
  }

  return(
    <div>
      <div style={style} onClick={()=>getApi(4)}>handle Click</div>
    </div>
  )
}

export default connect(
  state => ({
    getData : state.api.data,
  }),
  dispatch => ({
    getApi(page) {
      dispatch(getApi({page}))
    }
  })
)(Api)