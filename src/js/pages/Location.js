import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import { geoLocations } from '../data/GeoLocationData';
import { LocationInfo, ChangeView } from '../components/LocationInfo';
import WomenEating from '../../location images/women-eating.jpg';

let initalState = geoLocations.filter(location => location.state === "New York");

//TODO
    //implement functionality to location__hero__btn scroll to the location map onCLick

function Location() {
    const [stateSelect, setStateSelect] = useState(initalState[0].state);
    const [coordinates, setCoordinates] = useState([initalState[0].lat, initalState[0].long]);
    const [allLocations, setAllLocations] = useState(initalState);

    //directs user to location on map when button pressed
    const onLocationClick = (lat, long) => {
        setCoordinates([lat, long]);
    }

    useEffect(() => {
        const selectionResults = geoLocations.filter(location => location.state === stateSelect);
        const center = selectionResults[0];
        setCoordinates([center.lat, center.long]);
        setAllLocations(selectionResults);

    }, [stateSelect])

    return (
        <Container className='d-flex flex-column m-0 p-0 position-relative' id='location' fluid>
            <Container className='m-0 p-0 h-50' id="location__hero" fluid>
                <Row className='d-flex flex-row justify-content-evenly align-items-center h-100'>
                    <Col className='d-flex justify-content-end' id='location__titles'>
                        <Row className='w-75 d-flex flex-column justify-content-evenly'>
                            <h3 className='display-3 text-start'>Our Locations</h3>
                            <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor et, facilis culpa sed vero velit excepturi illum, inventore ratione dolorem vel quo. Assumenda, quasi voluptate.</p>
                            <Button id='location__hero__btn'>Find Location</Button>
                        </Row>
                    </Col>
                    <Col className='w-50 d-flex align-items-center justify-content-center' id='location__heroImg-container'>
                        <img src={WomenEating} alt="women eating salad" id='location__heroImg' className='rounded' />
                    </Col>
                </Row>
            </Container>
            <Container className='d-flex justify-content-evenly h-50' id="location__maps" fluid>
                <Row className='w-75 d-flex flex-row align-items-center'>
                    <Col className='d-flex flex-column h-100' id='location__map-left' xl={8}>
                        <Row id='location__states'>
                            <Form className='d-flex flex-row justify-content-between m-0 p-0' >
                                <Form.Select
                                    className='location__form-select'
                                    onChange={e => setStateSelect(e.target.value)}
                                    aria-label='Enter in state'
                                >
                                    <option value='New York'>New York</option>
                                    <option value='Connecticut'>Connecticut</option>
                                    <option value="New Jersey">New Jersey</option>
                                    <option value="Massachusetts">Massachusetts</option>
                                </Form.Select>
                                <Form.Select className='location__form-select'>
                                    {allLocations.map((location, i) => {
                                        return (
                                            <option value={location.address} key={i}>
                                                {location.address}
                                            </option>
                                        )
                                    })}
                                </Form.Select>
                            </Form>
                        </Row>
                        <Row className='d-flex flex-row align-items-center justify-content-center mb-2' id='location__info'>
                            <h5 className='display-6 text-start'>Found {allLocations.length} locations in {stateSelect}</h5>
                            <Row id='location__data'>
                                {allLocations.map((location, i) => {
                                    return (
                                        <>
                                            <LocationInfo
                                                key={i}
                                                geoLocation={location}
                                                onLocationClick={() => onLocationClick(location.address)}
                                            />
                                            <hr />
                                        </>
                                    )
                                })}
                            </Row>
                        </Row>
                    </Col>
                    <Col className='h-100' xl={4} id='location__map'>
                        <MapContainer
                            center={[coordinates[0], coordinates[1]]}
                            zoom={13}
                            scrollWheelZoom={false}
                            className='leaflet-container'
                            style={{ height: '100%' }}
                        >
                            <ChangeView lat={coordinates[0]} long={coordinates[1]} />
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {allLocations.map((location) => {
                                return (
                                    <Marker
                                        key={location.address}
                                        position={[location.lat, location.long]}>
                                        <Popup>{location.address}</Popup>
                                    </Marker>
                                )
                            })}
                        </MapContainer>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Location;

