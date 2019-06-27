import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {newestProd} from '../action/index'
import Cookies from 'universal-cookie'

import header1 from './img/header.jpg';
import header1a from './img/img-header.jpg'
import header2 from './img/header2.jpg';
import header2a from './img/header2-martine-rose.jpg';
import header2b from './img/header2-balenciaga-trainers.jpg';
import header3 from './img/header3-alt.jpg';

import Footer from './Footer';

import "../css/home.css"

const cookie = new Cookies()

class Home extends Component {
  componentDidMount(){
    this.props.newestProd()
  }

  homeBody1 = () => {
    return(
      <div className="container p-5">
        <div className="d-flex row">
          <div className="card homeCard1 col-md-6 mt-4" >
            <Link to="/alldesigners"><img className="card-img-top" src={header1a} alt="Valentino" /></Link>
            <div className="card-body px-0">
              <p className="card-text">Relaxed, refined and rooted in reality. See the new season from Valentino.</p>
              <div className="text-center mt-4">
                <Link to={`/shop/women/allproducts`} className="btn btn-outline-dark buttonHome text-uppercase">shop women</Link>
              </div>
            </div>
          </div>
          <div className="card homeCard1 col-md-6 mt-2 mt-4" >
            <Link to="/alldesigners"><img className="card-img-top" src={header1} alt="Margiela" /></Link>
            <div className="card-body px-0">
              <p className="card-text">John Galliano has given Maison Margiela a new dimension. Shop the new collection.</p>
              <div className="text-center mt-4">
                <Link to={`/shop/men/allproducts`} className="btn btn-outline-dark buttonHome text-uppercase">shop men</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }

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
      // return (
      //   <div className="container homeBody2 pt-5">
      //     <div className="row">
      //       <div className="d-inline mx-auto">
      //         <Link to="/alldesigners"><img src={header2} alt="header2-prada"></img></Link>
      //         <Link to="/alldesigners" className="d-block text-center mt-3">THE HAT</Link>
      //         <Link to="/alldesigners" className="d-block text-center textHomeBody2">by Prada</Link>
      //       </div>
      //       <div className="d-inline mx-auto">
      //         <Link to="/alldesigners"><img src={header2a} alt="header2-martine-rose"></img></Link>
      //         <Link to="/alldesigners" className="d-block text-center mt-3">THE SHIRT</Link>
      //         <Link to="/alldesigners" className="d-block text-center textHomeBody2">by Martine Rose</Link>
      //       </div>
      //       <div className="d-inline mx-auto">
      //         <Link to="/alldesigners"><img src={header2b} alt="header2-balenciaga"></img></Link>
      //         <Link to="/alldesigners" className="d-block text-center mt-3">THE SHOES</Link>
      //         <Link to="/alldesigners" className="d-block text-center textHomeBody2">by Balenciaga</Link>
      //       </div>
      //     </div>
      //   </div>
      // )
    }

    homeBody3 = () => {
      return(
        <div className="container homeBody3 p-5">
            <Link to="/story"><img src={header3} alt="Acne Studios"></img></Link>
          <div className="text-center mt-4">
            <Link to="/story" className="homeBody3Head">IN FOCUS: ACNE STUDIOS</Link>
          </div>
          <div className="text-center mt-2">
           <Link to="/story" className="d-block">Nothing at Acne Studios is quite as you expected. These are key pieces from the new season, as worn by artist Albert Riera Galceran.</Link>
          </div>
        </div>
      )
    }  
  
  render() {
    console.log(this.props.products);
    

    if(cookie.get('status') === 'user'){
      return (
        <div>
          {this.homeBody1()}
          <div className="container text-center homeBody3Head homeBody2 mb-3 pt-5">
            Newest products
          </div>
          <div className="container homeBody2 pt-5">
            <div className="row">
              {this.homeBody2()}
            </div>
          </div>
          {this.homeBody3()}
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
            Newest products
          </div>
          <div className="container homeBody2 pt-5">
          <div className="row">
              {this.homeBody2()}
            </div>
          </div>
          {this.homeBody3()}
          <Footer/>
        </div>
      )
    } 
  }
}

const mps = state => {
  return {products: state.prod.products}
}

export default connect (mps, {newestProd}) (Home)