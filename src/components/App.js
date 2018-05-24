import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import SiteHeader from './SiteHeader';
import ItemList from './ItemList';
import SubTotal from './SubTotal';
import ShoppingCart from './ShoppingCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteHeader />
        <ItemList />
        <ShoppingCart />
        <SubTotal />
      </div>
    );
  }
}

export default App;
