import React, { Component } from 'react';

import '../css/cart.css';
import closeIcon from './icons/cross.png';
import Footer from './Footer';

class Cart extends Component{
    render(){
        return(
            <div>
                <div className="container cart">
                    <div className="row">
                        {/* Cart List */}
                        <div className="col-6">
                            <div className="cartTitle p-2 text-center">
                                Shopping Bag
                            </div>
                            <div className="cartBodyTitle border-bottom border-dark mt-3 row">
                                <div className="col-3 my-2"></div>
                                <div className="col-5 my-2">Item</div>
                                <div className="col-2 my-2 text-right">Price</div>
                                <div className="col-2 my-2">Remove</div>
                            </div>
                            <div className="cartBody border-bottom border-dark mt-3 row">
                                <div className="col-3">
                                    <img src="https://img.ssensemedia.com/image/upload/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/191168M192010_1.jpg" alt="img" className="m-2"></img>
                                </div>
                                <div className="col-5 my-2">
                                    <div>Maison Margiela</div>
                                    <div>Black Telephone Shirt</div>
                                    <div>Size: L</div>
                                    <div>320212302019</div>
                                    <div className="mt-5"><a href="#">Move to Wishlist</a></div>
                                </div>
                                <div className="col-2 my-2 text-right">380€</div>
                                <div className="col-2 my-2 closeIcon">
                                    <a href="#"><img className="ml-4" src={closeIcon} alt="close"></img></a>
                                </div>
                            </div>
                            {/* Total and Grandtotal */}
                            <div className="cartBodyTitle mt-3 row">
                                <div className="col-3 my-2"></div>
                                <div className="col-5 my-2">
                                    <div>total</div>
                                    <div>shipping estimation</div>
                                    <div>duties and taxes</div>
                                    <div className="mt-4 orderTotal">order total</div>
                                </div>
                                <div className="col-2 my-2 text-right">
                                    <div>380€</div>
                                    <div>0€</div>
                                    <div>Incl.</div>
                                    <div className="mt-4 orderTotal">380€</div>
                                </div>
                            </div>
                        </div>
                        {/* Checkout */}
                        <div className="col-6">
                            {/* Taro conditional disini */}
                            <div className="row">
                                <div className="col-10">
                                    <div className="cartTitle p-2 text-center">
                                        log in
                                    </div>
                                    <div className="borderCheckoutLogin mt-4 border-bottom border-dark">
                                        <div className="checkoutLogin mt-2 pt-2 px-5 mx-5">
                                            <div>username</div>
                                            <input className="p-2 mt-1" type="text"></input>
                                        </div>
                                        <div className="checkoutLogin mt-3 px-5 mx-5">
                                            <div>password</div>
                                            <input className="p-2 mt-1" type="password"></input>
                                        </div>
                                        <div className="mt-4 px-5 mx-5 mb-4 text-center">
                                            <button className="buttonCheckoutLogin btn buttonCheckout btn-block btn-dark">login</button>
                                        </div>
                                    </div>
                                    {/* Create account  */}
                                    <div className="cartTitle p-2 text-center">
                                        create an account
                                    </div>
                                    <div className="mt-4">
                                        <div className="checkoutLogin mt-2 pt-2 px-5 mx-5">
                                            <div>username</div>
                                            <input className="p-2 mt-1" type="text"></input>
                                        </div>
                                        <div className="checkoutLogin mt-2 pt-2 px-5 mx-5">
                                            <div>email</div>
                                            <input className="p-2 mt-1" type="email"></input>
                                        </div>
                                        <div className="checkoutLogin mt-3 px-5 mx-5">
                                            <div>password</div>
                                            <input className="p-2 mt-1" type="password"></input>
                                        </div>
                                        <div className="mt-4 px-5 mx-5 mb-4 text-center">
                                            <button className="btn buttonCheckout btn-block btn-dark">create</button>
                                        </div>
                                    </div>
                                </div>
                             </div>
                         </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>     
            </div>
        )
    }
}

export default Cart;