import React, { FC, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddProductModal.css';
import {useActions} from "../../hooks/useActions";
import {IProduct} from "../../models/IProduct";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const AddProductModal: FC = () => {
    const [name, setName] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    const [count, setCount] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const {hideAddModal, addProduct, incrementCurrentId} = useActions();

    const {currentId} = useTypedSelector(state => state.productList)

    const isValidForm = () => {
        return !name || !url || !width || !height || !weight || !comment;
    }

    const onAdd = () => {
        if(isValidForm()){
            return;
        }
        const product: IProduct = {
            id: currentId,
            imageUrl: url,
            name,
            count: count,
            size:{
                width,
                height
            },
            weight,
            comments: [{
                id: currentId,
                productId: currentId,
                description: comment,
                date: new Date().toLocaleString('uk-UA')
            }]
        }

        addProduct(product);
        hideAddModal();
        incrementCurrentId();
    }

    return (
        <div className="div-modal">
            <Form className="modal-main">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product name</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter name of product"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>URL of image</Form.Label>
                    <Form.Control
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        type="text"
                        placeholder="Enter name of product"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Count</Form.Label>
                    <Form.Control
                        value={count}
                        onChange={(e) => setCount(+e.target.value)}
                        type="text"
                        placeholder="Count"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Size</Form.Label>
                    <Form.Control
                        value={width}
                        onChange={(e) => setWidth(+e.target.value)}
                        className="mb-2"
                        type="text"
                        placeholder="Width"
                    />
                    <Form.Control
                        value={height}
                        onChange={(e) => setHeight(+e.target.value)}
                        type="text"
                        placeholder="Height"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Weight</Form.Label>
                    <Form.Control
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        type="text"
                        placeholder="Weight in grams"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        type="text"
                        placeholder="Comment"
                    />
                </Form.Group>
                <div className="form-buttons">
                    <Button onClick={onAdd} variant="primary">
                        Add
                    </Button>
                    <Button onClick={hideAddModal} variant="primary">
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default AddProductModal;
