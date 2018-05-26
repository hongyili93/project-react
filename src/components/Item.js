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
                <td>
                    <button className="addButton" onClick={() => onAdd && onAdd()}>Add</button>
                </td>
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
                <td>
                    <button className="deleteButton" onClick={() => onDelete && onDelete()}>x</button>
                </td>
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
