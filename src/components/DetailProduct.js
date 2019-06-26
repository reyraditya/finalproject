import React, { Component } from 'react';
import axios from '../config/axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie'

import {addWishlist, addCart} from '../action/index'

import heart from './icons/heart.png'

const cookie = new Cookies()

class DetailProduct extends Component {
    state = {
        products: []
    }

  componentDidMount(){
      this.getDetailProduct()
  }

    getDetailProduct = async () => {
        const { productid } = this.props.match.params
        const res = await axios.get(`/detailproduct/${productid}`)
        console.log(res.data);

        this.setState({
            products: res.data
        })    
        console.log(this.state);
        
    }


  render() {
      console.log(this.props.match.params.productid);
      console.log(this.state.products);
      
      const {products} = this.state

      if(products.length !== 0) {
          var{
              id,
              product_name,
              designer,
              category,
              description,
              price,
              image
          } = products[0]
      }

      console.log(id);
    
    if(cookie.get('idLogin')){
        return (
          <div className="container p-5 mt-5">
            <div className="d-flex row">
              <div className="card homeCard1 mt-5 col-md-6 mt-4" >
                    <img className="card-img-top" src={`http://localhost:1995/addproduct/addimages/${image}`} 
                    alt={image}/>
              </div>
              <div className="card homeCard1 mt-5 col-md-6 mt-2 mt-4" >
                <div className="card-body px-0">
                    <div className="mt-5">
                        <div className="designerDetailProduct pb-2">
                            {designer}
                        </div>
                        <div className="bodyDetailProduct pt-2">
                            {product_name}
                        </div>
                        <div className="bodyDetailProduct2 pt-1">
                            {category}
                        </div>
                        <div className="bodyDetailProduct pt-1">
                            ${price}
                        </div>
                        <div className="bodyDetailProduct3 pt-3">
                            {description}
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-block buttonDetailProduct mt-5 text-uppercase" onClick={() => {
                            this.props.addCart(id, cookie.get('idLogin'))}}>
                            add to bag
                        </button>
                    </div>
                    <div>
                        <button className="btn btn-block buttonDetailProduct2 mt-3 text-uppercase" onClick={() => {this.props.addWishlist(id, cookie.get('idLogin'))}}>
                            <div className="addToWishlist">
                                <img className="heartWishlist d-inline mx-2" src={heart} alt='heart'></img>
                                <div className="d-inline">add to wishlist</div>
                            </div>
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )
    } else {
        return (
            <div className="container p-5 mt-5">
              <div className="d-flex row">
                <div className="card homeCard1 mt-5 col-md-6 mt-4" >
                      <img className="card-img-top" src={`http://localhost:1995/addproduct/addimages/${image}`} 
                      alt={image}/>
                </div>
                <div className="card homeCard1 mt-5 col-md-6 mt-2 mt-4" >
                  <div className="card-body px-0">
                      <div className="mt-5">
                          <div className="designerDetailProduct pb-2">
                              {designer}
                          </div>
                          <div className="bodyDetailProduct pt-2">
                              {product_name}
                          </div>
                          <div className="bodyDetailProduct2 pt-1">
                              {category}
                          </div>
                          <div className="bodyDetailProduct pt-1">
                              ${price}
                          </div>
                          <div className="bodyDetailProduct3 pt-3">
                              {description}
                          </div>
                      </div>
                      <div>
                          <Link to="/login">
                            <button className="btn btn-block buttonDetailProduct mt-5 text-uppercase" onClick={() => {
                                this.props.addCart(id, cookie.get('idLogin'))}}>
                                add to bag
                            </button>
                          </Link>
                      </div>
                      <div>
                          <Link to="/login">
                          <button className="btn btn-block buttonDetailProduct2 mt-3 text-uppercase" onClick={() => {this.props.addWishlist(id, cookie.get('idLogin'))}}>
                              <div className="addToWishlist">
                                  <img className="heartWishlist d-inline mx-2" src={heart} alt='heart'></img>
                                  <div className="d-inline">add to wishlist</div>
                              </div>
                          </button>
                          </Link>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          )
    }
  }
}

export default connect (null, {addWishlist, addCart}) (DetailProduct)
