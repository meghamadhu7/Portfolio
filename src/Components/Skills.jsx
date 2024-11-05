import React from 'react'
import {Container,Col,Row} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/images/meter1.svg"
import meter2 from "../assets/images/meter2.svg"
import meter3 from "../assets/images/meter3.svg"
import colorsharp from "../assets/images/color-sharp.png"

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p className='skill-intro'>To leverage my expertise in HTML, CSS, and JavaScript alongside my proficiency in modern frontend frameworks to create engaging and intuitive user experiences. Seeking opportunities to contribute to innovative projects while continually expanding my skill set and staying abreast of industry trends.</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className="item">
                                <img src={meter2} alt="Skills Image"/>
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Skills Image"/>
                                <h5>Web Desinging</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Skills Image"/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Skills Image"/>
                                <h5>React Js</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img src={colorsharp} alt="Broken Image" className="background-image-left" />
    </section>
  )
}

export default Skills