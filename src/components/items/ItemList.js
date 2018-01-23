import React, {PropTypes} from 'react';
import ItemListRow from './ItemListRow';

const ItemList = ({items}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Title</th>
        <th>User</th>
        <th>Category</th>
        <th>Comments</th>
      </tr>
      </thead>
      <tbody>
      {items.map(item =>
        <ItemListRow key={item.id} item={item}/>
      )}
      </tbody>
    </table>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;