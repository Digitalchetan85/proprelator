import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import {Container, Image} from 'react-bootstrap'
import img1 from '../../Assets/images/associations/assetz.png'
import img2 from '../../Assets/images/associations/brigade.png'
import img3 from '../../Assets/images/associations/century.png'
import img4 from '../../Assets/images/associations/concorde-group.png'
import img5 from '../../Assets/images/associations/embassy.png'
import img6 from '../../Assets/images/associations/godrej-properties.png'
// import img7 from '../../Assets/images/associations/kalpataru.png'
import img8 from '../../Assets/images/associations/kolte-patil.png'
// import img9 from '../../Assets/images/associations/lodha.png'
import img10 from '../../Assets/images/associations/mahaveer.png'
// import img11 from '../../Assets/images/associations/merusri.png'
import img12 from '../../Assets/images/associations/poineer-group.png'
import img13 from '../../Assets/images/associations/prestige-group.png'
import img14 from '../../Assets/images/associations/pride-group.png'
import img15 from '../../Assets/images/associations/provident-group.png'
import img16 from '../../Assets/images/associations/puravankara.png'
import img17 from '../../Assets/images/associations/reliable-developers.png'
import img18 from '../../Assets/images/associations/sobha.png'
// import img19 from '../../Assets/images/associations/sumedha.png'
import img20 from '../../Assets/images/associations/tata-housing.png'
import img21 from '../../Assets/images/associations/ukn-properties.png'

export default function AssociationVillasSlider() {


    const associations = [
        {id:1, imgurl:img1, alt:""},
        {id:2, imgurl:img2, alt:""},
        {id:3, imgurl:img3, alt:""},
        {id:4, imgurl:img4, alt:""},
        {id:5, imgurl:img5, alt:""},
        {id:6, imgurl:img6, alt:""},
        // {id:7, imgurl:img7, alt:""},
        {id:8, imgurl:img8, alt:""},
        // {id:9, imgurl:img9, alt:""},
        {id:10, imgurl:img10, alt:""},
        // {id:11, imgurl:img11, alt:""},
        {id:12, imgurl:img12, alt:""},
        {id:13, imgurl:img13, alt:""},
        {id:14, imgurl:img14, alt:""},
        {id:15, imgurl:img15, alt:""},
        {id:16, imgurl:img16, alt:""},
        {id:17, imgurl:img17, alt:""},
        {id:18, imgurl:img18, alt:""},
        // {id:19, imgurl:img19, alt:""},
        {id:20, imgurl:img20, alt:""},
        {id:21, imgurl:img21, alt:""},
    ]


  const options = {
    rewind: true,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: false,
        loop: false,
      },
    },
  };

  // const events = {
  //     onDragged: function(event) {...},
  //     onChanged: function(event) {...}
  // };

  return (
    <div id="association-slider" className="pt-3 pb-3 pt-md-5 pb-md-5">
      <Container>
        <h2 className="pt-2 pb-2 text-center">Our Associations</h2>
        <OwlCarousel options={options}>

          {
              associations.map( (item, index) => (
                <div className="text-center" key={index}>
                    <Image src={item.imgurl} alt={item.alt}  className="img-fluid"/>
                </div>                     
              ) )
          }
        </OwlCarousel>
      </Container>
    </div>
  );
}
