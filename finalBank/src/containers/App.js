import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import MainWindow from './Screens/MainWindow.js'
import PayScreen from './Screens/PayScreen.js'
import Analytics from './Screens/Analytics.js'
import Transections from './Screens/transectionsWindow.js'
import SideBar from './SideBar.js'

class App extends Component {
  static propTypes = {
  }

  componentDidMount() {
  }


  render() {
    console.log("This is the screen : "+this.props.screen)
    const displayMainWindow = () => {
      if (this.props.screen == 0)
          return <Analytics/>
      else if(this.props.screen == 1)
          return <PayScreen/>
      else if(this.props.screen == 2)
          return <MainWindow  />
      else if(this.props.screen == 3)
          return <Transections />
    }
    return (
      <div>
        <PayScreen/>
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
