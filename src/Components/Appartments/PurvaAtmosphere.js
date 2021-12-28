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
import PurvaAtmosphereSlider from "./Slider/PurvaAtmosphereSlider";


export default function PurvaAtmosphere() {
  return (
    <div>
      <PurvaAtmosphereSlider  />
      <div id="content" className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="pt-2 pb-2 pt-md-5 pb-md-5 m-1">
                <h3>About Purva Atmosphere</h3>
                <p>Purva Atmosphere is the new residential Apartment project launched in Thanisandra Road, Bangalore.</p>
                <p>The residential enclave, Purva Atmosphere features the very best in Puravankara luxury segment. The project offers spacious apartments with luxurious features.</p>
                <p>Purva Atmosphere is based and conceptualized on “WORLD HOME COLLECTION” concept. It is degined considering Nature, Inteligence, Technology & Hand Picked Luxury.</p>
                <p>40′ Air Filteration Tower which purifiers the air for radious of around 3 Kms & Beautiful landscapes all around Purva Atmosphere makes it more special & Elite.</p>
                <p>The builder is guaranteed to bring a quality living experience to the community of Thanisandra with brilliant architecture and equivalent lifestyle in Purva Atmosphere.</p>
                <p>Purva Atmosphere Location has excellent connectivity & it is located at the heart of the developing North Bangalore, Thanisandra area.</p>
                <p>Amenities at Purva Atmosphere include a fully equipped clubhouse, landscaped gardens, gymnasium, swimming pool, recreation rooms, outdoor sports courts, children’s play area, party hall, and meticulously planned with utmost importance to state-of-the-art 24/7 securities.</p>

                <a href="https://www.youtube.com/watch?v=atMp4ufSWw4">
                  <Image src={Image1} alt="YouTube" className="img-fluid" />
                </a>
              </div>
              <div className="pt-2 pb-2 pt-md-5 pb-md-5 m-1">
                <Row>
                  <h2 className="pb-2">Purva Atmosphere Configuration</h2>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Image src={Image2}  alt="" className="img-fluid"/> */}
                      <Card.Body>
                        <Card.Title>Project Location</Card.Title>
                        <Card.Text>Hegde Nagar, Thanisandra Road</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Total Land Area</Card.Title>
                        <Card.Text>13 Acres</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>No. of Units</Card.Title>
                        <Card.Text>939 Units</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Towers and Blocks</Card.Title>
                        <Card.Text>3B + G + 33,34 Floors</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Unit Variants</Card.Title>
                        <Card.Text>2,3,4 BHK</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Possession Time </Card.Title>
                        <Card.Text>Mar 2024 Onwards </Card.Text>
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
                      <th>Unit Type</th>
                      <th>Size in Sq.Ft</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2 BHK</td>
                      <td>1299</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3 BHK</td>
                      <td>1674</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3 BHK</td>
                      <td>1989</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3 BHK</td>
                      <td>2241</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK</td>
                      <td>2420</td>
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
                  <h2 className="pb-2">Purva Atmosphere Amenities</h2>
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
                        <li>Outdoor Courts</li>
                        <li>Table Tennis</li>
                        <li>Landscaped Gardens</li>
                        <li>Kids Play Area</li>
                        <li>Spa, Sauna</li>
                        <li>Party Areas</li>
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
                  <h3>Purva Atmosphere Price</h3>
                <Table
                  responsive="sm"
                  className="table-bordered align-middle text-center"
                >
                  <thead className="bg-primary text-white">
                    <tr>
                      <th>Unit Type</th>
                      <th>Size in Sq.Ft</th>
                      <th>Basic Price</th>
                      <th>Approx. All Inclusive Price</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2 BHK</td>
                      <td>1278</td>
                      <td>Rs. 92 Lacs</td>
                      <td>	Rs. 1.04 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3 BHK Comfort</td>
                      <td>1680</td>
                      <td>Rs. 118 Lacs</td>
                      <td>Rs. 1.56 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3 BHK Grand</td>
                      <td>2000</td>
                      <td>Rs. 139 Lacs</td>
                      <td>Rs.1.56 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3 BHK Lux</td>
                      <td>2182</td>
                      <td>Rs. 150 Lacs</td>
                      <td>Rs.1.69 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK</td>
                      <td>2421</td>
                      <td>Rs. 166 Lacs</td>
                      <td>Rs.1.87 Crore Onwards</td>
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
                          <h2 className="pb-2">About the Builder – Puravankara</h2>
                          <p>Since its inception in 1975, Puravankara has believed that there is only one mantra for success: Quality. This credo combined with uncompromising values, customer-centricity, robust engineering, and transparency in business operations, has placed it among the ‘most preferred’ real estate brands in both residential and commercial segments.</p>
                          <p>The Company has grown from strength to strength, having successfully completed 36 residential/commercial projects spanning 7.80 million square feet. Currently, it has 29 million square feet of projects under development, with an additional 88 million square feet in projected development over the next 7-10 years. An ISO 9001 certification by DNV in 1998 and a DA2+ rating by CRISIL are testament to Puravankara’s reputation as a real estate developer of the highest quality and reliability standards.</p>
                          <p>The Group commenced operations in Mumbai and has established significant presence in the metropolitan cities of Bangalore, Kochi, Chennai, Coimbatore, Hyderabad, Mysore and overseas in Dubai, Colombo and Saudi-Arabia. Explore other projects from Puravankara like : Purva Waves, Purva 270, Purva Whitehall, Purva Palm Beach, Purva Sunflower, Puravankara Sammys Dreamland & Puravankara Sound of Water.</p>
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
