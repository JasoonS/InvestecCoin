import { bubble as Menu } from 'react-burger-menu'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setScreen } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

import './sidebarstyle.css'


class SideBar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <Menu id="mymenu">
          <a id="about" onClick={() => this.props.setScreen(0)} className="menu-item" >overview</a>
          <a id="home" onClick={() => this.props.setScreen(1)} className="menu-item" >Pay</a>
          <a id="contact" onClick={() => this.props.setScreen(2)} className="menu-item" >Request</a>
          <a id="contact" onClick={() => this.props.setScreen(3)} className="menu-item" >Transactions History</a>
          <a id="contact" onClick={() => this.props.setScreen(4)} className="menu-item" >Accounts</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
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
