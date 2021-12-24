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
import AssetzEarthSlider from "./slider/AssetzEarthSlider";


export default function AssetzEarth() {
  return (
    <div>
      <AssetzEarthSlider />
      <div id="content" className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="pt-2 pb-2 pt-md-5 pb-md-5 m-1">
                <h3>About Assetz Earth & Essence</h3>
                <p>Assetz Earth & Essence is a brand new luxury residential plotted & rowhouse development project in the rapidly expanding neighborhood of Hosahalli, International Airport Road, Bangalore.</p>
                <p>The residential enclave, Earth & Essence features the very best in the Assetz Group luxury segment. The project offers spacious rowhouses and plots with luxurious features.</p>
                <p>Beautiful landscapes all around Assetz Earth & Essence make it more special & Elite.</p>
                <p>The builder is guaranteed to bring a quality living experience to the community of Hosahalli, International Airport Road with brilliant architecture, and an equivalent lifestyle in Earth & Essence.</p>
                <p>Assetz Earth & Essence Location has excellent connectivity & it is located at the heart of North Bangalore.</p>
                <p>Amenities at Assetz Earth & Essence include a fully equipped clubhouse, landscaped gardens, gymnasium, swimming pool, recreation rooms, outdoor sports courts, children’s play area, party hall, and meticulously planned with utmost importance to state-of-the-art 24/7 securities.</p>
                

                <a href="https://www.youtube.com/watch?v=atMp4ufSWw4">
                  <Image src={Image1} alt="YouTube" className="img-fluid" />
                </a>
              </div>
              <div className="pt-2 pb-2 pt-md-5 pb-md-5 m-1">
                <Row>
                  <h2 className="pb-2">Assetz Earth & Essence Configuration</h2>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Image src={Image2}  alt="" className="img-fluid"/> */}
                      <Card.Body>
                        <Card.Title>Project Location</Card.Title>
                        <Card.Text>Hosahalli, International Airport Road</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Total Land Area</Card.Title>
                        <Card.Text>25 Acres</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>No. of Units</Card.Title>
                        <Card.Text>75 Units(Phase1), 91 Plots (Phase 2)</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Towers and Blocks</Card.Title>
                        <Card.Text>4 Phases, G + 2 Floors</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Unit Variants</Card.Title>
                        <Card.Text>3,4,5 BHK</Card.Text>
                        <Card.Text>Rowhouses, Luxury Plots</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Possession Time </Card.Title>
                        <Card.Text>Dec 2021 Onwards</Card.Text>
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
                      <td>Varied Size Plots</td>
                      <td>1502 - 4806</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Mid Size Plots</td>
                      <td>2081 - 2470</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Large Size Plots</td>
                      <td>2632 - 4510</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3 BHK Row House</td>
                      <td>2721</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK Row House</td>
                      <td>2877</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK Row House</td>
                      <td>3061</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK Row House</td>
                      <td>3285</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>5 BHK Row House</td>
                      <td>4117</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>5 BHK Row House</td>
                      <td>4117</td>
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
                  <h2 className="pb-2">Assetz Earth & Essence Amenities</h2>
                  <Col md={6}>
                    <div className="">
                      <ul>
                        <li>Gymnasium</li>
                        <li>Clubhouse</li>
                        <li>Swimming Pool</li>
                        <li>Games Room</li>
                        <li>Retail Spaces</li>
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
                        <li>Spa/Sauna</li>
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
                  <h3>Assetz Earth & Essence Rowhouse Price</h3>
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
                      <td>3027</td>
                      <td>Rs. 2.85 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK</td>
                      <td>3308</td>
                      <td>Rs. 3.25 Crore Onwardss</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>5 BHK</td>
                      <td>4125</td>
                      <td>Rs. 3.98 Crore Onwards</td>
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
                          <h2 className="pb-2">About the Builder – Assetz Group</h2>
                          <p>Founded in 2006, Assetz Property Group is a front-runner among multinational developers in India with over 10 million square feet under development. Assetz, headquartered in Singapore, is a multi-faceted real estate development and asset management company with four business verticals: Commercial, Residential, Warehousing and Fund Management..</p>
                          <p>Assetz has built two world-class IT tech parks in Bangalore: Vrindavan Tech Village (now Embassy Tech Village) – India’s first Platinum LEED certified IT SEZ, and Global Technology Park. And, its residential portfolio includes ten projects in prominent locations across Bangalore. The Assetz Fund Management vertical is a leading performer in the real estate fund management industry generating high alpha returns for its investors compared to its peers.</p>
                          <p>Assetz is a preferred partner of private equity funds completing more than 10 private equity investments and delivering nine exits to date. A stellar track record has earned Assetz a reputation for professionalism and for challenging conventions through innovation. The company is on an upward growth trajectory and is one of the fastest growing real estate developers in the country.</p>
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
