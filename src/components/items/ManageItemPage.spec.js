import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageItemPage} from './ManageItemPage';

describe('Manage Item Page', () => {
  it('sets error message upon blur of empty title field', () => {
    const props = {
      users: [],
      actions: {
        saveItem: () => {
          return Promise.resolve();
        }
      },
      item: {id: '', title: '', userId: '', category: ''}
    };
    const wrapper = mount(<ManageItemPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit'); //assure we found the submit.
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});