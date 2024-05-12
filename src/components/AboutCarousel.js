import React from 'react';
import { Carousel, Flex } from 'antd';
import { Link } from 'react-router-dom';
import City from '../content/city.jpg'
import Products from '../content/products-collage.png'
import Worker from '../content/worker.jpg'

const AboutCarousel = () => (
  <>
    <Carousel style={{backgroundColor: '#34495E', borderRadius: '10px',padding: '15px', color: '#FFFFFF', textAlign: 'center', width: '55vh'}} dotPosition="bottom">
        <div>
          <Flex justify='center' align='center' vertical={true} style={{paddingBottom: '10px'}}>
            <h3>Our Products</h3>
            <img style={{borderRadius: '5px'}} src={Products} alt="GARD Products" width='213px' height='120px' />
            <p>
            We offer a comprehensive range of top-quality fasteners, cutting tools, shop supplies, PPE, and more. We have you covered whether you are in construction, automotive repair, 
            fleet management, or municipal services.
            </p>
          </Flex>
        </div>

        <div>
          <Flex justify='center' align='center' vertical={true} style={{paddingBottom: '10px'}}>
            <h3>Our Services</h3>
            <img style={{borderRadius: '5px'}} src={Worker} alt="Industrial Services" width='213px' height='120px' />
            <p>
            We want to help anyway we can, so that's why we provide a variety of services. We can do anything from Tool Maintenance & Repair to 
            Supply Room Design. Please click <Link to="/Services">here</Link> to check out what we can do for you!
            </p>
          </Flex>
        </div>

        <div>
          <Flex justify='center' align='center' vertical={true} style={{paddingBottom: '10px'}}>
            <h3>Company History</h3>
            <img style={{borderRadius: '5px'}} src={City} alt="Kansas City" width='213px' height='120px' />
            <p>
            Industrial Supply & Service is a family owned business located in Kansas City, Missouri, 
            since 2015. We have strong relationships with our manufacturers and distributors to bring 
            our products to you in the most efficient and cost effective manner possible.
            </p>
          </Flex>
        </div>

        <div>
          <Flex justify='center' align='center' vertical={true} style={{paddingBottom: '10px'}}>
            <h3>Our Mission</h3>
            <i>
            "At Industrial Supply & Service, we believe in the power of relationships. With years of experience in the industrial supply industry, we take great pride in 
            being a trusted partner with our customers. Our mission is to provide our customers with exceptional products and outstanding service. Our goal is to be your number 
            one source for all things industrial supplies and services."
            </i>
          </Flex>
        </div>

    </Carousel>
  </>
);

export default AboutCarousel;