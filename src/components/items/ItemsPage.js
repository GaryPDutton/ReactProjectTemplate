import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import ItemList from './ItemList';
import {browserHistory} from 'react-router';

class ItemsPage extends React.Component {
    constructor(props, context){
        super(props, context);

        this.redirectToAddItemPage = this.redirectToAddItemPage.bind(this);
    }

    itemRow(item, index){
        return <div key={index}>{item.title}</div>;
    }

    redirectToAddItemPage(){
        browserHistory.push('/item');
    }

    render(){
        const {items} = this.props;
        return(
            <div>
                <h1>Items</h1>
                <input 
                    type="submit"
                    value="Add item"
                    onClick={this.redirectToAddItemPage}
                    className="btn btn-primary" />
                <ItemList items={items} />
            </div>
        );
    }
}

ItemsPage.propTypes = {
    actions: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        actions: bindActionCreators(itemActions,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPage);