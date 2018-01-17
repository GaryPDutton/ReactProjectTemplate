import React, {PropTypes} from 'react';
import TextInput from '../common/forms/TextInput';
import SelectInput from '../common/forms/SelectInput';

const ItemForm = ({item, allUsers, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Item</h1>
      <TextInput
        name="title"
        label="Title"
        value={item.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="userId"
        label="User"
        value={item.userId}
        defaultOption="Select User"
        options={allUsers}
        onChange={onChange} error={errors.userId}/>

      <TextInput
        name="category"
        label="Category"
        value={item.category}
        onChange={onChange}
        error={errors.category}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

ItemForm.propTypes = {
  item: PropTypes.object.isRequired,
  allUsers: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default ItemForm;