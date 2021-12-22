import React from "react";
import Slider from "../Villas/slider/MainSlider";
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
import ImageIcon1 from '../../Assets/images/amenities/exercise.png'
import ImageIcon2 from '../../Assets/images/amenities/club.png'
import ImageIcon3 from '../../Assets/images/amenities/swimmer.png'
import ImageIcon4 from '../../Assets/images/amenities/chess.png'
import ImageIcon5 from '../../Assets/images/amenities/cafeteria.png'
import ImageIcon6 from '../../Assets/images/amenities/dog.png'
import ImageIcon7 from '../../Assets/images/amenities/basket-ball.png'
import ImageIcon8 from '../../Assets/images/amenities/club.png'
import ImageIcon9 from '../../Assets/images/amenities/garden.png'
import ImageIcon10 from '../../Assets/images/amenities/playground.png'
import ImageIcon11 from '../../Assets/images/amenities/city-hall.png'
import ImageIcon12 from '../../Assets/images/amenities/party-lawn.png'

export default function AdarshPalmAcres() {
  return (
    <div>
      <Slider />
      <div id="content" className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="pt-2 pb-2 pt-md-5 pb-md-5 m-1">
                <p>
                  Prestige White Meadows is the landmark Ready to Move-in
                  residential Apartment and Villas project by Prestige
                  Constructions located in Whitefield Main Road, Whitefield,
                  Bangalore.
                </p>
                <p>
                  The residential enclave Prestige White Meadows features mixed
                  residential homes and the very best in Prestige Group’s luxury
                  segment.
                </p>
                <p>
                  The project offers spacious Sky Villas (apartments) and
                  bungalows (villas) with luxurious features. Beautiful
                  landscapes and serene all around make Prestige White Meadows
                  more special & Elite.
                </p>
                <p>
                  The Builder is guaranteed to bring a quality living experience
                  to the community of Whitefield Main Road, Whitefield with the
                  brilliant architecture of stepped terraces defining the
                  gradual acclivity of White Meadows and an equivalent lifestyle
                  in these ready-to-live homes.
                </p>
                <p>
                  Prestige Group is one of South India’s leading real estate
                  developers having produced some of Bangalore’s as well as the
                  country’s most recognizable properties over the past few
                  decades. Prestige White Meadows Location has excellent
                  connectivity & it is located at the heart of Whitefield Main
                  Road, Whitefield near ECC Road, Hope Farm Junction, ITPL, and
                  dozens of Business hubs.
                </p>
                <p>
                  Amenities at Prestige White Meadows include a fully equipped
                  clubhouse, health center, gymnasium, swimming pool, recreation
                  rooms, outdoor sports courts, children’s play area, party
                  hall, and much more. With meticulous planning and utmost
                  importance to state-of-the-art 24/7 securities.
                </p>

                <a href="https://www.youtube.com/watch?v=atMp4ufSWw4">
                  <Image src={Image1} alt="YouTube" className="img-fluid" />
                </a>
              </div>
              <div className="pt-2 pb-2 pt-md-5 pb-md-5 m-1">
                <Row>
                  <h2 className="pb-2">Adarsh Palm Acres Configuration</h2>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Image src={Image2}  alt="" className="img-fluid"/> */}
                      <Card.Body>
                        <Card.Title>Project Location</Card.Title>
                        <Card.Text>Bagalur,Huttanahalli</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Total Land Area</Card.Title>
                        <Card.Text>19 Acres (Phase 2)</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>No. of Units</Card.Title>
                        <Card.Text>112 Units</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Towers and Blocks</Card.Title>
                        <Card.Text>Triplex Villas G + 2 Floors</Card.Text>
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
                        <Card.Text>Sept 2021 Onwards</Card.Text>
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
                      <th>Villa Type</th>
                      <th>Villa Size in Sq.Ft</th>
                      <th>Price Sheet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4 BHK Palm Emerald</td>
                      <td>3712 - 3752</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK Palm Aqua</td>
                      <td>3473 - 3478</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>4 BHK Palm Azure</td>
                      <td>3119</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="pb-2 pb-md-5" id="amenities">
                <Row>
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
                </Row>
              </div>
              <div className="pb-2 pb-md-5">
                  <Row>
                      <Col md={12}>
                          <h2 className="pb-2">About the Builder – Adarsh Developers</h2>
                          <p>Since its inception in 1988, under the visionary leadership of Founder Mr. BM Jayeshankar, Adarsh Group has experienced phenomenal growth. Started as a humble endeavor, today Adarsh Developers is one of the leading real estate companies in Bengaluru.</p>
                          <p>Coming to be known now as the innovative creator of a luxurious lifestyle, the group constructed its first residential property in 1996 and after that, there was no looking back. Defining the future of architectural excellence, Adarsh offers an eco-friendly, secure and self-sufficient lifestyle through their numerous Residential and commercial endeavors. Today, Adarsh Developers is a name synonymous with quality.</p>
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
