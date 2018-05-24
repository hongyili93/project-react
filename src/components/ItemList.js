import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
  render() {
    return (
      <div>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    );
  }
}

export default ItemList;
