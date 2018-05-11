"use strict";
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export function addProduct({id, nom, description, prix}) {
    return {
        type: ADD_PRODUCT,
        payload: {id, nom, description, prix}
    }
}
export function updateProduct({id, nom}) {
    return {
        type: UPDATE_PRODUCT,
        payload: {id, nom}
    }
}