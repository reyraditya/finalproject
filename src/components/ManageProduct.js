import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../css/manageProduct.css'

export class ManageProduct extends Component {
  render() {
    return (
    <div>
        <div className="container-fluid d-flex mx-2">
          <div className="title col-2 mx-2">
            <Link to="/addproduct" className="d-block">Add Product</Link>
          </div>
          <div className="col-9">
            <div className="container containerAddPro">
              <h1 className="text-center title titleManagePro1">Manage Product</h1>
              <div className="mt-3">
                <p className="body text-center titleManagePro1">All Product</p>
                <table className="table table-hover titleManagePro mb-5">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">BRAND</th>
                            <th scope="col">PRODUCT NAME</th>
                            <th scope="col">CATEGORY</th>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">STOCK</th>
                            <th scope="col">PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.renderList()} */}
                        <tr>
                        {/* <td colSpan='4'><strong>TOTAL :</strong></td> */}
                        {/* <td>{`Rp.${this.loopTotal()}`}</td> */}
                        </tr>
                        {/* <Checkout dariCart={this.state.cartLocal} /> */}
                    </tbody>
                </table>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default ManageProduct
