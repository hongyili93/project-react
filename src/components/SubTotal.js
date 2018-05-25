import React, { Component } from 'react';

class SubTotal extends Component {
    render() {
        const {cartItems, taxRate} = this.props;
        var subtotal = 0.0;
        var tax = 0.0;
        var total = 0.0;

        const calcSubTotal = cartItems.map((item) => (
            subtotal += item.price
        ));

        tax = subtotal * taxRate / 100;
        tax = tax.toFixed(2);

        total = subtotal * (100 + taxRate) / 100;
        total = total.toFixed(2);

        return (
            <div>
                <p>SubTotal : $ {subtotal}</p>
                <p>Tax ({taxRate}%) : $ {tax}</p>
                <p>Total : $ {total}</p>
            </div>
        );
    }
}

export default SubTotal;
