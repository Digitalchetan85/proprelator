import React from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import image1 from '../../Assets/images/projects/adarsha.png'
import image2 from '../../Assets/images/projects/prestige-white-widows.png'
import image3 from '../../Assets/images/projects/adarah-visteria.png'

export default function OurApartmentProjects() {

    const projects = [
        {
            title:"Adarsh Palm Acres", 
            description:"Adarsh Palm Acres is the close to possession residential Villa project launched in Huttanahalli, Bagalur, North Bangalore.", 
            imgurl:image1,
        },
        {
            title:"Prestige White Meadows", 
            description:"Prestige White Meadows is the landmark Ready to Move-in residential Apartment and Villas project by Prestige Constructions located in Whitefield Main Road, Whitefield, Bangalore.", 
            imgurl:image2,
        },
        {
            title:"Adarsh Wisteria", 
            description:"Adarsh Wisteria is a new premium residential Villa project in Chikkagubbi, just off Hennur Main Road, North Bangalore.", 
            imgurl:image3,
        },
    ]

    return (
        <div id="our-projects" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
            <Container>
                <h3 className="pt-2 pb-2">Apartment Projects</h3>
                <Row>
                    {
                        projects.map( (project, index) => (
                            <Col md={4} key={index}> 
                                <Card className="shadow">
                                    <Card.Img variant="top" src={project.imgurl} />
                                        <Card.Body>
                                            <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>{project.description}</Card.Text>
                                            <div>
                                                <Button variant="primary" className="float-start">Read More</Button>
                                                <Button variant="primary" className="float-end">Contact Us</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}
