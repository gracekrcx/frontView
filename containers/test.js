import React from 'react';
import { connect } from 'react-redux'
import { clickMember } from '../actions'

// 測試頁
const Test = props => {
  const {
    qtyMember,
    qtyPay,
    clickMember,
  } = props

  return(
    <div>
      <div>{`${qtyMember}- + -${qtyPay}`}</div>
      <div onClick={()=>clickMember(22)}>handle Click</div>
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
    }
  })
)(Test)