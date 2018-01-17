import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ItemList = ({item}) => {
    return (
        <tr>
            <td><Link to={'/item/'+item.id} >{item.title}</Link></td>
            <td>{item.userId}</td>
            <td>{item.category}</td>
            <td>{item.length}</td>
         </tr>
    );
};

ItemList.propTypes = {
    item: PropTypes.object.isRequired
};

export default ItemList;