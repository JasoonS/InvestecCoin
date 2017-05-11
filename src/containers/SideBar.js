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
          <a id="home" onClick={() => this.props.setScreen(0)} className="menu-item" >Pay</a>
          <a id="about" onClick={() => this.props.setScreen(1)} className="menu-item" >Analytics</a>
          <a id="contact" onClick={() => this.props.setScreen(2)} className="menu-item" >Recieve</a>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
          <ul id="transitionList" className="main">
          <h2>Payments: List of transitions</h2>
            <li >
              <ul className="listStuff">
                <li><a href="#home"><img src="img/amazon.png"  /></a></li>
                <li><a href="#news">R8000</a></li>
                <li><a href="#contact">08:00 am</a></li>
                <li><a href="#about"> Cape Town</a></li>
                <li><a href="#about"> Gadgets</a></li>
              </ul>
            </li>
            <li >
              <ul className="listStuff">
                <li><a href="#home"><img src="img/8.png"  /></a></li>
                <li><a href="#news">R8000</a></li>
                <li><a href="#contact">08:00 am</a></li>
                <li><a href="#about"> Cape Town</a></li>
                <li><a href="#about"> Gadgets</a></li>
              </ul>
            </li>
            <li >
              <ul className="listStuff">
                <li><a href="#home"><img src="img/2.png"  /></a></li>
                <li><a href="#news">R8000</a></li>
                <li><a href="#contact">08:00 am</a></li>
                <li><a href="#about"> Cape Town</a></li>
                <li><a href="#about"> Gadgets</a></li>
              </ul>
            </li>
            <li >
              <ul className="listStuff">
                <li><a href="#home"><img src="img/3.png"  /></a></li>
                <li><a href="#news">R8000</a></li>
                <li><a href="#contact">08:00 am</a></li>
                <li><a href="#about"> Cape Town</a></li>
                <li><a href="#about"> Gadgets</a></li>
              </ul>
            </li>
            <li >
              <ul className="listStuff">
                <li><a href="#home"><img src="img/4.png"  /></a></li>
                <li><a href="#news">R8000</a></li>
                <li><a href="#contact">08:00 am</a></li>
                <li><a href="#about"> Cape Town</a></li>
                <li><a href="#about"> Gadgets</a></li>
              </ul>
            </li>
            <li >
              <ul className="listStuff">
                <li><a href="#home"><img src="img/5.png"  /></a></li>
                <li><a href="#news">R8000</a></li>
                <li><a href="#contact">08:00 am</a></li>
                <li><a href="#about"> Cape Town</a></li>
                <li><a href="#about"> Gadgets</a></li>
              </ul>
            </li>
            <li >
              <ul className="listStuff">
                <li><a href="#home"><img src="img/6.png"  /></a></li>
                <li><a href="#news">R8000</a></li>
                <li><a href="#contact">08:00 am</a></li>
                <li><a href="#about"> Cape Town</a></li>
                <li><a href="#about"> Gadgets</a></li>
              </ul>
            </li>
            <li >
              <ul className="listStuff">
                <li><a href="#home"><img src="img/7.png"  /></a></li>
                <li><a href="#news">R8000</a></li>
                <li><a href="#contact">08:00 am</a></li>
                <li><a href="#about"> Cape Town</a></li>
                <li><a href="#about"> Gadgets</a></li>
              </ul>
            </li>
            <li >
              <ul className="listStuff">
                <li><a href="#home"><img src="img/8.png"  /></a></li>
                <li><a href="#news">R8000</a></li>
                <li><a href="#contact">08:00 am</a></li>
                <li><a href="#about"> Cape Town</a></li>
                <li><a href="#about"> Gadgets</a></li>
              </ul>
            </li>
            <li >
              <ul className="listStuff">
                <li><a href="#home"><img src="img/9.png"  /></a></li>
                <li><a href="#news">R8000</a></li>
                <li><a href="#contact">08:00 am</a></li>
                <li><a href="#about"> Cape Town</a></li>
                <li><a href="#about"> Gadgets</a></li>
              </ul>
            </li>

          </ul>
          <button className="makeNewPayment">Pay</button>
          <button className="RequestPay">Request Pay</button>
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
