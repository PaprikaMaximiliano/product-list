import React, { FC } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import {IProduct} from "../../models/IProduct";
import './ProductItem.css'
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import DeleteProductModal from "../DeleteProductModal/DeleteProductModal";

interface ProductItemProps {
    product: IProduct
}

const ProductItem: FC<ProductItemProps> = ({product}) => {

    const {showDeleteModal,setProductToDelete} = useActions()
    const {isDeleteModalShown} = useTypedSelector(state => state.productList)

    const onDelete = (id: number) => {
        showDeleteModal();
        setProductToDelete(id)
    }

    return (
            <div>
                {isDeleteModalShown && <DeleteProductModal/>}
                <Card style={{ width: '18rem' }} className={'album'}>
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Body >
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Subtitle className="text-muted mb-2">{product.count} pieces left</Card.Subtitle>
                        <Card.Text className={'fs-5'}>
                            Width: {product.size.width}. <br/>
                            Height: {product.size.height}.
                        </Card.Text>
                        <Button variant="primary">More about product</Button>
                        <Button variant="danger" className='delete-button' onClick={() => onDelete(product.id)}>DELETE</Button>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item style={{borderBottom: ''}}>
                            <h3>Comments</h3>
                        </ListGroup.Item>
                        {product.comments.map((comment) => (
                            <ListGroup.Item>{comment.description}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
            </div>
    );
};

export default ProductItem;
