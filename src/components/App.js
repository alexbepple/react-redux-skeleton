import React from 'react'
import {connect} from 'react-redux'

const Message = ({message}) => (
  <h1>{message}</h1>
)

const mapState = state => ({
  message: state.message
})

export default connect(mapState)(Message)

