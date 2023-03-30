import React, {ReactNode} from 'react';
import { FC } from 'react';

import {Container, Row, Col} from "react-bootstrap";

interface GridSystemProps {
    colCount: number;
    children: ReactNode[];
    md: number;
}

const GridSystem: FC<GridSystemProps> = ({ colCount, children, md }) => {

    let index = 0;

    const buildGrid = () => {
        return (
            renderRows()
        )
    }

    const renderRows = () => {
        const rowCount: number = Math.floor(children.length / colCount) + 1;
        let rows = [];
        for (let row = 0; row < rowCount; row++) {
            rows.push(
                <Row className='Row'>
                    {
                        renderCols()
                    }
                </Row>
            )
        }

        return rows;

    }

    const renderCols = () => {
        let cols = [];

        for (let col = 0; col < colCount; col++, index++) {
            if(index < children.length) {
                cols.push(
                    <Col className='Col' md={md}>
                        {children[index]}
                    </Col>
                )
            }
        }

        return cols;

    }

    return(
        <Container className='Container'>
            {
                buildGrid()
            }
        </Container>
    );
};

export default GridSystem;
