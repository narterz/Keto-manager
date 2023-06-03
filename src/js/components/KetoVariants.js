import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

export const KetoVariants = ({variations}) => {
    return (
        <Row className='d-flex flex-column align-items-center w-75 h-50' id='meal__variation'>
            <Col className='d-flex flex-row justify-content-center gap-5' id='ketoVars'>
                {variations.map((variant, i) => {
                    return (
                        <Card
                            className='ketoVars__card d-flex justify-content-evenly p-3'
                            id={'ketoVar' + i}
                            key={i}
                        >
                            <div className="ketoVars__logo">
                                {variant.image}
                            </div>
                            <Card.Title className='text-start mt-2' id='card-title'>
                                {variant.name}
                            </Card.Title>
                            <Card.Text className='text-start' id='card-text'>
                                {variant.description}
                            </Card.Text>
                            <ul className='ketoVars__list list-unstyled' id={'ketoList' + i}>
                                {variant.macros.map((mac, i) => {
                                    return (
                                        <li key={i}>
                                            {mac.type + ': ' + mac.value + '%'}
                                        </li>
                                    )
                                })}
                            </ul>
                        </Card>
                    )
                })}
            </Col>
        </Row>
    )
}
