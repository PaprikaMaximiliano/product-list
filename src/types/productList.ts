import { IProduct } from '../models/IProduct';

export interface ProductListState {
    products: IProduct[];
    isAddModalShown: boolean;
    isDeleteModalShown: boolean;
    currentId: number;
    productToDelete: number;
}

export enum ProductListTypes {
    ADD_PRODUCT = 'ADD_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    SHOW_ADD_MODAL = 'SHOW_ADD_MODAL',
    HIDE_ADD_MODAL = 'HIDE_ADD_MODAL',
    SHOW_DELETE_MODAL = 'SHOW_DELETE_MODAL',
    HIDE_DELETE_MODAL = 'HIDE_DELETE_MODAL',
    SORT_BY_NAME = 'SORT_BY_NAME',
    SORT_BY_COUNT = 'SORT_BY_COUNT',
    INCREMENT_CURRENT_ID = 'INCREMENT_CURRENT_ID',
    SET_PRODUCT_TO_DELETE = 'SET_PRODUCT_TO_DELETE'
}

interface ProductListAdd {
    type: ProductListTypes.ADD_PRODUCT;
    payload: IProduct;
}

interface ProductListDelete {
    type: ProductListTypes.DELETE_PRODUCT;
    payload: number;
}

interface ProductListShowAddModal {
    type: ProductListTypes.SHOW_ADD_MODAL;
}

interface ProductListHideAddModal {
    type: ProductListTypes.HIDE_ADD_MODAL;
}

interface ProductListShowDeleteModal {
    type: ProductListTypes.SHOW_DELETE_MODAL;
}

interface ProductListHideDeleteModal {
    type: ProductListTypes.HIDE_DELETE_MODAL;
}

interface ProductListSortByCount {
    type: ProductListTypes.SORT_BY_COUNT;
}

interface ProductListSortByName {
    type: ProductListTypes.SORT_BY_NAME;
}

interface ProductListIncrementCurrentId {
    type: ProductListTypes.INCREMENT_CURRENT_ID;
}

interface ProductListSetProductToDelete {
    type: ProductListTypes.SET_PRODUCT_TO_DELETE;
    payload: number;
}

export type ProductListAction =
    | ProductListShowAddModal
    | ProductListHideAddModal
    | ProductListShowDeleteModal
    | ProductListSortByCount
    | ProductListSortByName
    | ProductListHideDeleteModal
    | ProductListIncrementCurrentId
    | ProductListAdd
    | ProductListDelete
    | ProductListSetProductToDelete;
