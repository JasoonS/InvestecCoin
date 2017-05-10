import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class MainWindow extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        mainWindow
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(MainWindow)
