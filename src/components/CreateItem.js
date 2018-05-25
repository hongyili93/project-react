import React, { Component } from 'react';

class CreateItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "",
            price: 0.0,
            qty: 0
        }
        this.updateQty = this.updateQty.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.updateName = this.updateName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateName(e) {
        this.setState(
            {
            name: e.target.value
            },function () {
                //console.log(this.state.name);
            }
        );
    }

    updatePrice(e) {
        this.setState(
            {
                price: e.target.value
            }
        );
    }

    updateQty(e) {
        this.setState(
            {
                qty: e.target.value
            }
        );
    }

    handleSubmit() {
        const {onCreate} = this.props;
        const {name, price, qty} = this.state;
        console.log(this.state.qty);
        if(name !== "") {
            //console.log(name);
            //console.log(price);
            //console.log(qty);
            onCreate && onCreate(name, price, qty);
        }
    }
r
    render() {
        return (
            <div>
                <input type="text"
                       placeholder="name" onChange={this.updateName}>
                </input>
                <input type="number"
                       placeholder="price" onChange={this.updatePrice}>
                </input>
                <input type="number"
                       placeholder="qty" onChange={this.updateQty}>
                </input>
                <button onClick={this.handleSubmit}>Add Item into Shop</button>
            </div>
        );
    }
}

export default CreateItem;
