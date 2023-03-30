import {IProduct} from "../../models/IProduct";
import {ProductListAction, ProductListState, ProductListTypes} from "../../types/productList";


const initialState: ProductListState = {
    products: [],
    isAddModalShown: false,
    isDeleteModalShown: false,
    currentId: 0,
    productToDelete: 0,
}

export const productListReducer = (state = initialState, action: ProductListAction): ProductListState => {
    switch (action.type){
        case ProductListTypes.ADD_PRODUCT:
            const copyProducts: IProduct[] = [...state.products];
            copyProducts.push(action.payload);
            copyProducts.sort((a,b) => a.name.localeCompare(b.name));
            return {...state, products: copyProducts}

        case ProductListTypes.DELETE_PRODUCT:
            let productsToDelete = [...state.products];
            productsToDelete = productsToDelete.filter(product => product.id != action.payload);
            return {...state, products: productsToDelete}

        case ProductListTypes.SHOW_ADD_MODAL:
            return {...state, isAddModalShown: true}

        case ProductListTypes.HIDE_ADD_MODAL:
            return {...state, isAddModalShown: false}

        case ProductListTypes.SHOW_DELETE_MODAL:
            return {...state, isDeleteModalShown: true}

        case ProductListTypes.HIDE_DELETE_MODAL:
            return {...state, isDeleteModalShown: false}

        case ProductListTypes.SORT_BY_NAME:
            const productsToSortByName: IProduct[] = [...state.products];
            productsToSortByName.sort((a,b) => a.name.localeCompare(b.name));
            return {...state, products: productsToSortByName}

        case ProductListTypes.SORT_BY_COUNT:
            const productsToSortByCount: IProduct[] = [...state.products];
            productsToSortByCount.sort((a,b) => b.count - a.count);
            console.log('sorting by count')
            return {...state, products: productsToSortByCount}

        case ProductListTypes.INCREMENT_CURRENT_ID:
            return {...state, currentId: state.currentId + 1}

        case ProductListTypes.SET_PRODUCT_TO_DELETE:
            return {...state, productToDelete: action.payload}
        default:
            return state;
    }
}