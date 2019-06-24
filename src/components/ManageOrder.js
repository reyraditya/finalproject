import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getOrderAdmin} from '../action/index';

import '../css/manageOrder.css'

class ManageOrder extends Component {
    async componentDidMount(){
        await this.props.getOrderAdmin()
    }

    renderList = () => {
        if(this.props.orderadmin.length){
            return this.props.orderadmin.map((order, i) => {
                return(
                <div key={i}>
                    <div className="mt-4 p-3 renderOrder">
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
                    </div>
                </div>
            </div>
            )
        })
    }
}

    render() {
        console.log(this.props.orderadmin);
        
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
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mps = state => {
    return {orderadmin: state.order.orderadmin}
}

export default connect (mps, {getOrderAdmin}) (ManageOrder)
