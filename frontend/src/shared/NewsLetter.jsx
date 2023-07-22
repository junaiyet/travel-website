import React from 'react';
import './NewsLetter.css';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';
const NewsLetter = () => {
  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe to get useful traveling information.</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your email"></input>
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Obacaet
                adipiscing sunt in, placeholder face ipsum
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
                <img src={maleTourist}></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
