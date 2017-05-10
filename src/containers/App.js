import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import MainWindow from './Screens/MainWindow.js'
import PayScreen from './Screens/PayScreen.js'
import Analytics from './Screens/Analytics.js'
import SideBar from './SideBar.js'

class App extends Component {
  static propTypes = {
  }

  componentDidMount() {
  }


  render() {
    console.log(this.props.screen)
    const displayMainWindow = () => {
      if (this.props.screen == 0)
          return <MainWindow/>
      else if(this.props.screen == 1)
          return <PayScreen/>
      else if(this.props.screen == 2)
          return <Analytics/>
    }
    return (
      <div>
        <SideBar/>
        <MainWindow/>
        {displayMainWindow()}
      </div>
    )
    // {screen}
  }
}

const mapStateToProps = state => {
  const { screen } = state
  // const {
  //   isFetching,
  //   lastUpdated,
  //   items: posts
  // } = postsByReddit[selectedReddit] || {
  //   isFetching: true,
  //   items: []
  // }

  return {
    screen
  }
}

export default connect(mapStateToProps)(App)
