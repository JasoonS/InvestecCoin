import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './sidebarstyle.css'
class Transections extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div id="maincomponant">

      <form>
      <h3>Initiate Payment:</h3>
        <input type="text" placeholder="To : "/>
        <input type="text" placeholder="Amount : R"/>
        <input type="text" placeholder="Message : "/>        
        <button>Pay</button>
      </form>
        <button className="makeNewPayment">Pay</button>
        <button className="RequestPay">Request</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  }
}

export default connect(mapStateToProps)(Transections)
