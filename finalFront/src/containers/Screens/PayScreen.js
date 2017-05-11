import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InvestecCoin from '../../../build/contracts/InvestecCoin.json'
import Web3 from 'web3'

import './sidebarstyle.css'


class Transections extends Component {
  constructor(props) {
    super(props)

    this.setInputAmount = this.setInputAmount.bind(this)
    this.setInputMessage = this.setInputMessage.bind(this)
    this.setInputAccount = this.setInputAccount.bind(this)
    this.pay = this.pay.bind(this)

    this.state = {
      message: "",
      account: "",
      amount: 0
    }
  }

  static propTypes = {

  }

  pay() {
    let self = this

    const provider = window.web3.currentProvider
    // const provider = new Web3.providers.HttpProvider('http://localhost:8545')
    const contract = require('truffle-contract')
    const iCoin = contract(InvestecCoin)
    iCoin.setProvider(provider)

    // // Get Web3 so we can get our accounts.
    const web3 = new Web3(provider)


    web3.eth.getAccounts(function(error, accounts) {
      console.log(accounts)
      let ic
      iCoin.deployed().then(function(iC) {
        ic = iC
        // 1
        console.log('SendMoney')
        return ic.transfer(self.state.account, self.state.amount, {from: accounts[0]})
      })
      // .then((res) => {
      //   return ic.balanceOf(user)
      // })

      // 2
      //   return ic.redeemCoins(100, {from: user})
      // })
      // .then((res) => {
      //   return ic.balanceOf(user)
      // }).then((res) => {
      //   console.log(res)
      })

    // const provider = window.web3.currentProvider
    // // const provider = new Web3.providers.HttpProvider('http://localhost:8545')
    // const contract = require('truffle-contract')
    // const simpleStorage = contract(SimpleStorageContract)
    // simpleStorage.setProvider(provider)
    // const web3RPC = new Web3(provider)
    //
    // let simpleStorageInstance
    //
    // web3RPC.eth.getAccounts(function(error, accounts) {
    //   simpleStorage.deployed().then(function(instance) {
    //     simpleStorageInstance = instance
    //     return simpleStorageInstance.set(self.state.inputValue, {from: accounts[0]})
    //   }).then(function(result) {
    //     // Get the value from the contract to prove it worked.
    //     return simpleStorageInstance.get.call(accounts[0])
    //   }).then(function(result) {
    //     // Update state with the result.
    //     return self.setState({ storageValue: result.c[0] })
    //   })
    // })
  }

  setInputAmount(e) {
    this.setState({
      ...this.state,
      amount: e.target.value
    })
  }
  setInputMessage(e) {
    this.setState({
      ...this.state,
      message: e.target.value
    })
  }
  setInputAccount(e) {
    this.setState({
      ...this.state,
      account: e.target.value
    })
  }

  render() {
    return (
      <div id="maincomponant">

      <div className={'form'}>
      <h3>Initiate Payment:</h3>
        <input type="text" value={this.state.account} onChange={this.setInputAccount} placeholder="To : "/>
        <input value={this.state.amount} type="number" onChange={this.setInputAmount} placeholder="Amount : R"/>
        <input type="text" value={this.state.message} onChange={this.setInputMessage} placeholder="Message : "/>
        <button onClick={this.pay}>Pay</button>
      </div>
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
