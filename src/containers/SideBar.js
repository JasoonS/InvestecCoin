import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setScreen } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class SideBar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.setScreen(0)}>Pay</button>
        <button onClick={() => this.props.setScreen(1)}>Analytics</button>
        <button onClick={() => this.props.setScreen(2)}>Recieve</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // const { selectWindow } = state
  // const {
  //   isFetching,
  //   lastUpdated,
  //   items: posts
  // } = postsByReddit[selectedReddit] || {
  //   isFetching: true,
  //   items: []
  // }

  return {
  }
}

export default connect(
  mapStateToProps,
  {setScreen}
)(SideBar)
