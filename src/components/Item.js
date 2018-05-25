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
                <td>{name}</td>
                <td>{price}</td>
                <td>{qty}</td>
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
                <td>{name}</td>
                <td>{price}</td>
                <td>{qty}</td>
                <td>{total}</td>
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
