import Form from 'react-bootstrap/Form';
import React, {FC} from 'react';
import { useActions } from '../hooks/useActions';

const SelectBasicExample: FC = () => {
    const { sortByName, sortByCount } = useActions();

    const onChange = (e: React.FormEvent<HTMLSelectElement>) => {
        const type = (e.target as HTMLFormElement).value;
        if(type === 'byName'){
            sortByName()
            console.log('byName sort')
            return;
        }
        sortByCount();

    };

    return (
        <Form.Select onChange={onChange} aria-label="Default select example">
            <option disabled>Open this select menu</option>
            <option value="byName">A-Z</option>
            <option value="byCount">By count</option>
        </Form.Select>
    );
};

export default SelectBasicExample;
