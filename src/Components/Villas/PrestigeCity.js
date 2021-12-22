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
import PrestigeCitySlider from "./slider/PrestigeCitySlider";


export default function PrestigeCity() {
  return (
    <div>
      <PrestigeCitySlider />
      <div id="content" className="pt-2 pb-2 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <div className="pt-2 pb-2 pt-md-5 pb-md-5 m-1">
                <p>
                Prestige City is a new premium Township project launched right on Sarjapur Road, Bangalore.
                </p>
                <p>The massive residential enclave, Prestige City is a township spans over 180-acres of prime location which will house premium Apartments and plots. Prestige City features the very best in Prestige Constructions’ luxury township segment.</p>
                <p>
                Beautiful landscapes all around Presetige City with plenty of open spaces, Vaastu compliant homes, and an exclusive community make it more special & Elite.
                </p>
                <p>
                The builder is guaranteed to bring a quality living experience to the community of Chikkagubbi just off Hennur Main Road with brilliant architecture and an equivalent lifestyle in Adarsh Tranqville.
                </p>
                <p>
                Prestige City Location has excellent connectivity & it is located bang on Sarjapur Road just off Sarjapur town, Chikkanayakanahalli, Dommasandra, Hadosiddapura, Carmelaram, RGA Tech Park, and more key locations in East Bangalore near existing and upcoming communities & facilities.
                </p>
                <p>
                Some of the Amenities at Prestige Smart City include a fully equipped clubhouse, expansive landscaped gardens, gymnasium, swimming pool, recreation rooms, multiple sports courts, children’s play area, party hall, and meticulously planned with utmost importance to state-of-the-art 24/7 securities.
                </p>    
                

                <a href="https://www.youtube.com/watch?v=atMp4ufSWw4">
                  <Image src={Image1} alt="YouTube" className="img-fluid" />
                </a>
              </div>
              <div className="pt-2 pb-2 pt-md-5 pb-md-5 m-1">
                <Row>
                  <h2 className="pb-2">Prestige City Configuration</h2>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Image src={Image2}  alt="" className="img-fluid"/> */}
                      <Card.Body>
                        <Card.Title>Project Location</Card.Title>
                        <Card.Text>Sarjapur Road</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Total Land Area</Card.Title>
                        <Card.Text>180 Acres</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>No. of Units</Card.Title>
                        <Card.Text>808 Plots 1000+ Apartments 298 Villas</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                 
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Unit Variants</Card.Title>
                        <Card.Text>Plots: 30×40, 30×50, 40×60,50×60, 50×80 </Card.Text>
                        <Card.Text>Apartments: 1,2,3,4 BHK</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="text-center m-1">
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                      <Card.Body>
                        <Card.Title>Possession Time </Card.Title>
                        <Card.Text>Plots: Aug 2022 Onwards</Card.Text>
                        <Card.Text>Apts: Mar 2025 Onwards</Card.Text>
                        <Card.Text>Villas: Oct 2024 Onwards</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div className="pb-2 pb-md-5" id="amenities">
              <Row>
                  <h2 className="pb-2">Adarsh Palm Acres Configuration</h2>
                  <Col md={6}>
                    <div className="">
                      <ul>
                        <li>Gymnasium</li>
                        <li>Clubhouse</li>
                        <li>Swimming Pool with Kids Pool</li>
                        <li>Games Room</li>
                        <li>Sports Hub Pavilion</li>
                        <li>Jogging, Skating Track</li>
                      </ul>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="">
                      <ul>
                        <li>Kids Play Area</li>
                        <li>Multipurpose Area</li>
                        <li>Landscaped Gardens</li>
                        <li>Amphitheatre</li>
                        <li>Yoga Terrace</li>
                        <li>Urban Farming</li>
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
              {/* Table 1 Starts */}
              <div className="pb-2 pb-md-5">
                  <h3>Prestige City Avalon Park Price</h3>
                <Table
                  responsive="sm"
                  className="table-bordered align-middle text-center"
                >
                  <thead className="bg-primary text-white">
                    <tr>
                      <th>Unit Type</th>
                      <th>Villa Size in Sq.Ft</th>
                      <th>Approx. All Inclusive Price</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3 BHK 2T</td>
                      <td>1361</td>
                      <td>Rs. 79.9 Lacs Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3 BHK 3T</td>
                      <td>1536</td>
                      <td>Rs. 89.9 Lacs Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3 BHK 3T</td>
                      <td>1599 to 1657</td>
                      <td>Rs. 94.4 Lacs Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3 BHK 3T Large</td>
                      <td>1898</td>
                      <td>Rs. 1.09 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                   
                  </tbody>
                </Table>
              </div>
              {/*Table1 ends  */}
              {/* Table 2 Starts */}              
                <div className="pb-2 pb-md-5">
                  <h3>Prestige Eden Park Price</h3>
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
                      <td>1 BHK</td>
                      <td>634 to 666</td>
                      <td>Rs. 39.9 Lacs Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2 BHK</td>
                      <td>944 to 979</td>
                      <td>Rs. 56.4 Lacs Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                   
                  </tbody>
                </Table>
              </div>
{/* Table 2 Ends */}

{/* Table 3 Starts */}

<div className="pb-2 pb-md-5">
                  <h3>Prestige City Villas Price</h3>
                <Table
                  responsive="sm"
                  className="table-bordered align-middle text-center"
                >
                  <thead className="bg-primary text-white">
                    <tr>
                      <th>Villa Type</th>
                      <th>Size in Sq.Ft</th>
                      <th>Approx. Agreement Price</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Villa A1</td>
                      <td>3344</td>
                      <td>Rs. 2.99 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Villa A2</td>
                      <td>3364</td>
                      <td>Rs. 3.0 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Villa B1</td>
                      <td>3612</td>
                      <td>Rs. 3.22 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr><tr>
                      <td>Villa B2</td>
                      <td>3593</td>
                      <td>Rs. 3.21 Crore Onwards</td>
                      <td>
                        <Button type="button" className="btn btn-primary">
                          Download
                        </Button>
                      </td>
                    </tr>
                   
                  </tbody>
                </Table>
              </div>
              {/* Table Ends */}
              <div className="pb-2 pb-md-5">
                  <Row>
                      <Col md={12}>
                          <h2 className="pb-2">About the Builder – Prestige Constructions</h2>
                          <p>The Prestige Group owes its origin to Mr. Razack Sattar, who envisioned a success story waiting to take shape in the retail business in 1956 itself. Prestige Estates and Properties was set up in 1986 growing swiftly to become the leading property developers in Bangalore.</p>
                          <p>Prestige Court on K.H. Road in Bangalore set the pace and with over 190 developments covering 38.5 million sq ft of developable area to its credit, Prestige constructions now house a very large populace residing in South India.</p>
                          <p>Also, Prestige hosts some of the biggest MNCs in business here with residential, commercial, retail and hospitality developments on the cards approximating 61.4 million sq. ft. just in area.</p>
                          <p>A presence in the retail sector with multiplexes and malls, Prestige has built for itself a name in property development. Explore other Prestige Group Projects like Prestige Fountain Bleau, Prestige Dolce Vita & Prestige Falcon City.</p>
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
