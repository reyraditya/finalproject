import React, { Component } from 'react'
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import {getOrder, uploadProof} from '../action/index'

// import Footer from './Footer'
import '../css/orderhistory.css'

const cookie = new Cookies()

class ConfirmPayment extends Component {
    state = {
        addImg: false, 
        preview: '',
        img: null
      }

    async componentDidMount(){
        await this.props.getOrder(cookie.get('idLogin'))
      }

    addImg = () => {
        this.imginput.click()
        if(this.imginput.files){
          this.setState({addImg: !this.state.addImg})
        }
      }
    
    changeImg = async () => {
          await this.setState(prevState => ({
          addImg: !prevState.addImg
        }))
      }
    
    imageChange = (event) => {
        event.preventDefault()
    
        const imagePreview = URL.createObjectURL(event.target.files[0])
        this.setState({preview: [imagePreview]})
    
        if(imagePreview.length){
          this.changeImg()
        }
        
      }

      saveAva = async () => {
        if(this.props.orders.length !== 0){
            var {
                orderid
            } = this.props.match.params
        }
        
        

        await this.props.uploadProof(orderid, this.proofinput.files)
        console.log(this.proofinput.files);
        
        this.setState({addImg: !this.state.addImg})
        this.props.getOrder(cookie.get('idLogin'))
        console.log(this.props.match.params.orderid);
        
      }

    render() {
        // console.log(this.props.match.params.orderid);
        // console.log(this.props.orders[this.props.match.params.orderid]);
        console.log(this.props.orders);
        

        if(this.props.orders.length !== 0){
            const order = this.props.orders.filter(obj => {
                return obj.id === this.props.match.params.orderid
            })
            var {
                bank_name,
                createdAt,
                iban,
                id,
                payment_method,
                price_total,
                shipper_name,
                time_estimation,
                image
            } = order[0]
            console.log(order);
            console.log(this.props.orders);
            
        }
        
        return (
        <div>
            <div className="container-fluid d-flex mx-2">
                    <div className="title col-2 mx-2">
                        <Link to="/account" className="d-block">
                            Account details
                        </Link>
                        <Link to="/addresses" className="d-block mt-2">
                            Addresses
                        </Link>
                        <Link to="/orderhistory" className="d-block mt-2">
                            Order history
                        </Link>
                        <Link to="/wishlist" className="d-block mt-2">
                            Wishlist
                        </Link>
                    </div>
                <div className="col-7">>
                    <div className="container containerAccount">
                        <h1 className="text-center titleOrderHistory">Order History</h1>
                    </div>
                    <div className="titleOrder pb-2">
                      Waiting for payment
                    </div>
                        <div className="mt-4 p-3 renderOrder">
                            <div className="d-flex">
                                <div className="col-6">
                                {/* order id */}
                                <div className="titleGrand">
                                    order id: {id}
                                </div>
                                <div className="titleGrand">
                                    time: {createdAt}
                                </div>
                                {/* shipper */}
                                <div className="titleGrand mt-3">
                                    shipper:
                                </div>
                                <div className="titleGrand">
                                    {shipper_name}, {time_estimation}
                                </div>
                                {/* wire information */}
                                <div className="titleGrand mt-3">
                                    <div>{payment_method}:</div>
                                    <div className="mt-1">{bank_name}</div>
                                    <div className="mt-1">iban:{iban}</div>
                                </div>
                                {/* total order */}
                                <div className="titleGrand mt-3">
                                    grand total: ${price_total}
                                </div>
                            </div>
                            <div>
                               <img className="uploadProof" src={this.state.preview ? this.state.preview: image ? `http://localhost:1995/proof/${image}`  : require('../components/icons/upload.png')} alt="img proof"></img>
                                <div> 
                                <div className="buttonUploadProof">
                                    <label className="buttonUploadReceipt buttonAccount text-center" hidden={this.state.addImg}>
                                        <input hidden type='file' ref={input => this.proofinput = input} onChange={ this.imageChange} />
                                        upload proof
                                    </label>
                                    <button hidden={!this.state.addImg} className="buttonUploadReceipt buttonAccount" onClick={() => {this.saveAva()}}>
                                        save
                                    </button>
                                </div>
                            </div>
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
    return {orders: state.order.orderhistory}
}

export default connect(mps, {getOrder, uploadProof})(ConfirmPayment)


  