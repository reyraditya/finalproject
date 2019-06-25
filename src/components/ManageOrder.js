import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {getOrderAdmin, setPaid, setRejected, setShipped} from '../action/index';

import '../css/manageOrder.css'

class ManageOrder extends Component {
    async componentDidMount(){
        await this.props.getOrderAdmin()
    }

    onStatusPaid = async (orderid) => {
        await this.props.setPaid(orderid)
        this.props.getOrderAdmin()
    }

    onStatusRejected = async (orderid) => {
        await this.props.setRejected(orderid)
        this.props.getOrderAdmin()
    }

    onStatusShipped = async (orderid) => {
        await this.props.setShipped(orderid)
        this.props.getOrderAdmin()
    }

    renderList = () => {
        if(this.props.orderadmin.length){
            return this.props.orderadmin.map((order, i) => {
                if(order.status === 'waiting payment'){
                    return(
                        <div key={i}>
                            <div className="mt-4 p-3 renderOrder">
                                <div className="d-flex">
                                    <div>
                                        {/* order id */}
                                        <div className="titleGrand">
                                            order id: {order.id}
                                        </div>
                                        <div className="titleGrand">
                                            time: {order.createdAt}
                                        </div>
                                        {/* user id */}
                                        <div className="titleGrand mt-3">
                                            client id: {order.userid}  
                                        </div>
                                        <div className="titleGrand">
                                            username: {order.username}
                                        </div>
                                        <div className="titleGrand">
                                            email: {order.email}
                                        </div>
                                        {/* shipper */}
                                        <div className="titleGrand mt-3">
                                            shipper:
                                        </div>
                                        <div className="titleGrand">
                                        {order.shipper_name}, {order.time_estimation}
                                        </div>
                                        {/* wire information */}
                                        <div className="titleGrand mt-3">
                                            <div>{order.payment_method}:</div>
                                            <div className="mt-1">{order.bank_name}</div>
                                            <div className="mt-1">iban: {order.iban}</div>
                                        </div>
                                        {/* total order */}
                                        <div className="titleGrand mt-3">
                                            grand total: ${order.price_total}
                                        </div>
                                        {/* Button */}
                                        <div className="buttonDetailOrder d-flex">
                                            <div className="mx-auto">
                                            <Link to={`/detailorder/${i}/${order.id}`}>
                                                <button className="d-inline mx-2 mt-4 buttonWishlist buttonAccount">
                                                    detail order
                                                </button>
                                            </Link>   
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="uploadProofManage mt-5" src={order.image ? `http://localhost:1995/proof/${order.image}` : require('../components/icons/nophoto.png')}/>
                                    <div className="d-flex buttonManageOrder ">
                                        <div className="ml-4">
                                            <button className="mr-2 buttonApprove buttonWishlist buttonAccount" onClick={() => {this.onStatusPaid(order.id)}}>confirm</button>
                                            <button className="buttonCancel buttonWishlist buttonAccount" onClick={() => {this.onStatusRejected(order.id)}}>reject</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } 
            })
        }
    }

    renderPaid = () => {
        if(this.props.orderadmin.length){
            return this.props.orderadmin.map((order, i) => {
                console.log(order.status);
                
                if(order.status === 'paid'){
                    return (
                        <div key={i}>
                        <div className="mt-4 p-3 renderOrder">
                            <div className="d-flex">
                                <div>
                                    {/* order id */}
                                    <div className="titleGrand">
                                        order id: {order.id}
                                    </div>
                                    <div className="titleGrand">
                                        time: {order.createdAt}
                                    </div>
                                    {/* user id */}
                                    <div className="titleGrand mt-3">
                                        client id: {order.userid}  
                                    </div>
                                    <div className="titleGrand">
                                        username: {order.username}
                                    </div>
                                    <div className="titleGrand">
                                        email: {order.email}
                                    </div>
                                    {/* shipper */}
                                    <div className="titleGrand mt-3">
                                        shipper:
                                    </div>
                                    <div className="titleGrand">
                                    {order.shipper_name}, {order.time_estimation}
                                    </div>
                                    {/* wire information */}
                                    <div className="titleGrand mt-3">
                                        <div>{order.payment_method}:</div>
                                        <div className="mt-1">{order.bank_name}</div>
                                        <div className="mt-1">iban: {order.iban}</div>
                                    </div>
                                    {/* total order */}
                                    <div className="titleGrand mt-3">
                                        grand total: ${order.price_total}
                                    </div>
                                    {/* Button */}
                                    <div className="buttonDetailOrder d-flex">
                                        <div className="mx-auto">
                                        <Link to={`/detailorder/${i}/${order.id}`}>
                                            <button className="d-inline mx-2 mt-4 buttonWishlist buttonAccount">
                                                detail order
                                            </button>
                                        </Link>   
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className="uploadProofManage mt-5" src={order.image ? `http://localhost:1995/proof/${order.image}` : require('../components/icons/nophoto.png')}/>
                                <div className="d-flex buttonManageOrder ">
                                    <div className="buttonShipped">
                                        {/* <button className="mr-2 buttonApprove buttonWishlist buttonAccount" onClick={() => {this.props.setPaid(order.id)}}>confirm</button> */}
                                        {/* <button className="buttonCancel buttonWishlist buttonAccount">reject</button> */}
                                        <button className="ml-2 buttonWishlist buttonAccount" onClick={() => {this.onStatusShipped(order.id)}}>shipped</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }
                
            })
        }
    }

    renderRejected = () => {
        if(this.props.orderadmin.length){
            return this.props.orderadmin.map((order,i) => {
                if(order.status === 'rejected'){
                    return(
                        <div key={i}>
                        <div className="mt-4 p-3 renderOrder">
                            <div className="d-flex">
                                <div>
                                    {/* order id */}
                                    <div className="titleGrand">
                                        order id: {order.id}
                                    </div>
                                    <div className="titleGrand">
                                        time: {order.createdAt}
                                    </div>
                                    {/* user id */}
                                    <div className="titleGrand mt-3">
                                        client id: {order.userid}  
                                    </div>
                                    <div className="titleGrand">
                                        username: {order.username}
                                    </div>
                                    <div className="titleGrand">
                                        email: {order.email}
                                    </div>
                                    {/* shipper */}
                                    <div className="titleGrand mt-3">
                                        shipper:
                                    </div>
                                    <div className="titleGrand">
                                    {order.shipper_name}, {order.time_estimation}
                                    </div>
                                    {/* wire information */}
                                    <div className="titleGrand mt-3">
                                        <div>{order.payment_method}:</div>
                                        <div className="mt-1">{order.bank_name}</div>
                                        <div className="mt-1">iban: {order.iban}</div>
                                    </div>
                                    {/* total order */}
                                    <div className="titleGrand mt-3">
                                        grand total: ${order.price_total}
                                    </div>
                                    {/* Button */}
                                    <div className="buttonDetailOrder d-flex">
                                        <div className="mx-auto">
                                        <Link to={`/detailorder/${i}/${order.id}`}>
                                            <button className="d-inline mx-2 mt-4 buttonWishlist buttonAccount">
                                                detail order
                                            </button>
                                        </Link>   
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img className="uploadProofManage mt-5" src={order.image ? `http://localhost:1995/proof/${order.image}` : require('../components/icons/nophoto.png')}/>
                                <div className="d-flex buttonManageOrder ">
                                    <div className="ml-4">
                                        <button className="mr-2 buttonReject buttonWishlist buttonAccount" onClick={() => {this.onStatusPaid(order.id)}}>confirm</button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )

                }
            })
        }
    }

    renderShipped = () => {
        if(this.props.orderadmin.length){
            return this.props.orderadmin.map((order, i) => {
                if(order.status === 'shipped'){
                    return(
                        <div key={i}>
                    <div className="mt-4 p-3 renderOrder">
                        <div className="d-flex">
                            <div>
                                {/* order id */}
                                <div className="titleGrand">
                                    order id: {order.id}
                                </div>
                                <div className="titleGrand">
                                    time: {order.createdAt}
                                </div>
                                {/* user id */}
                                <div className="titleGrand mt-3">
                                    client id: {order.userid}  
                                </div>
                                <div className="titleGrand">
                                    username: {order.username}
                                </div>
                                <div className="titleGrand">
                                    email: {order.email}
                                </div>
                                {/* shipper */}
                                <div className="titleGrand mt-3">
                                    shipper:
                                </div>
                                <div className="titleGrand">
                                {order.shipper_name}, {order.time_estimation}
                                </div>
                                {/* wire information */}
                                <div className="titleGrand mt-3">
                                    <div>{order.payment_method}:</div>
                                    <div className="mt-1">{order.bank_name}</div>
                                    <div className="mt-1">iban: {order.iban}</div>
                                </div>
                                {/* total order */}
                                <div className="titleGrand mt-3">
                                    grand total: ${order.price_total}
                                </div>
                                {/* Button */}
                                <div className="buttonDetailOrder d-flex">
                                    <div className="mx-auto">
                                    <Link to={`/detailorder/${i}/${order.id}`}>
                                        <button className="d-inline mx-2 mt-4 buttonWishlist buttonAccount">
                                            detail order
                                        </button>
                                    </Link>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    )
                }
            })
        }
    }

    render() {
        // console.log(this.props.orderadmin);
        // console.log(this.props.orderpaid);
        console.log(this.props.orderrejected);
        
        return (
            <div>
                <div className="container-fluid">
                    <div className="col-12">
                    <div className="container mx-auto containerAccount">
                         <h1 className="text-center titleOrderHistory">Manage Order</h1>
                    </div>
                    <div className="manageOrderTab">
                        <div className="titleOrder pb-2">
                            Waiting for approval
                        </div>
                        <div>
                            {this.renderList()}
                        </div>
                        {/* Status paid */}
                        <div className="titleOrder pb-2">
                            paid
                        </div>
                        <div>
                            {this.renderPaid()}
                        </div>
                        {/* Status cancelled */}
                        <div className="titleOrder pb-2">
                            rejected
                        </div>
                        <div>
                            {this.renderRejected()}
                        </div>
                        {/* Status shipped */}
                        <div className="titleOrder pb-2">
                            shipped
                        </div>
                        <div>
                           {this.renderShipped()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mps = state => {
    return {
        orderadmin: state.order.orderadmin,
        // orderpaid: state.order.orderpaid,
        // orderrejected: state.order.orderrejected
        
    }
}

export default connect (mps, {getOrderAdmin, setPaid, setRejected, setShipped}) (ManageOrder)
