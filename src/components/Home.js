import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {newestProd} from '../action/index'
import {newestProdMen} from '../action/index'
import Cookies from 'universal-cookie'

import header1 from './img/898589-800w.jpg';
import header1a from './img/chanelchance.jpg'
import header3 from './img/header3-alt.jpg';

import Footer from './Footer';

import "../css/home.css"

const cookie = new Cookies()

class Home extends Component {
  componentDidMount(){
    this.props.newestProd()
    this.props.newestProdMen()
  }

  homeBody1 = () => {
    return(
      <div className="container p-5">
        <div className="d-flex row">
          <div className="card homeCard1 col-md-6 mt-4" >
            <Link to="/detailproduct/31"><img className="card-img-top" src={header1a} alt="Valentino" /></Link>
            <div className="card-body px-0">
              <p className="card-text">The signature CHANCE bottle is reinvented with a silver cap and golden accent.</p>
              <div className="text-center mt-4">
                <Link to={`/shop/women/allproducts/alldesigner`} className="btn btn-outline-dark buttonHome text-uppercase">shop women</Link>
              </div>
            </div>
          </div>
          {/* Prada Luna Rossa ad */}
          <div className="card homeCard1 col-md-6 mt-2 mt-4" >
            <Link to="/detailproduct/54">
              <img className="card-img-top" src={header1} alt="Margiela" />
            </Link>
            <div className="card-body px-0">
              <p className="card-text">The latest iteration of Prada Luna Rossa, Prada Black comes on energetic but leaves a distinct impression.</p>
              <div className="text-center mt-4">
                <Link to={`/shop/men/allproducts/alldesigner`} className="btn btn-outline-dark buttonHome text-uppercase">shop men</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }

    // List of newest products
    homeBody2 = () => {
      if(this.props.products.length){
        return(this.props.products.map(product => {
            return(
                <div className="newestProduct col-4 cardDisplay">
                          <div className="card">
                            <Link to={`/detailproduct/${product.id}`}>
                              <img
                                className="card-img-top"
                                src={`http://localhost:1995/addproduct/addimages/${product.image}`}
                                alt="img"
                              />
                            </Link>
                            <div className="card-body text-center">
                              <Link to={`/detailproduct/${product.id}`}>
                                <p className="card-title">
                                  {product.designer}
                                </p>
                              </Link>
                              <Link to={`/detailproduct/${product.id}`}>
                                <p className="card-text text-center cardText">
                                  {product.product_name}
                                </p>
                              </Link>
                              <p className="card-text">${product.price}</p>
                            </div>
                          </div>
                        </div>

                  )
            })
          )
      }
    }

    homeBody3 = () => {
      if(this.props.mensproducts.length){
        return(this.props.mensproducts.map(product => {
            return(
                <div className="newestProduct col-4 cardDisplay">
                          <div className="card">
                            <Link to={`/detailproduct/${product.id}`}>
                              <img
                                className="card-img-top"
                                src={`http://localhost:1995/addproduct/addimages/${product.image}`}
                                alt="img"
                              />
                            </Link>
                            <div className="card-body text-center">
                              <Link to={`/detailproduct/${product.id}`}>
                                <p className="card-title">
                                  {product.designer}
                                </p>
                              </Link>
                              <Link to={`/detailproduct/${product.id}`}>
                                <p className="card-text text-center cardText">
                                  {product.product_name}
                                </p>
                              </Link>
                              <p className="card-text">${product.price}</p>
                            </div>
                          </div>
                        </div>
              
                  )
            })
          )
      }
    }  
  
  render() {
    console.log(this.props.products);
    

    if(cookie.get('status') === 'user'){
      return(
        <div>
          {this.homeBody1()}
          <div className="container text-center homeBody3Head homeBody2 mb-3 pt-5">
            Women's newest arrivals
          </div>
          <div className="container homeBody2 pt-5">
            <div className="row">
                {this.homeBody2()}
            </div>
          </div>
          <div className="container text-center homeBody3Head homeBody2 mb-3 pt-5 mt-5">
            Men's newest arrivals
          </div>
          <div className="container homeBody2 pt-5">
            <div className="row mb-5 pt-5">
              {this.homeBody3()}
            </div>
          </div>
          <Footer/>
        </div>
      )
    }else if(cookie.get('status') === 'admin'){
      return(
        <Redirect to="/manageproduct"/>
      )
    } else {
      return(
        <div>
          {this.homeBody1()}
          <div className="container text-center homeBody3Head homeBody2 mb-3 pt-5">
            Women's newest arrivals
          </div>
          <div className="container homeBody2 pt-5">
            <div className="row">
                {this.homeBody2()}
            </div>
          </div>
          <div className="container text-center homeBody3Head homeBody2 mb-3 pt-5 mt-5">
            Men's newest arrivals
          </div>
          <div className="container homeBody2 pt-5">
            <div className="row mb-5 pt-5">
              {this.homeBody3()}
            </div>
          </div>
          <Footer/>
        </div>
      )
    } 
  }
}

const mps = state => {
  return {
    products: state.prod.products,
    mensproducts: state.prod.newMen
  }
}

export default connect (mps, {newestProd, newestProdMen}) (Home)