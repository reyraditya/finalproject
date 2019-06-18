import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Cookies from 'universal-cookie';

import {getWishlist, removeWishlist} from '../action/index';

import closeIcon from './icons/cross.png';

import '../css/wishlist.css'

const cookie = new Cookies()

class Wishlist extends Component {
    componentDidMount(){
        this.props.getWishlist(cookie.get('idLogin'))
    }

    onRemoveWishlist = async (id, userid) => {
        await this.props.removeWishlist(id)
        this.props.getWishlist(userid)
    }

    renderList = () => {
        if(this.props.wishlist.length){
            return this.props.wishlist.map(wishy => {
                return (
                        <div className="col-3 pb-4 cardDisplay">
                            <div className="card">
                                <Link to={`/detailproduct/${wishy.product_id}`}>
                                    <img className="card-img-top" src={`http://localhost:1995/addproduct/addimages/${wishy.image}`} alt="img"/>
                                </Link>
                                <div className="card-body">
                                    < Link to={`/detailproduct/${wishy.product_id}`}>
                                        <p className="card-title text-center">
                                            {wishy.designer}
                                        </p>
                                    </Link>
                                    <Link to={`/detailproduct/${wishy.product_id}`}>
                                        <p className="card-text text-center cardText">
                                        {wishy.product_name}
                                        </p>
                                    </Link>
                                    <p className="card-text text-center">${wishy.price}</p>
                                </div>
                                <div>
                                    <button className="btn btn-block buttonDetailProduct2 mt-1 text-uppercase" onClick={() => {this.onRemoveWishlist(wishy.id, cookie.get('idLogin'))}}>
                                    <div className="addToWishlist">
                                        <img className="closeWishlist d-inline mx-2" src={closeIcon} alt='close'></img>
                                         <div className="d-inline">remove</div>
                                    </div>
                                 </button>
                                </div>
                            </div>
                        </div>
                )
            })
        }
    }

  render() {
    console.log(this.props.wishlist.length); 
    console.log(this.props.wishlist); 

    if(this.props.wishlist.length !== 0){
        return (
            <div className="container-fluid">
                <div className="mt-5 pt-3 titleWishlist text-center text-uppercase">
                  Wishlist
                </div>
                <div className="mt-3 bodyWishlist text-center">
                    Use this page to manage the items you have added to your wishlist. Items saved can be removed or added to your shopping bag for purchase.
                </div>
                <div className="container mt-5">
                    <div className="row">
                        {this.renderList()}
                    </div>
                </div>
            </div>
          )
    } else {
        return(
            <div className="container-fluid">
                <div className="mt-5 pt-5 titleWishlist text-center text-uppercase">
                   create a wishlist
                </div>
                <div className="mt-5 bodyWishlist text-center">
                    Use this page to manage the items you have added to your wishlist. Items saved can be removed or added to your shopping bag for purchase.
                </div>
                <div className="container mt-3">
                    <div className="d-flex text-center">
                        <div className="mx-auto">
                            <Link to="/shop/men/allproducts">
                                <button className="d-inline mx-2 buttonWishlist buttonAccount">
                                    shop men
                                </button>
                            </Link>
                            <Link to="/shop/women/allproducts">
                                <button className="d-inline buttonWishlist buttonAccount">
                                    shop woman
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  }
}

const mps = state => {
    return {wishlist: state.prod.cartwish}
}

export default connect (mps, {getWishlist, removeWishlist}) (Wishlist)