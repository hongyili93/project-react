import React, {Component} from 'react';
import './App.css';
import SiteHeader from './SiteHeader';
import ItemList from './ItemList';
import SubTotal from './SubTotal';

const _deleteItem = (items, cartItems, id) => {
    const ids = items.findIndex((item) => item.id === id);
    const idc = cartItems.findIndex((item) => item.id === id);
    if (ids !== -1) {
        items[ids].qty += cartItems[idc].qty;
    } else {
        var temp = {'id': id, 'name': cartItems[idc].name, 'price': cartItems[idc].price, 'qty': cartItems[idc].qty};
        items.push(temp);
    }
    cartItems.splice(idc, 1);
    return cartItems;
};

const _addItem = (items, cartItems, id) => {
    const ids = items.findIndex((item) => item.id === id);
    const idc = cartItems.findIndex((item) => item.id === id);
    if (idc !== -1) {
        if(items[ids].qty > 0){
            items[ids].qty -= 1;
            cartItems[idc].qty += 1;
            cartItems[idc].total = cartItems[idc].qty * items[ids].price;
            cartItems[idc].total = cartItems[idc].total.toFixed(2);
        }
    } else {
        if(items[ids].qty > 0){
            items[ids].qty -= 1;
            var temp = {'id': id, 'name': items[ids].name, 'price': items[ids].price, 'qty': 1, 'total': items[ids].price.toFixed(2)};
            cartItems.push(temp);
        }
    }
    return cartItems;
};

class App extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            items: [
                {
                    id: 1,
                    name: "item1",
                    price: 9.99,
                    qty: 10,
                    total: 99.9
                },
                {
                    id: 2,
                    name: "item2",
                    price: 19.99,
                    qty: 10,
                    total: 199.9
                },
                {
                    id: 3,
                    name: "item3",
                    price: 29.99,
                    qty: 10,
                    total: 299.9
                }
            ],
            cartItems: [
                {
                    id: 4,
                    name: "item4",
                    price: 39.99,
                    qty: 10,
                    total: 399.9
                }
            ],
            taxRate: 5,
        }
    }

    render() {
        const {items, cartItems, taxRate} = this.state;
        return (
            <div className="App">
                <SiteHeader/>
                <ItemList items={items} mode="Shop" onAdd={
                    (...args) => this.setState({
                        cartItems: _addItem(items, cartItems, ...args)
                    })}/>
                <ItemList items={cartItems} mode="Cart" onDelete={
                    (...args) => this.setState({
                        cartItems: _deleteItem(items, cartItems, ...args)
                    })}
                />
                <SubTotal cartItems={cartItems} taxRate={taxRate}/>
            </div>
        );
    }
}

export default App;
