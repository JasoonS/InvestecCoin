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
        <ul id="transitionList" className="main">
        <h2>Payments: List of transitions</h2>
           <li >
             <ul className="listStuff">
               <li><a href="#home"><img src="img/amazon.png"   alt="img"/></a></li>
               <li><a href="#news">R8000</a></li>
               <li><a href="#contact">08:00 am</a></li>
               <li><a href="#about"> Cape Town</a></li>
               <li><a href="#about"> Gadgets</a></li>
               <li><a href="#about">❯</a></li>
             </ul>
           </li>
           <li >
   <ul className="listStuff">
     <li><a href="#home"><img src="img/8.png"   alt="img"/></a></li>
     <li><a href="#news">R8000</a></li>
     <li><a href="#contact">08:00 am</a></li>
     <li><a href="#about"> Cape Town</a></li>
     <li><a href="#about"> Gadgets</a></li>
                    <li><a href="#about">❯</a></li>
   </ul>
 </li>
 <li >
   <ul className="listStuff">
     <li><a href="#home"><img src="img/2.png"   alt="img"/></a></li>
     <li><a href="#news">R8000</a></li>
     <li><a href="#contact">08:00 am</a></li>
     <li><a href="#about"> Cape Town</a></li>
     <li><a href="#about"> Gadgets</a></li>
                    <li><a href="#about">❯</a></li>
   </ul>
 </li>
 <li >
   <ul className="listStuff">
     <li><a href="#home"><img src="img/3.png"  alt="img" /></a></li>
     <li><a href="#news">R8000</a></li>
     <li><a href="#contact">08:00 am</a></li>
     <li><a href="#about"> Cape Town</a></li>
     <li><a href="#about"> Gadgets</a></li>
                    <li><a href="#about">❯</a></li>
   </ul>
 </li>
 <li >
   <ul className="listStuff">
     <li><a href="#home"><img src="img/4.png"  alt="img" /></a></li>
     <li><a href="#news">R8000</a></li>
     <li><a href="#contact">08:00 am</a></li>
     <li><a href="#about"> Cape Town</a></li>
     <li><a href="#about"> Gadgets</a></li>
                    <li><a href="#about">❯</a></li>
   </ul>
 </li>
 <li >
   <ul className="listStuff">
     <li><a href="#home"><img src="img/5.png"  alt="img" /></a></li>
     <li><a href="#news">R8000</a></li>
     <li><a href="#contact">08:00 am</a></li>
     <li><a href="#about"> Cape Town</a></li>
     <li><a href="#about"> Gadgets</a></li>
                    <li><a href="#about">❯</a></li>
   </ul>
 </li>
 <li >
   <ul className="listStuff">
     <li><a href="#home"><img src="img/6.png"  alt="img" /></a></li>
     <li><a href="#news">R8000</a></li>
     <li><a href="#contact">08:00 am</a></li>
     <li><a href="#about"> Cape Town</a></li>
     <li><a href="#about"> Gadgets</a></li>
                    <li><a href="#about">❯</a></li>
   </ul>
 </li>
 <li >
   <ul className="listStuff">
     <li><a href="#home"><img src="img/7.png"  alt="img" /></a></li>
     <li><a href="#news">R8000</a></li>
     <li><a href="#contact">08:00 am</a></li>
     <li><a href="#about"> Cape Town</a></li>
     <li><a href="#about"> Gadgets</a></li>
                    <li><a href="#about">❯</a></li>
   </ul>
 </li>
 <li >
   <ul className="listStuff">
     <li><a href="#home"><img src="img/8.png"  alt="img" /></a></li>
     <li><a href="#news">R8000</a></li>
     <li><a href="#contact">08:00 am</a></li>
     <li><a href="#about"> Investec</a></li>
     <li><a href="#about"> Gadgets</a></li>
    <li><a href="#about">❯</a></li>
   </ul>
 </li>
 <li >
   <ul className="listStuff">
     <li><a href="#home"><img src="img/9.png"   alt="img"/></a></li>
     <li><a href="#news">R8000</a></li>
     <li><a href="#contact">08:00 am</a></li>
     <li><a href="#about"> Cape Town</a></li>
     <li><a href="#about"> Gadgets</a></li>
                    <li><a href="#about">❯</a></li>
   </ul>
 </li>
        </ul>
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
