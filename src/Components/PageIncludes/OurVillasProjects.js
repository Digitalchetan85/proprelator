import React from 'react'
import {Container, Row, Col, Card, Button, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import image1 from '../../Assets/images/projects/adarsha.png'
import image2 from '../../Assets/images/projects/prestige-white-widows.png'
import image3 from '../../Assets/images/projects/adarah-visteria.png'

export default function OurProjects() {

    const projects = [
        {
            title:"Adarsh Palm Acres", 
            type:"Villa",
            description:"Adarsh Palm Acres is the close to possession residential Villa project launched in Huttanahalli, Bagalur, North Bangalore.", 
            imgurl:image1,
            link: "/adarsh-palm-acres",
        },
        {
            title:"Prestige White Meadows", 
            type:"Apartment",
            description:"Prestige White Meadows is the landmark Ready to Move-in residential Apartment and Villas project by Prestige Constructions located in Whitefield Main Road, Whitefield, Bangalore.", 
            imgurl:image2,
            link: "/prestige-white-medows",
        },
        {
            title:"Adarsh Wisteria", 
            type:"Villa",
            description:"Adarsh Wisteria is a new premium residential Villa project in Chikkagubbi, just off Hennur Main Road, North Bangalore.", 
            imgurl:image3,
            link: "/adarsh-wisteria",
        },
        {
            title:"Adarsh Tranqville", 
            type:"Villa",
            description:"Adarsh Tranqville is a new luxury residential Villa project in Chikkagubbi, just off Hennur Main Road, North Bangalore.", 
            imgurl:image3,
            link: "/adarsh-tranqville",
        },
        {
            title:"NVT Symphony", 
            type:"Villa",
            description:"NVT Symphony of Orchards is a brand new luxury residential Villa project in the sought-after neighborhood of Sarjapur Road, Bangalore.", 
            imgurl:image3,
            link: "/nvt-symphony",
        },
        {
            title:"Prime Beverly", 
            type:"Villa",
            description:"Prime Beverly Woods is the newest luxury residential villas project in the rapidly expanding neighborhood of Sarjapur Road, Bangalore.", 
            imgurl:image3,
            link: "/prime-beverly",
        },
     
        {
            title:"Prestige City", 
            type:"Villa",
            description:"Prestige City is a new premium Township project launched right on Sarjapur Road, Bangalore.", 
            imgurl:image1,
            link: "/prestige-city",
        },
        {
            title:"CasaGrand Florella", 
            type:"Apartment",
            description:"CasaGrand Florella is the new residential Villa project by CasaGrand Builders in the rapidly expanding neighborhood of Sarjapur Road, Bangalore..", 
            imgurl:image2,
            link: "/casa-grand",
        },
        {
            title:"42 Queens Square", 
            type:"Apartment",
            description:"42 Queens Square Villas in Sarjapur Road, Bangalore..", 
            imgurl:image2,
            link: "/queen-square",
        },
        {
            title:"Radiance Bloosom", 
            type:"Apartment",
            description:"Radiance Blossom Villas in Budigere Cross, Bangalore..", 
            imgurl:image2,
            link: "/radiance-blossom",
        },
        {
            title:"Adarsh Sanctuary", 
            type:"Apartment",
            description:"Adarsh Sanctuary in Sarjapur Road, Bangalore..", 
            imgurl:image3,
            link: "/adarsh-sanctuary",
        },
        {
            title:"Concore Abode 99", 
            type:"Apartment",
            description:"Concorde Abode 99 in Bommasandra, Chandapura, Bangalore..", 
            imgurl:image2,
            link: "/concorde-abode",
        },
        {
            title:"Raffles Park", 
            type:"Apartment",
            description:"Raffles Park Villas in Soukya Road, Whitefield, Bangalore..", 
            imgurl:image1,
            link: "/raffles-park",
        },
        {
            title:"Assetz Earth & Essence", 
            type:"Apartment",
            description:"Assetz Earth & Essence in Yelahanka, Bangalore..", 
            imgurl:image2,
            link: "/assetz-earth",
        },
        {
            title:"Assetz Leaves & Lives", 
            type:"Apartment",
            description:"Assetz Leaves & Lives in Sarjapur Road, Bangalore..", 
            imgurl:image1,
            link: "/assetz-leaves",
        },
        {
            title:"Total Environment In That Quiet Earth", 
            type:"Apartment",
            description:"Total Environment In That Quiet Earth Hennur Road, Bangalore..", 
            imgurl:image1,
            link: "/total-environment",
        },
    ]

    return (
        <div id="our-projects" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
            <Container>
                <h2 className="pt-2 pb-2 text-center">Our Projects</h2>
                {/* <h3 className="pt-2 pb-2">Villa Projects</h3> */}
                <Row>
                    {
                        projects.map( (project, index) => (
                            <Col md={4} key={index}> 
                                <Card className="shadow">
                                    <Card.Img variant="top" src={project.imgurl} />
                                        <Card.Body>
                                            <Badge className="float-end bg-secondary">{project.type}</Badge>
                                            <Card.Title className="text-start">{project.title}</Card.Title>
                                            <Card.Text>{project.description}</Card.Text>
                                            <div>
                                                <Button variant="primary" as={Link} to={project.link} className="float-start">Read More</Button>
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
