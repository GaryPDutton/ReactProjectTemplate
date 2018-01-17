import * as types from './actionTypes';
import itemApi from '../api/mockItemApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadItemsSuccess(items){
    return {
        type: types.LOAD_ITEMS_SUCCESS, items
    };
}

export function updateItemSuccess(item){
    return {
        type: types.UPDATE_ITEM_SUCCESS, item
    };
}

export function createItemSuccess(item){
    return {
        type: types.CREATE_ITEM_SUCCESS, item
    };
}

export function loadItems(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return itemApi.getAllItems().then(items => {
            dispatch(loadItemsSuccess(items));
        }).catch(error => {
            throw(error);
        });
    };
} 

export function saveItem(item){
    return function(dispatch, getState){
        dispatch(beginAjaxCall());
        return itemApi.saveItem(item).then(saveItem => {
            item.id ? dispatch(updateItemSuccess(saveItem)) :
            dispatch(createItemSuccess(saveItem));
        }).catch(error => {
            throw(error);
        });
    };
} 