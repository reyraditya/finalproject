import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {getProductsGender, getDesigners} from '../action/index';
import Footer from './Footer';

import '../css/DetailProduct.css'


class Shop extends Component {
    state = {
        gender: '',
        category: '',
    }

    async componentDidMount(){
        await this.props.getDesigners()

        await this.setState({
            gender: this.props.match.params.gender,
            category: this.props.match.params.category
        })
    }
    async componentWillUpdate(prevProps){
        if(
            this.state.gender !== prevProps.match.params.gender || 
            this.state.category !== prevProps.match.params.category
        ){
            await this.setState({
                gender: prevProps.match.params.gender,
                category: prevProps.match.params.category
            })
            await this.props.getProductsGender(this.props.match.params.gender, this.props.match.params.category)
        }

    }

    renderList = () => {
        if(this.props.products.length){
            return this.props.products.map(product => {
                return (
                  <div className="col-3 pb-4 cardDisplay">
                    <div className="card">
                      <Link to={`/detailproduct/${product.id}`}>
                        <img
                          className="card-img-top"
                          src={`http://localhost:1995/addproduct/addimages/${product.image}`}
                          alt="img"
                        />
                      </Link>
                      <div className="card-body">
                        <Link to={`/detailproduct/${product.id}`}>
                          <p className="card-title">
                            {product.designer}
                          </p>
                        </Link>
                        <Link to={`/detailproduct/${product.id}`}>
                          <p className="card-text cardText">
                            {product.product_name}
                          </p>
                        </Link>
                        <p className="card-text">${product.price}</p>
                      </div>
                    </div>
                  </div>
                );
            })
        }
    }

    renderListDesigners = () => {
        if(this.props.designers.length){
            return this.props.designers.map(brand => {
                return(
                        <li className="list-group-item">
                            <span>
                                <Link to="/alldesigners/designers">{brand.designer}</Link>
                            </span>
                        </li>
                )
            })
        }
    }

    render(){
        console.log(this.props);
        console.log(this.props.designers);
        
        const {gender} = this.props.match.params

        return (
            <div className="allDesigners">
                <div className="container-fluid d-flex mx-2">
                    <div className="panel-group mt-5 pt-5 col-2">

                    {/* All categories */}
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h6 className="panel-title px-2">
                                    <a data-toggle="collapse" href="#collapse1">all categories</a>
                                </h6>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <span><Link to={`/shop/${gender}/allproducts`}>all</Link></span>
                                    </li>
                                    <li className="list-group-item">
                                        <span><Link to={`/shop/${gender}/eau de parfum`}>eau de parfum</Link></span>
                                    </li>
                                    <li className="list-group-item mb-4">
                                        <span><Link to={`/shop/${gender}/eau de toilette`}>eau de toilette</Link></span>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                        {/* All Designers */}
                        <div className="panel panel-default mb-5">
                            <div className="panel-heading">
                                <h6 className="panel-title px-2">
                                    <a data-toggle="collapse" href="#collapse2">all designers</a>
                                </h6>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <span>
                                            <Link to={`/shop/${gender}/allproducts`}>all</Link>
                                        </span>
                                    </li>
                                    {this.renderListDesigners()}
                                </ul>       
                            </div>
                        </div>
                    </div>

                    {/* Display product */}
                    <div className="displayProduct text-center mt-5 pt-5 col-8">
                        <div className="displayProductHeader mb-5 pb-3">
                            {gender}
                        </div>
                        <div className="row">
                        {/* Card product item */}
                            {this.renderList()}
                        </div>
                    </div>
                </div> 
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}

const mps = state => {
    return {products: state.prod.products, designers: state.prod.designers}
}

export default connect(mps, {getProductsGender, getDesigners})(Shop);