import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import {addProduct} from '../action/index'

import addIcon from '../components/icons/add.png'
import closeIcon from '../components/icons/cross.png'

import '../css/addProduct.css'

class AddProduct extends Component {
    constructor(props) {
        super(props);
         this.state = { pictures: [], file: [] };
         this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(event.target.files);
        // console.log(URL.createObjectURL(event.target.files[0]));
        
        let files = Array.from(event.target.files)
        let url = files.map(url => { return URL.createObjectURL(url)})
        
        this.setState({
        pictures: this.state.pictures.concat(files),
          file: [...this.state.file, ...url]
        })
      }

    renderList = () => {
        return this.state.file.map((img,i) => {
            return (
            <div className="d-inline">
                <img className="imageProduct mr-3 ml-3 mb-3" alt="imgupload" src={img}/>
                <button className="removeButtonImage" onClick={() => {this.deleteImages(i)}}>
                    <img className="iconRemoveImage" aria-hidden="true" alt="x" src={closeIcon}></img>
                </button> 
            </div>
            )
        })
    }

    deleteImages=(i)=>{
        Object.keys(this.state.pictures).filter(keys => {
            if(parseInt(keys) === i){
                this.state.pictures.splice(i,1)
                this.state.file.splice(i,1)
            }
        })
        this.setState({
            pictures: this.state.pictures,
            file: this.state.file
        })
        console.log(i);
        
      }

      onAddProduct = () => {
          const product_name = this.productName.value
          const designer = this.designer.value
          const gender = this.gender.value
          const category = this.category.value
          const description = this.description.value
          const stock = this.stock.value
          const price = this.price.value
          const image = this.imginput.files[0]

          this.props.addProduct(product_name, designer, gender, category, description, image, stock, price)
      }

  render() {
      console.log(this.state.pictures);
      console.log(this.state.file);
      
    return (
      <div>
        <div>
        <div className="container-fluid containerAdd d-flex mx-2 mb-5">
          <div className="title col-2 mx-2">
            <Link to="/manageproduct" className="d-block my-2">All Product</Link>
            <Link to="/addproduct" className="d-block">Add Product</Link>
          </div>
          <div className="col-7">
            <div className="container containerAccountAddProduct">
              <h1 className="text-center title">Manage Product</h1>
              <div className="mt-3">
                <p className="body text-center">Add New Product</p>
                <div>
                    <form>
                        {/* Product name */}
                        <label className="bodyInput">
                            Product name
                        </label>
                        <input className="accountInputForm p-2 form-control" type="text" id="productname" ref={input => this.productName = input}/>
                        {/* Brand name */}
                        <div className="form-group">
                        <label className="bodyInput mt-3">
                            Designer
                        </label>
                        <input className="accountInputForm p-2 form-control" type="text" id="designer" ref={input => this.designer = input}/>
                        </div>
                        {/* Gender */}
                        <label className="bodyInput mt-3 d-block">
                            Gender
                        </label>
                        <input className="accountInputForm p-2 form-control" type="text" id="gender" ref={input => this.gender = input}/>
                        {/* Category */}
                        <label className="bodyInput mt-3 d-block">
                            Category
                        </label>
                        <input className="accountInputForm p-2 form-control" type="text" id="category" ref={input => this.category = input}/>
                        {/* Description */}
                        <label className="bodyInput mt-3 d-block">
                            Descriptions
                        </label>
                        <textarea className="designerInputForm form-control" rows="10" ref={input => this.description = input}></textarea>
                        {/* Stocks */}
                        <label className="bodyInput mt-3 d-block">
                            Stock
                        </label>
                        <input className="accountInputForm form-control" type="number" min="1" max="1000" id="stock" ref={input => this.stock = input}/>
                        {/* Price */}
                        <label className="bodyInput mt-3 d-block">
                            Price
                        </label>
                        <input className="accountInputForm p-2 form-control" type="number" min="1" id="price" ref={input => this.price = input}/>
                    </form>
                    <div>
                        <label className="bodyInput mt-3 d-block">Upload images</label>
                    </div>
                </div>  
              </div>
              <div>
                    <input 
                        style={{display: "none"}}
                        ref={input => this.imginput = input}
                        type="file"  
                        onChange={this.handleChange}/>
                    
                    <button className="buttonAddImg iconAddImage mt-4 d-inline" onClick={() => {this.imginput.click()}}>
                        <img alt="img" src={addIcon}></img>
                    </button>
                    {this.renderList()}
                </div>
                <div>
                    <Link to = "/manageproduct">
                    <button type="button" className="btn btn-block buttonAddress mt-5 text-uppercase"
                    onClick={() => this.onAddProduct()}>
                        add product
                    </button></Link>
                </div>
              </div>
           </div> 
         </div>
      </div>
    </div>
    )
  }
}

export default connect (null, {addProduct}) (AddProduct)