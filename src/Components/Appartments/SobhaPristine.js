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
import SobhaPristineSlider from './Slider/SobhaPristineSlider';


export default function SobhaPristine() {
  return (
    <div>
      <SobhaPristineSlider />
      <div id="content" className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="pt-2 pb-2 pt-md-5 pb-md-5 m-1">
                <h3>About Sobha HRC Pristine</h3>
                <p>The residential enclave, HRC Pristine features the very best in SOBHA Limited’s luxury living segment. The project offers spacious Apartments with luxurious features.</p>
                <p>Beautiful landscapes all around Sobha HRC Pristine makes it more special & Elite.</p>
                <p>The builder is guaranteed to bring a quality living experience to the community of Jakkur, North Bangalore with brilliant architecture and an equivalent lifestyle in HRC Pristine.</p>
                <p>Sobha HRC Pristine Location has excellent connectivity & it is located at the crux of Jakkur near existing and upcoming communities & facilities.</p>
                <p>Amenities at Sobha HRC Pristine include a fully equipped clubhouse, landscaped gardens, gymnasium, swimming pool, recreation rooms, outdoor sports courts, children’s play area, party hall, and meticulously planned with utmost importance to state-of-the-art 24/7 securities.</p>


                

                <a href="https://www.youtube.com/watch?v=atMp4ufSWw4">
                  <Image src={Image1} alt="YouTube" className="img-fluid" />
                </a>
              </div>
              <div className="pt-2 pb-2 pt-md-5 pb-md-5 m-1">
                <Row>
                  <h2 className="pb-2">Sobha HRC Pristine Configuration</h2>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Image src={Image2}  alt="" className="img-fluid"/> */}
                      <Card.Body>
                        <Card.Title>Project Location</Card.Title>
                        <Card.Text>Amruthalli, Jakkur</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Total Land Area</Card.Title>
                        <Card.Text>8.52 Acres (32 Acrea Total)</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>No. of Units</Card.Title>
                        <Card.Text>381 Units 14 Row Houses</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Towers and Blocks</Card.Title>
                        <Card.Text>5 Blocks, 2B+G+18,19 Floors</Card.Text>
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
                        <Card.Text>Jul 2022 Onwards</Card.Text>
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
                      <td>3 BHK</td>
                      <td>1495</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3 BHK</td>
                      <td>1750</td>
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
                  <h2 className="pb-2">Sobha HRC Pristine Amenities</h2>
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
                  <h3>Sobha HRC Pristine Price</h3>
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
                      <td>3 BHK</td>
                      <td>1802 to 1914</td>
                      <td>Rs. 1.86 Crore to Rs. 2.01 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK</td>
                      <td>2252</td>
                      <td>Rs. 2.57 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK Pent</td>
                      <td>3588 to 4112</td>
                      <td>Rs. 5.83 Crore to Rs. 6.87 Crore Onwards</td>
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
                          <h2 className="pb-2">About the Builder – SOBHA Limited</h2>
                          <p>Founded in the year 1995, Sobha Limited is one of the largest real estate development company in India. It’s a Rs. 22 billion company based out of Bangalore and having projects spread across 13 states and 24 cities.</p>
                          <p>Sobha Limited is primarily focused on the development of residential and contractual projects. The residential projects range from villas and row houses to plotted development, presidential apartments, luxury, and super luxury apartments. Every Sobha project comes equipped with every major amenity including shopping complex, clubhouse, and swimming pool.</p>
                          <p>Presently, almost 35 residential projects are under construction aggregating to 27.32 million sq. ft. of space under development. 18.90 million sq. ft. of saleable space in addition to ongoing contractual projects adding up to almost 9.50 million square feet of area.</p>
                          <p>Sobha has constructed a wide array of structures for prestigious corporate clients most noteworthy being Dell, Institute of Public Enterprises (IPE), Taj Group, Hotel Leela Ventures, Infosys, Bosch, HP, Biocon, Timken and more.</p>
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
