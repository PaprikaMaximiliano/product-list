import React, { FC} from 'react';
import { Button, Form } from 'react-bootstrap';
import './DeleteProductModal.css';
import {useActions} from "../../hooks/useActions";

import {useTypedSelector} from "../../hooks/useTypedSelector";

const DeleteProductModal: FC = () => {
    const {hideDeleteModal, deleteProduct} = useActions();
    const {productToDelete} = useTypedSelector(state => state.productList);

    return (
        <div className="div-modal">
            <Form className="modal-main">
                <Form.Group>
                    <Form.Text className={'fs-3 text-black d-flex justify-content-center mb-4'}>
                        Are you sure that you want delete this product?
                    </Form.Text>
                </Form.Group>

                <div className="form-buttons">
                    <Button onClick={() => {
                        deleteProduct(productToDelete)
                        hideDeleteModal()
                    }} variant="danger">
                        Delete
                    </Button>
                    <Button onClick={hideDeleteModal} variant="primary">
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default DeleteProductModal;
