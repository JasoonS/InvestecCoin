import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
var d3 = require("d3");

class Analytics extends Component {
  static propTypes = {

  }

  componentDidMount(){
    window.makeGraphs();
  }
  render() {
    return (
      <div>
        <div className="MainScreenDiv">
          Analytics
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(Analytics)
