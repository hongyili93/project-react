import React, { Component } from 'react';
import InputField from './InputField';

class Item extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { editable: false };
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    toggleEditMode() {
        this.setState({ editable: !this.state.editable });
        console.log("toogle edit");
    }

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
                <td onDoubleClick={this.toggleEditMode}>{qty}</td>
                <td>
                    <button className="addButton" onClick={() => onAdd && onAdd()}>Add</button>
                </td>
            </tr>
        );
    }

    renderShopEditMode() {
        const {
            name,
            price,
            qty,
            onAdd,
            onUpdate
        } = this.props;
        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                    <InputField
                        type="number"
                        autoFocus
                        value={qty}
                        onBlur={this.toggleEditMode}
                        onKeyDown={(e) => {
                            if (e.keyCode === 27) {
                                e.preventDefault();
                                this.toggleEditMode();
                            }
                        }}
                        onSubmitEditing={(content) => {
                            onUpdate && onUpdate(content);
                            this.toggleEditMode();
                        }}
                    />
                </td>
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
                <td onDoubleClick={this.toggleEditMode}>{qty}</td>
                <td>{total}</td>
                <td>
                    <button className="deleteButton" onClick={() => onDelete && onDelete()}>x</button>
                </td>
            </tr>
        );
    }

    renderCartEditMode() {
        const {
            name,
            price,
            qty,
            total,
            onDelete,
            onUpdate
        } = this.props;
        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td onDoubleClick={this.toggleEditMode}>
                    <InputField
                        autoFocus
                        value={qty}
                        onBlur={this.toggleEditMode}
                        onKeyDown={(e) => {
                            if (e.keyCode === 27) {
                                e.preventDefault();
                                this.toggleEditMode();
                            }
                        }}
                        onSubmitEditing={(content) => {
                            onUpdate && onUpdate(content);
                            this.toggleEditMode();
                        }}
                    />
                </td>
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

        const {
            editable
        } = this.state;

        if(mode === "Shop" && editable){
            return this.renderShopEditMode();
        } else if(mode === "Shop") {
            return this.renderShopMode();
        } else if (mode === "Cart" && editable) {
            return this.renderCartEditMode();
        } else {
            return this.renderCartMode();
        }
    }
}

export default Item;
