import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
  render() {
    const {items, mode, onDelete, onAdd} = this.props;

    const itemsElements = items.map((item) => (
        <Item
          mode={mode}
          key={item.id}
          name={item.name}
          price={item.price}
          qty={item.qty}
          onDelete={() => onDelete && onDelete(item.id)}
          onAdd={() => onAdd && onAdd(item.id)}
        />
    ));

    return (
      <table>
        {itemsElements}
      </table>
    );
  }
}

export default ItemList;
