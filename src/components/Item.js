import React, { Component } from 'react';

class Item extends Component {
    renderShopMode() {
        const {
            name,
            price,
            qty,
            onAdd
        } = this.props;
        return (
            <tr>
                <th>{name}</th>
                <th>{price}</th>
                <th>{qty}</th>
                <button onClick={() => onAdd && onAdd()}>Add</button>
            </tr>
        );
    }

    renderCartMode() {
        const {
            name,
            price,
            qty,
            total,
            onDelete
        } = this.props;
        return (
            <tr>
                <th>{name}</th>
                <th>{price}</th>
                <th>{qty}</th>
                <th>{total}</th>
                <button onClick={() => onDelete && onDelete()}>x</button>
            </tr>
    );
    }

    render() {
        const {
        mode
    } = this.props;
        if(mode === "Shop"){
        return this.renderShopMode();
    } else {
        return this.renderCartMode();
    }
    }
    }

    export default Item;
