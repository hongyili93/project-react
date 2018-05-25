import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import SiteHeader from './SiteHeader';
import ItemList from './ItemList';
import SubTotal from './SubTotal';
import ShoppingCart from './ShoppingCart';

const _deleteItem = (items, id) => {
  const idx = items.findIndex((item) => item.id === id);
  if (idx !== -1) items.splice(idx, 1);
  return items;
};

const _addItem = (items, cartItems, id) => {
  console.log('start Add');
  const ids = items.findIndex((item) => item.id === id);
  const idc = cartItems.findIndex((item) => item.id === id);
  if (idc !== -1) {
    items[ids].qty -= 1;
    cartItems[idc].qty += 1;
  } else {
    var temp = [id, items[ids].name, items[ids].price, 1];
    cartItems.concat(temp);
  }
  console.log('before return');
  return {items, cartItems};
};

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      items:[
        {
          id:1,
          name:"item1",
          price:9.99,
          qty:10
        },
        {
          id:2,
          name:"item2",
          price:19.99,
          qty:20
        }
      ],
      cartItems:[
        {
          id:1,
          name:"item1",
          price:9.99,
          qty:100
        },
        {
          id:2,
          name:"item2",
          price:19.99,
          qty:200
        }
      ]
    }
  }

  render() {
    const {items, cartItems} = this.state;
    return (
      <div className="App">
        <SiteHeader />
        <ItemList items={items} mode="Shop" onAdd={
              (...args) =>(function(){
                console.log("checking");
                  var a = _addItem(items, cartItems, ...args);
                  this.setState({
                  items: a[0],
                  cartItems: a[1]
                })
              }())}
        />
        <ItemList items={cartItems} mode="Cart" onDelete={
              (...args) => this.setState({
              cartItems: _deleteItem(cartItems, ...args)
            })}
        />
        <SubTotal />
      </div>
    );
  }
}

export default App;
