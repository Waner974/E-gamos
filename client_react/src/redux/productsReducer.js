"use strict";
const INIT_PRODUCTS = [
    {
        _id:'5af04ca28cf3a746a40b9df5',
        id:1,
        imagePath:'https://upload.wikimedia.org/wikipedia/commons/3/3c/Audi_A6_C5_front_20070518.jpg',
        nom:'Audi A6',
        description:'rapide',
        prix:10000000,
        __v:0
    },
    {
        _id:'5af04d098cf3a746a40b9df6',
        id:2,
        imagePath:'https://upload.wikimedia.org/wikipedia/commons/a/af/Audi_S6_Limousine_front.JPG',
        nom:'Audi S6',
        description:'très rapide'
        ,prix:20000000,
        __v:0
    },
    {
        _id:'5af2b7a9ef4e9949b093c3aa',
        id:3,
        imagePath:'https://upload.wikimedia.org/wikipedia/commons/8/82/Tesla_Model_S_%28Facelift_ab_04-2016%29_trimmed.jpg',
        nom:'Tesla S',
        description:'très très rapide'
        ,prix:30000000,
        __v:0
    },
    {
        _id:'5af2b820ef4e9949b093c3ab',
        id:4,
        imagePath:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Audi_RS5_front.jpg',
        nom:'Audi RS5',
        description:'très très très rapide'
        ,prix:40000000,
        __v:0
    },
];
const props = {products: [
        {id:'5af04ca28cf3a746a40b9df5',imagePath:'https://upload.wikimedia.org/wikipedia/commons/3/3c/Audi_A6_C5_front_20070518.jpg',nom:'Audi A6',description:'rapide',prix:10000000,__v:0}
    ]};
export default function productsReducer(state=INIT_PRODUCTS, action={}) {
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