import { bubble as Menu } from 'react-burger-menu'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setScreen } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

import './analytics.css'


class SideBar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className="analytics">

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
