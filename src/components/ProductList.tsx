import React, { FC } from 'react';
import GridSystem from "./GridSystem";
import ProductItem from "./ProductItem/ProductItem";
import {useTypedSelector} from "../hooks/useTypedSelector";



const ProductList: FC = () => {
    const {products} = useTypedSelector(state => state.productList);

    return (
        <GridSystem colCount={3} md={4}>
            {products.map(product =>
                <ProductItem key={product.id} product={product}/>
            )}
        </GridSystem>
    );
};

export default ProductList;
