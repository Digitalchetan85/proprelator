import React from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import image1 from '../../Assets/images/projects/adarsha.png'
import image2 from '../../Assets/images/projects/prestige-white-widows.png'
import image3 from '../../Assets/images/projects/adarah-visteria.png'
import { Link } from 'react-router-dom';

export default function OurApartmentProjects() {

    const projects = [
        {
            title:"Assetz 38 & Banyan", 
            description:"Assetz 38 & Banyan is the Ready to Move-In Ultra Luxury residential Apartment project launched in CV Raman Nagar, Bangalore.", 
            imgurl:image1,
            link: "/assetz-banyan",
        },
        {
            title:"Assetz Sun and Sanctum", 
            description:"Assetz Sun and Sanctum in Old Madras Road, Bangalore.", 
            imgurl:image2,
            link: "/assetz-sun",
        },
        {
            title:"Assetz Marq 3.0", 
            description:"Assetz Marq 3.0 in Whitefield, Bangalore", 
            imgurl:image3,
            link: "/assetz-Marq",
        },
        {
            title:"Sobha Windsor", 
            description:"Sobha Windsor in Whitefield, Bangalore.", 
            imgurl:image2,
            link: "/sobha-windsor",
        },
        {
            title:"Sobha Manhattan", 
            description:"Sobha Town Park Manhattan Towers in Hosur Road, Bangalore.", 
            imgurl:image1,
            link: "/sobha-manhattan",
        },
        
        {
            title:"Nikoo Homes 4", 
            description:"Nikoo Homes 4 in Bhartiya City, Thanisandra, Bangalore", 
            imgurl:image3,
            link: "/nikoo-homes",
        },
        {
            title:"Godrej Ananda    ", 
            description:"Godrej Ananda in Bagalur, Bangalore", 
            imgurl:image3,
            link: "/godrej-ananda",
        },        
        {
            title:"Purva Atmosphere", 
            description:"Purva Atmosphere in Thanisandra, Bangalore", 
            imgurl:image1,
            link: "/purva-atmosphere",
        },        
        {
            title:"Adarsh Palm Retreat Lake Front", 
            description:"Adarsh Palm Retreat Lake Front in Kaikondrahalli, Bangalore, Bangalore", 
            imgurl:image2,
            link: "/adarsh-palm-retreat",
        },       
        {
            title:"Brigade Cornerstone Utopia", 
            description:"Brigade Cornerstone Utopia in Varthur, Bangalore, Bangalore", 
            imgurl:image3,
            link: "/brigade-cornerstone",
        },      
        {
            title:"Sobha Dream Gardens", 
            description:"Sobha Dream Gardens in Thanisandra, Bangalore", 
            imgurl:image2,
            link: "/sobha-dream-gardens",
        },     
        {
            title:"Karle Vario Homes", 
            description:"Karle Vario Homes at Karle Town Centre, Nagavara, Bangalore", 
            imgurl:image1,
            link: "/karle-vario-homes",
        },   
        {
            title:"Total Environment The Magic Faraway Tree", 
            description:"Total Environment The Magic Faraway Tree in Kanakapura Road, Bangalore", 
            imgurl:image3,
            link: "/total-environment-magic",
        },   
        {
            title:"Sobha HRC Pristine", 
            description:"Sobha HRC Pristine in Jakkur, Bangalore", 
            imgurl:image1,
            link: "/sobha-pristine",
        },
        {
            title:"Sobha Dream Acres", 
            description:"Sobha Dream Acres in Panathur Road, Bangalore", 
            imgurl:image3,
            link: "/sobha-dream-acres",
        },
        {
            title:"Sobha Lake Garden", 
            description:"Sobha Lake Garden in KR Puram, Bangalore", 
            imgurl:image1,
            link: "/sobha-lake-garden",
        },
        {
            title:"Mahindra Windchimes", 
            description:"Mahindra Windchimes in Bannerghatta Road, Bangalore", 
            imgurl:image3,
            link: "/mahindra-windchimes",
        },
        {
            title:"Karle Town Center Zenith", 
            description:"Karle Town Center Zenith in Nagavara, Hebbal, Bangalore", 
            imgurl:image2,
            link: "/karle-town",
        },
        {
            title:"Sobha Saptrang", 
            description:"Sobha Saptrang in Koramangala, Bangalore", 
            imgurl:image1,
            link: "/sobha-saptrang",
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
