"use strict";
const INIT_PRODUCTS = [
    {_id:'5af04ca28cf3a746a40b9df5',imagePath:'https://upload.wikimedia.org/wikipedia/commons/3/3c/Audi_A6_C5_front_20070518.jpg',nom:'Audi A6',description:'rapide',prix:10000000,__v:0}
];


export default function productsReducer(state=INIT_PRODUCTS, action={}) {
    // PLEASE NOTE:
    // below actions are unused
    // kept for instance - Ajinkya
    switch(action.type) {
        case 'ADD_PRODUCT':
            return state.concat(action.payload);

        case 'DELETE_PRODUCT':
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel+1)];

        case 'UPDATE_PRODUCT':
            let indexToUpdate = findProductIndex(state, action.payload.id);
            const newProductExtend = {
                ...state[indexToUpdate], title: action.payload.title
            };
            return [...state.slice(0, indexToUpdate), newProductExtend, ...state.slice(indexToUpdate+1)];

    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id)
    }

    return state;
}