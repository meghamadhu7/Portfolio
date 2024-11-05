import React from 'react'
import {Container,Col,Row} from 'react-bootstrap';
import {ArrowRightCircle} from 'react-bootstrap-icons';
import headerImg from "../assets/images/header-img.svg"
import { useTypewriter , Cursor } from 'react-simple-typewriter';

function Banner() {
    const [text] = useTypewriter({
      words:['Web Developer','Frontend Developer','Designer'],
      loop:{},
      typeSpeed:120,
      deleteSpeed:80
    }
  );
  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={2} xl={7}>
                    <span className='tagline'><span className='intro' >Welcome to My Portfolio</span></span><br/><br/>
                    <h1 className='name'>{'Hi I am Megha'}<span className='wrap' style={{color:'#0fe'}}> {text} </span><span className='cursor'><Cursor/></span></h1>
                    <p className='content'>A passionate frontend developer eager to make my mark in the digital world. With a solid foundation in HTML, CSS, and JavaScript, I specialize in crafting engaging and user-friendly interfaces that bring designs to life. As a recent graduate with a keen eye for detail and a thirst for learning, I'm excited to showcase my projects and demonstrate my ability to turn concepts into captivating web experiences. Let's build something great together!</p>
                    <a className='connect' href="#connect"> <span className='connect2'>Let's Connect&nbsp;&nbsp;</span><ArrowRightCircle size={25}/></a>
                </Col>
                <Col xs={12} md={1} xl={4}>
                <img src={headerImg} alt="Header Image" className='image-fluid'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner