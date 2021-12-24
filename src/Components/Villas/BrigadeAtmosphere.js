import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Table,
  Button,
} from "react-bootstrap";
import Image1 from "../../Assets/images/projects/adrash-palm-acres/slider/1.png";
import BrigadeAtmosphereSlider from "./slider/BrigadeAtmosphereSlider";


export default function BrigadeAtmosphere() {
  return (
    <div>
      <BrigadeAtmosphereSlider />
      <div id="content" className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="pt-2 pb-2 pt-md-5 pb-md-5 m-1">
                <h3>About Brigade Atmosphere</h3>
                <p>Brigade Atmosphere is the new residential Villa project launched in Devanahalli, Bangalore.</p>
                <p>The residential enclave Brigade Atmosphere features the very best in Brigade Group’s luxury living segment. The project offers spacious Villas with luxurious features.</p>
                <p>Beautiful landscapes all around Brigade Atmosphere make it more special & Elite.</p>
                <p>The builder is guaranteed to bring a quality living experience to the community of Devanahalli, North Bangalore with brilliant architecture and an equivalent lifestyle in Atmosphere.</p>
                <p>Brigade Atmosphere Location has excellent connectivity & it is located at the crux of Devanahalli near existing and upcoming communities & facilities.</p>
                <p>Amenities at Brigade Atmosphere include a fully equipped clubhouse, landscaped gardens, gymnasium, swimming pool, recreation rooms, outdoor sports courts, children’s play area, party hall, and meticulously planned with utmost importance to state-of-the-art 24/7 securities.</p>

                

                <a href="https://www.youtube.com/watch?v=atMp4ufSWw4">
                  <Image src={Image1} alt="YouTube" className="img-fluid" />
                </a>
              </div>
              <div className="pt-2 pb-2 pt-md-5 pb-md-5 m-1">
                <Row>
                  <h2 className="pb-2">Brigade Atmosphere Configuration</h2>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Image src={Image2}  alt="" className="img-fluid"/> */}
                      <Card.Body>
                        <Card.Title>Project Location</Card.Title>
                        <Card.Text>Devanahalli</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Total Land Area</Card.Title>
                        <Card.Text>18 Acres</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>No. of Units</Card.Title>
                        <Card.Text>109 Units</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Towers and Blocks</Card.Title>
                        <Card.Text>G + 2 Floors</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Unit Variants</Card.Title>
                        <Card.Text>4 BHK Villas</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Possession Time </Card.Title>
                        <Card.Text>Feb 2020 Onwards</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="pb-2 pb-md-5">
                <Table
                  responsive="sm"
                  className="table-bordered align-middle text-center"
                >
                  <thead className="bg-primary text-white">
                    <tr>
                      <th>Type</th>
                      <th>Villa in Sq.Ft</th>
                      <th>Courtyard area</th>
                      <th>Total Area</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4 BHK Villas</td>
                      <td>3090</td>
                      <td>970</td>
                      <td>4060</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK Villas</td>
                      <td>3410</td>
                      <td>930</td>
                      <td>4340</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK Villas</td>
                      <td>3050</td>
                      <td>1370</td>
                      <td>4420</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK Villas</td>
                      <td>3050</td>
                      <td>1520</td>
                      <td>4570</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK Villas</td>
                      <td>3010</td>
                      <td>1770</td>
                      <td>4780</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK Villas</td>
                      <td>3410</td>
                      <td>1430</td>
                      <td>4840</td>

                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    
                   
                  </tbody>
                </Table>
              </div><div className="pb-2 pb-md-5" id="amenities">
              <Row>
                  <h2 className="pb-2">Brigade Atmosphere Amenities</h2>
                  <Col md={6}>
                    <div className="">
                      <ul>
                        <li>Gymnasium</li>
                        <li>Clubhouse</li>
                        <li>Swimming Pool</li>  
                        <li>Games Room</li>
                        <li>Basketball Court</li>
                        <li>Jogging Track</li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="">
                      <ul>
                        <li>Outdoor Courts </li>
                        <li>Table Tennis</li>
                        <li>Landscaped Gardens</li>
                        <li>Kids Play Area</li>
                        <li>Spa, Sauna</li>
                        <li>Party Area</li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                {/* <Row>
                  <h2 className="pb-2">Adarsh Palm Acres Configuration</h2>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      <div className="text-center">
                          <Image src={ImageIcon1} alt="" className="img-fluid custom-height"></Image>
                      </div>
                      <Card.Body>
                        <Card.Title>Gymnasium</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      <div className="text-center">
                          <Image src={ImageIcon2} alt="" className="img-fluid custom-height"></Image>
                      </div>
                      <Card.Body>
                        <Card.Title>Clubhouse</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      <div className="text-center">
                          <Image src={ImageIcon3} alt="" className="img-fluid custom-height"></Image>
                      </div>
                      <Card.Body>
                        <Card.Title>Swimming Pool</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      <div className="text-center">
                          <Image src={ImageIcon4} alt="" className="img-fluid custom-height"></Image>
                      </div>
                      <Card.Body>
                        <Card.Title>Games Room</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      <div className="text-center">
                          <Image src={ImageIcon5} alt="" className="img-fluid custom-height"></Image>
                      </div>
                      <Card.Body>
                        <Card.Title>Restaurant</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      <div className="text-center">
                          <Image src={ImageIcon6} alt="" className="img-fluid custom-height"></Image>
                      </div>
                      <Card.Body>
                        <Card.Title>Jogging Track</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      <div className="text-center">
                          <Image src={ImageIcon7} alt="" className="img-fluid custom-height"></Image>
                      </div>
                      <Card.Body>
                        <Card.Title>Sports Courts</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      <div className="text-center">
                          <Image src={ImageIcon8} alt="" className="img-fluid custom-height"></Image>
                      </div>
                      <Card.Body>
                        <Card.Title>Health Club & Spa</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      <div className="text-center">
                          <Image src={ImageIcon9} alt="" className="img-fluid custom-height"></Image>
                      </div>
                      <Card.Body>
                        <Card.Title>Landscaped Gardens</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      <div className="text-center">
                          <Image src={ImageIcon10} alt="" className="img-fluid custom-height"></Image>
                      </div>
                      <Card.Body>
                        <Card.Title>Kids Play Area</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      <div className="text-center">
                          <Image src={ImageIcon11} alt="" className="img-fluid custom-height"></Image>
                      </div>
                      <Card.Body>
                        <Card.Title>Library</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      <div className="text-center">
                          <Image src={ImageIcon12} alt="" className="img-fluid custom-height"></Image>
                      </div>
                      <Card.Body>
                        <Card.Title>Party Areas</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row> */}
              </div>
              <div className="pb-2 pb-md-5">
                  <h3>Brigade Atmosphere Price</h3>
                <Table
                  responsive="sm"
                  className="table-bordered align-middle text-center"
                >
                  <thead className="bg-primary text-white">
                    <tr>
                      <th>Unit Type</th>
                      <th>Size in Sq.Ft</th>
                      <th>Approx. All Inclusive Price</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4 BHK Villas</td>
                      <td>3050 to 3410</td>
                      <td>Rs. 2.41 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                   
                  </tbody>
                </Table>
              </div>
              <div className="pb-2 pb-md-5">
                  <Row>
                      <Col md={12}>
                          <h2 className="pb-2">About the Builder – Brigade Group</h2>
                          <p>In 1986, we began as a team of five, operating out of a small site office on our first project, with our sole focus being property development. Today, we number well over 500 and operate from plush offices across two floors at the prestigious World Trade Center Bangalore.</p>
                          <p>Our team of ‘Brigadiers’—based in several major cities in South India, Dubai and San Francisco—work across a diverse portfolio of domains and projects, and draw upon a national and international pool of professional associates. To date, we have completed over 100 buildings; worked on numerous interesting projects and initiatives, many of which inhabit realms unrelated to our business; and engaged with the community through a variety of CSR initiatives. In the process, we have earned important certifications, won prestigious awards and created urban landmarks.</p>
                      </Col>
                  </Row>
              </div>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
