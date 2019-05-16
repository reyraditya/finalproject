import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../css/addProduct.css'

export default class AddProduct extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="container-fluid d-flex mx-2 mb-5">
          <div className="title col-2 mx-2">
            <Link to="/manageproduct" className="d-block my-2">All Product</Link>
            <Link to="/addproduct" className="d-block">Add Product</Link>
          </div>
          <div className="col-7">
            <div className="container containerAccount">
              <h1 className="text-center title">Manage Product</h1>
              <div className="mt-3">
                <p className="body text-center">Add Product</p>
                <div>
                    <form>
                        {/* Product name */}
                        <label className="bodyInput">
                            Product name
                        </label>
                        <input className="accountInputForm p-2 text-capitalize form-control" type="text" id="productname" ref={input => this.productName = input}/>
                        {/* Brand name */}
                        <div className="form-group">
                        <label className="bodyInput mt-3">
                            Designer
                        </label>
                        <select className="designerInputForm form-control text-capitalize">
                            <option selected disabled>Select designers</option>
                            <option>3.1 phillip lim</option>
                            <option>acne studios</option>
                            <option>balenciaga</option>
                            <option>berluti</option>
                        </select>
                        </div>
                        {/* Category */}
                        <label className="bodyInput mt-3 d-block">
                            Category
                        </label>
                        <label className="radio-inline ml-5 mr-4 ">
                            <input type="radio" name="category" value="accessories"/>
                            <label className="bodyInput d-inline ml-1 text-capitalize">
                                accessories
                            </label>
                        </label>
                        <label className="radio-inline mr-4">
                            <input type="radio" name="category" value="bags"/>
                            <label className="bodyInput d-inline ml-1 text-capitalize">
                                bags
                            </label>
                        </label>
                        <label className="radio-inline mr-4">
                            <input type="radio" name="category" value="clothing"/>
                            <label className="bodyInput d-inline ml-1 text-capitalize">
                                clothing
                            </label>
                        </label>
                        {/* Description */}
                        <label className="bodyInput mt-3 d-block">
                            Description
                        </label>
                        <textarea className="designerInputForm form-control" rows="10"></textarea>
                        {/* Sizing */}
                        <label className="bodyInput mt-3 d-block">
                            Sizes
                        </label>
                        <label className="radio-inline ml-4 mr-5 ">
                            <input type="radio" name="sizing" value="xs"/>
                            <label className="bodyInput d-inline ml-1 text-uppercase">
                                xs
                            </label>
                        </label>
                        <label className="radio-inline mr-5">
                            <input type="radio" name="sizing" value="s"/>
                            <label className="bodyInput d-inline ml-1 text-uppercase">
                                s
                            </label>
                        </label>
                        <label className="radio-inline mr-5">
                            <input type="radio" name="sizing" value="m"/>
                            <label className="bodyInput d-inline ml-1 text-uppercase">
                                m
                            </label>
                        </label>
                        <label className="radio-inline mr-5">
                            <input type="radio" name="sizing" value="l"/>
                            <label className="bodyInput d-inline ml-1 text-uppercase">
                                l
                            </label>
                        </label>
                        <label className="radio-inline mr-4">
                            <input type="radio" name="sizing" value="xl"/>
                            <label className="bodyInput d-inline ml-1 text-uppercase">
                                xl
                            </label>
                        </label>
                        {/* Stocks */}
                        <label className="bodyInput mt-3 d-block">
                            Stock
                        </label>
                        <input className="accountInputForm p-2 form-control" type="number" min="1" max="1000" id="stock" ref={input => this.stock = input}/>
                        {/* Price */}
                        <label className="bodyInput mt-3 d-block">
                            Price
                        </label>
                        <input className="accountInputForm p-2 form-control" type="number" min="1" id="price" ref={input => this.price = input}/>
                    </form>
                </div>    
                {/* <table className="table table-hover mb-5"> */}
                    {/* <tbody> */}
                        {/* {this.renderList()} */}
                        {/* <tr> */}
                        {/* <td colSpan='4'><strong>TOTAL :</strong></td> */}
                        {/* <td>{`Rp.${this.loopTotal()}`}</td> */}
                        {/* </tr> */}
                        {/* <Checkout dariCart={this.state.cartLocal} /> */}
                    {/* </tbody> */}
                {/* </table> */}
              </div>
            </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
