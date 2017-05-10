import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import iCoin from '../build/contracts/InvestecCoin.json'
import Web3 from 'web3'

let self = this
const provider = window.web3.currentProvider
// const provider = new Web3.providers.HttpProvider('http://localhost:8545')
const contract = require('truffle-contract')
const iC = contract(iCoin)
iC.setProvider(provider)
const web3RPC = new Web3(provider)
let iic

ic.deployed().then(function(instance) {
  iic = instance
  return iic.mint(mint, {from: accounts[0]})
}).then((a) => {
 // peopleInstance.getPeople().then(function(result) {
 //   self.setState(
 //     {
 //       ...self.state,
 //       firstNames: result[0].map(i => window.web3.toAscii(i)),
 //       lastNames: result[1].map(i => window.web3.toAscii(i)),
 //       ages: String(result[2]).split(',') // this is a bit of a hack to get an array of int strings from bigints
 //     }
 //   )
 // })
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
