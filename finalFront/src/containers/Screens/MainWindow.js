import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
