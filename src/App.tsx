import React from 'react';
import './App.css';
import {Button} from "react-bootstrap";
import DropdownSelect from "./components/DropdownSelect";
import AddProductModal from "./components/AddProductModal/AddProductModal";
import {useActions} from "./hooks/useActions";
import {useTypedSelector} from "./hooks/useTypedSelector";
import ProductList from "./components/ProductList";
function App() {
    const {showAddModal} = useActions()
    const {isAddModalShown} = useTypedSelector(state => state.productList)
    return (
        <div className="App">
            {isAddModalShown && <AddProductModal/>}

            <ProductList/>
            <div className='menu'>
                <Button onClick={showAddModal} className='add-button' variant="primary">Add</Button>
                <DropdownSelect/>
            </div>
        </div>
    );
}

export default App;
