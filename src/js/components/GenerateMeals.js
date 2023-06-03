import { Button, Container, Col, Row, Accordion, Card} from 'react-bootstrap';


export const GenerateMeal = ({ meal, ingrid, nutri, type, logo }) => {
    return (
        <Container className="rounded d-flex flex-row align-items-center" id='generatedMeal' fluid>
            <Col className='d-flex flex-column justify-content-between align-items-center h-100'>
                <Row className="w-100 text-center" id='meal__img'>
                    <h4 className='display-6'>{meal.title}</h4>
                </Row>
                <Row className='w-75'>
                    <img src={meal.image} alt='randomly generated meal from spoonacular'/>
                </Row>
                <Row>
                    <p className='lead'>{type}</p>
                </Row>
            </Col>
            <Col className="d-flex flex-column justify-content-between w-75 p-4" style={{height: '100%'}}>
                <Row>
                    <Col>
                        <ul>
                            {ingrid.map((ingr, i) => {
                                return (
                                    <li key={i} className='lead'>
                                        {ingr.amount} {ingr.unit} {ingr.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                    <Col className='d-flex flex'>
                        <ul className='d-flex flex-column justify-content-evenly'>
                            {nutri.map((nutr, i) => {
                                return (
                                    <li key={i} className='lead'>
                                        {nutr.name}: {nutr.amount}{nutr.unit}
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Container >
    )
}





