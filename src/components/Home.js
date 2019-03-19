import React, { Component } from 'react';

import header1 from './img/header.jpg';
import header1a from './img/img-header.jpg'
import header2 from './img/header2.jpg';
import header2a from './img/header2-martine-rose.jpg';
import header2b from './img/header2-balenciaga-trainers.jpg'



class Home extends Component {
  homeBody1 = () => {
    return(
      <div className="container p-5">
        <div className="d-flex row">
          <div className="card homeCard1 col-md-6 mt-5" >
            <img className="card-img-top" src={header1a} alt="Valentino" />
            <div className="card-body px-0">
              <p className="card-text">Relaxed, refined and rooted in reality. See the new season from Valentino.</p>
              <div className="text-center">
                <a href="/home" className="btn btn-outline-dark">SHOP NOW</a>
              </div>
            </div>
          </div>
          <div className="card homeCard1 col-md-6 mt-2 mt-5" >
            <img className="card-img-top" src={header1} alt="Liam Hodges" />
            <div className="card-body px-0">
              <p className="card-text">John Galliano has given Maison Margiela a new dimension. Shop the new collection.</p>
              <div className="text-center">
                <a href="/home" className="btn btn-outline-dark">SHOP NOW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }

    homeBody2 = () => {
      return (
        <div className="container homeBody2 pt-5">
          <div className="row">
            <div className="d-inline mx-auto">
              <img src={header2} alt="header2"></img>
              <a href="/alldesigners" className="d-block text-center mt-3">THE HAT</a>
              <p className="d-block text-center">by Prada</p>
            </div>
            <div className="d-inline mx-auto">
              <img src={header2a} alt="header2-martine-rose"></img>
              <a href="/alldesigners" className="d-block text-center mt-3">THE SHIRT</a>
              <p className="d-block text-center">by Martine Rose</p>
            </div>
            <div className="d-inline mx-auto">
              <img src={header2b} alt="header2-balenciaga"></img>
              <a href="/alldesigners" className="d-block text-center mt-3">THE SHOES</a>
              <p className="d-block text-center">by Balenciaga</p>
            </div>
          </div>
        </div>
      )
    }

    footer = () => {
      return(
        <div className="row">
          
        </div>  
      )
    }
  
  
  render() {
    return (
      <div>
        {this.homeBody1()}
        {this.homeBody2()}
        {this.footer()}
      </div>
    )
  }
}

export default (Home)