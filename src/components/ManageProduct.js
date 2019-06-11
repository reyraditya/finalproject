import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {getProducts, deleteProducts} from '../action/index';
import '../css/manageProduct.css'

class ManageProduct extends Component {
    
    componentDidMount(){
        this.props.getProducts()
    }

    deleteProduct = async (productid) => {
        await 
        this.props.deleteProducts(productid)
        this.props.getProducts()
    }

    renderListProd = () => {    
        if(this.props.products.length){
            return this.props.products.map((product, i) => {
                    return (
                    <tbody>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.designer}</td>
                            <td>{product.product_name}</td>
                            <td className="text-capitalize">{product.gender}</td>
                            <td className="text-capitalize">{product.category}</td>
                            <td>{product.description}</td>
                            <td>{product.stock}</td>
                            <td>${product.price}</td>
                            <td>
                                <Link to={`/editproduct/${i}`}><button className="buttonProdEdit">EDIT</button></Link>
                                <button className="buttonProdDelete mt-3" onClick={() => {this.deleteProduct(product.id)}}>
                                    DELETE
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    )
                }
            ) 
        }
    }

render() {
    console.log(this.props.products);
    
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
                <table className="table table-hover titleManagePro mb-5 mt-4">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">DESIGNER</th>
                            <th scope="col">PRODUCT NAME</th>
                            <th scope="col">GENDER</th>
                            <th scope="col">CATEGORY</th>
                            <th scope="col">DESCRIPTION</th>
                            <th scope="col">STOCK</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">ACTIONS</th>
                        </tr>
                    </thead>
                        {this.renderListProd()}
                </table>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

const mps = state => {
    return{products: state.prod.products}
}

export default connect(mps, {getProducts, deleteProducts})(ManageProduct)
