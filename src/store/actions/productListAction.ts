import {ProductListAction, ProductListTypes} from "../../types/productList";
import {IProduct} from "../../models/IProduct";


export const addProduct = (product: IProduct): ProductListAction => {
    return {
        type: ProductListTypes.ADD_PRODUCT,
        payload: product,
    };
};

export const deleteProduct = (id: number): ProductListAction => {
    return {
        type: ProductListTypes.DELETE_PRODUCT,
        payload: id,
    };
};

export const showAddModal = (): ProductListAction => {
    return {
        type: ProductListTypes.SHOW_ADD_MODAL
    };
}

export const hideAddModal = (): ProductListAction => {
    return {
        type: ProductListTypes.HIDE_ADD_MODAL
    };
}

export const showDeleteModal = (): ProductListAction => {
    return {
        type: ProductListTypes.SHOW_DELETE_MODAL
    };
}

export const hideDeleteModal = (): ProductListAction => {
    return {
        type: ProductListTypes.HIDE_DELETE_MODAL
    };
}

export const sortByName = (): ProductListAction => {
    return {
        type: ProductListTypes.SORT_BY_NAME
    };
}

export const sortByCount = (): ProductListAction => {
    return {
        type: ProductListTypes.SORT_BY_COUNT
    };
}

export const incrementCurrentId = (): ProductListAction => {
    return {
        type: ProductListTypes.INCREMENT_CURRENT_ID
    };
}

export const setProductToDelete = (id: number): ProductListAction => {
    return {
        type: ProductListTypes.SET_PRODUCT_TO_DELETE,
        payload: id
    }
}

