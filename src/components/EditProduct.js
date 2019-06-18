import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getProducts, deleteImage, editProducts} from '../action/index'

import addIcon from '../components/icons/add.png'
import closeIcon from '../components/icons/cross.png'

import '../css/addProduct.css'

class EditProduct extends Component {
    componentDidMount(){
        this.props.getProducts()
    }

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
          file: [url]
        })
      }

    deleteImages = async (productid)=>{
        await this.props.deleteImage(productid)
        this.props.getProducts()
      }

    onClickEdit = () => {
        console.log(this.props.products[this.props.match.params.path].id);
        
        const productid = this.props.products[this.props.match.params.path].id
        const product_name = this.productName.value
        const designer = this.designer.value
        const gender = this.gender.value
        const category = this.category.value
        const description = this.description.value
        const image = this.imginput.files
        const stock = this.stock.value
        const price = this.price.value

        this.props.editProducts(productid, product_name, designer, gender, category, description, image, stock,price)
        console.log(image);
        
    }

  render() {
      console.log(this.props.products[this.props.match.params.path]);

      if(this.props.products.length !== 0){
          
        var{
          id,  
          product_name,
          designer,
          gender,
          category,
          description,
          stock,
          price,
          image
        } = this.props.products[this.props.match.params.path]}
      
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
                <p className="body text-center">Edit Product</p>
                <div>
                    <form>
                        {/* Product name */}
                        <label className="bodyInput">
                            Product name
                        </label>
                        <input className="accountInputForm p-2 form-control" type="text" id="productname" ref={input => this.productName = input} defaultValue={product_name}/>
                        {/* Brand name */}
                        <div className="form-group">
                        <label className="bodyInput mt-3">
                            Designer
                        </label>
                        <input className="accountInputForm p-2 form-control" type="text" id="designer" ref={input => this.designer = input} defaultValue={designer}/>
                        </div>
                        {/* Gender */}
                        <label className="bodyInput mt-3 d-block">
                            Gender
                        </label>
                        <input className="accountInputForm p-2 form-control" type="text" id="gender" ref={input => this.gender = input} defaultValue={gender}/>
                        {/* Category */}
                        <label className="bodyInput mt-3 d-block">
                            Category
                        </label>
                        <input className="accountInputForm p-2 form-control" type="text" id="category" ref={input => this.category = input} defaultValue={category}/>
                        {/* Description */}
                        <label className="bodyInput mt-3 d-block">
                            Descriptions
                        </label>
                        <input className="designerInputForm form-control" ref={input => this.description = input} defaultValue={description}></input>
                        {/* Stocks */}
                        <label className="bodyInput mt-3 d-block">
                            Stock
                        </label>
                        <input className="accountInputForm form-control" type="number" min="1" max="1000" id="stock" ref={input => this.stock = input} defaultValue={stock}/>
                        {/* Price */}
                        <label className="bodyInput mt-3 d-block">
                            Price
                        </label>
                        <input className="accountInputForm p-2 form-control" type="number" min="1" id="price" ref={input => this.price = input} defaultValue={price}/>
                    </form>
                    <div>
                        <label className="bodyInput mt-3 d-block">Edit image</label>
                    </div>
                </div>  
              </div>
              <div>
                    <input 
                        style={{display: "none"}}
                        ref={input => this.imginput = input}
                        type="file"  
                        onChange={this.handleChange}/>
                    
                    <button disabled = {image ? true : false} className="buttonAddImg iconAddImage mt-4 d-inline" onClick={() => {this.imginput.click()}}>
                        <img alt="img" src={addIcon}></img>
                    </button>
                    {image ? 
                    <div className="d-inline">
                        <img className="imageProduct mr-3 ml-3 mb-3" alt="imgupload" src={`http://localhost:1995/addproduct/addimages/${image}`}/>
                         <button className="removeButtonImage" onClick={() => {this.deleteImages(id)}}>
                            <img className="iconRemoveImage" aria-hidden="true" alt="x" src={closeIcon}></img>
                        </button>
                    </div>  : null}
                    {this.state.file.length ? 
                    <div className="d-inline">
                        <img className="imageProduct mr-3 ml-3 mb-3" alt="imgupload" src={this.state.file[0]}/>
                         <button className="removeButtonImage" onClick={() => {this.deleteImages(id)}}>
                            <img className="iconRemoveImage" aria-hidden="true" alt="x" src={closeIcon}></img>
                        </button>
                    </div>  : null}
                </div>
                <div>
                    <button type="button" className="btn btn-block buttonAddress mt-5 text-uppercase" onClick={() => this.onClickEdit()}>
                        Save
                    </button>
                </div>
              </div>
           </div> 
         </div>
      </div>
      </div>
    )
  }
}

const mps = state => {
    return {products: state.prod.products}
}

export default connect (mps, {getProducts, deleteImage, editProducts}) (EditProduct)
