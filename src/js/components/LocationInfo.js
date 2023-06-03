import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { useMap } from 'react-leaflet';
import { useEffect } from 'react';

//TODO
    //implement functionality to locationInfo button to point user towards location onClick
export const LocationInfo = ({geoLocation, onLocationClick}) => {

    return (
        <Container className='h-50 w-100' id='location__card'>
            <Row className='h-100 d-flex flex-row justify-content-evenly'>
                <Col className="h-100 m-0 p-0"  xl={3}>
                    <img 
                        src={geoLocation.image} 
                        alt="Random image that corresponds with location"
                        className='rounded' 
                    />
                </Col>
                <Col id='location-disc' xl={7} className='d-flex flex-column justify-content-evenly h-100'>
                    <h5 className='display-6 h-25'>Keto Managers at {geoLocation.city}</h5>
                    <p className='subtitle undertitle-lg lead'>{geoLocation.address}</p>
                    <p className='lead h-75 d-flex align-items-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut at nobis, doloribus in magnam recusandae!</p>
                </Col>
                <Col xl={2} className='d-flex justify-content-center align-items-start h-25'>
                    <Button className="btn-xs" id='locationInfo__btn'>View on map</Button>
                </Col>
            </Row>
        </Container>
    )
};

//function to update the map center when user selects new state or address
export const ChangeView = ({lat, long}) => {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, long]);
    }, [lat, long]);
    return null;
}