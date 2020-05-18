import React from 'react';
import { connect } from 'react-redux'
import { clickMember, getApi } from '../actions'

// 測試頁
const Test = props => {
  const {
    qtyMember,
    qtyPay,
    clickMember,
    getApi,
  } = props

  const style = {
    background:'#fff',
    height:'40px',
  }

  return(
    <div>
      <div>{`${qtyMember}- + -${qtyPay}`}</div>
      <div onClick={()=>clickMember(22)}>handle Click</div>
      <div style={style} onClick={()=>getApi(4)}>handle Click</div>
    </div>
  )
}

export default connect(
  state => ({
    qtyMember : state.member.qty,
  }),
  dispatch => ({
    clickMember(val) {
      dispatch(clickMember({val:val}))
    }, 
    getApi(page) {
      dispatch(getApi({page}))
    }
  })
)(Test)