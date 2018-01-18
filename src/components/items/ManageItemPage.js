import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import ItemForm from './ItemForm';
import {usersFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageItemPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      item: Object.assign({}, this.props.item),
      errors: {},
      saving: false
    };

    this.saveItem = this.saveItem.bind(this);
    this.updateItemState = this.updateItemState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.item.id != nextProps.item.id) {
            // Necessary to populate form when existing item is loaded directly.
      this.setState({item: Object.assign({}, nextProps.item)});
    }
  }

  updateItemState(event) {
    const field = event.target.name;
    let item = Object.assign({}, this.state.item);
    item[field] = event.target.value;
    return this.setState({item: item});
  }

  itemFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.item.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveItem(event) {
    event.preventDefault();

    if (!this.itemFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveItem(this.state.item)
            .then(() => this.redirect())
            .catch(error => {
              toastr.error(error);
              this.setState({saving: false});
            });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Item saved.');
    this.context.router.push('/items');
  }

  render() {
    return (
            <ItemForm
                item={this.state.item}
                onChange={this.updateItemState}
                onSave={this.saveItem}
                errors={this.state.errors}
                allUsers={this.props.users}
                saving={this.state.saving}
            />
        );
  }
}

ManageItemPage.propTypes = {
  item: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageItemPage.contextTypes = {
  router: PropTypes.object
};

function getItemById(items, id) {
  const item = items.filter(item => item.id == id);
  if (item) return item[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const itemId = ownProps.params.id; // from the path `/item/:id`

  let item = {id: '', title: '', userId: '', category: ''};

  if (itemId && state.items.length > 0) {
    item = getItemById(state.items, itemId);
  }

  return {
    item: item,
    users: usersFormattedForDropdown(state.users)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageItemPage);