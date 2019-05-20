import React, { Component } from 'react'
import {Link} from 'react-router-dom'

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
        return this.state.file.map(img => {
            return (
            <div className="d-inline">
                <img className="imageProduct mr-3 ml-3 mb-3" alt="imgupload" src={img}/>
                <button className="removeButtonImage">
                    <img className="iconRemoveImage" aria-hidden="true" src={closeIcon}></img>
                    {/* <span aria-hidden="true">&times;</span> */}
                </button> 
            </div>
            )
        })
    }

    deleteImages(i){
        var arrFiles = [...this.state.pictures]
        var index = arrFiles.indexOf(i.target.value)
        if(index !== -1){
            arrFiles.splice(index, 1);
            this.setState({pictures: arrFiles})
        }
      }


  render() {
      console.log(this.state.pictures);
      console.log(this.state.file);
      
    return (
      <div>
        <div>
        <div className="container-fluid d-flex mx-2 mb-5">
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
                        <input className="accountInputForm p-2 text-capitalize form-control" type="text" id="productname" ref={input => this.productName = input}/>
                        {/* Brand name */}
                        <div className="form-group">
                        <label className="bodyInput mt-3">
                            Designer
                        </label>
                        <input className="accountInputForm p-2 text-capitalize form-control" type="text" id="designer" ref={input => this.designer = input}/>
                        </div>
                        {/* Category */}
                        <label className="bodyInput mt-3 d-block">
                            Category
                        </label>
                        <label className="radio-inline mr-4 ">
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
                            Descriptions
                        </label>
                        <textarea className="designerInputForm form-control" rows="10"></textarea>
                        {/* Sizing */}
                        <div className="row">
                            <div className="col-3">
                                <label className="bodyInput mt-3 d-block">
                                Sizes
                            </label>
                            <label className="radio d-block">
                                {/* <input type="radio" name="xs" value="xs"/> */}
                                <label className="bodyInput d-inline ml-1 text-uppercase">
                                    xs
                                </label>
                            </label>
                            <label className="radio mt-3 d-block">
                                {/* <input type="radio" name="s" value="s"/> */}
                                <label className="bodyInput d-inline ml-1 text-uppercase">
                                    s
                                </label>
                            </label>
                            <label className="radio mt-3 d-block">
                                {/* <input type="radio" name="m" value="m"/> */}
                                <label className="bodyInput d-inline ml-1 text-uppercase">
                                    m
                                </label>
                            </label>
                            <label className="radio mt-3 d-block">
                                {/* <input type="radio" name="l" value="l"/> */}
                                <label className="bodyInput d-inline ml-1 text-uppercase">
                                    l
                                </label>
                            </label>
                            <label className="radio mt-3 mr-4">
                                {/* <input type="radio" name="xl" value="xl"/> */}
                                <label className="bodyInput d-inline ml-1 text-uppercase">
                                    xl
                                </label>
                            </label>
                            </div>
                            {/* Stocks */}
                            <div className="col-9">
                                <label className="bodyInput mt-3 d-block">
                                    Stock
                                </label>
                                <input className="accountInputForm form-control" type="number" min="1" max="1000" id="stock" ref={input => this.stockXS = input}/>
                                <input className="accountInputForm mt-2 form-control" type="number" min="1" max="1000" id="stock" ref={input => this.stockS = input}/>
                                <input className="accountInputForm mt-2 form-control" type="number" min="1" max="1000" id="stock" ref={input => this.stockM = input}/>
                                <input className="accountInputForm mt-2 form-control" type="number" min="1" max="1000" id="stock" ref={input => this.stockL = input}/>
                                <input className="accountInputForm mt-2 form-control" type="number" min="1" max="1000" id="stock" ref={input => this.stockXL = input}/>
                            </div>
                        </div>
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
              <div className>
                    <input 
                        style={{display: "none"}}
                        ref={input => this.imginput = input}
                        type="file"  
                        onChange={this.handleChange} multiple/>
                    
                    <button className="buttonAddImg iconAddImage mt-4 d-inline" onClick={() => {this.imginput.click()}}>
                        <img className="" src={addIcon}></img>
                    </button>
                    {this.renderList()}
                </div>
              </div>
           </div> 
         </div>
      </div>
    </div>
    )
  }
}

export default AddProduct