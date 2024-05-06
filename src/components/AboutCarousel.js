import React from 'react';
import { Carousel, Flex } from 'antd';
import City from '../content/city.jpg'

const AboutCarousel = () => (
  <>
    <Carousel style={{backgroundColor: '#34495E', borderRadius: '10px',padding: '15px', color: '#FFFFFF', textAlign: 'center'}} dotPosition="bottom">
        <div>
          <Flex justify='center' align='center' vertical={true}>
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
          <Flex justify='center' align='center' vertical={true}>
            <h3>Our Mission</h3>
            <p>
            At Industrial Supply & Service, we believe in the power of relationships. With years of experience in the industrial supply industry, we take great pride in 
            being a trusted partner with our customers. Our mission is to provide our customers with exceptional products and outstanding service. Our goal is to be your number 
            one source for all things industrial supplies and services.
            </p>
          </Flex>
        </div>

        <div>
          <Flex justify='center' align='center' vertical={true}>
            <h3>Our Products</h3>
            <p>
            We understand that every project requires the right supplies to do the job right the first time, increase your production, and decrease down time. 
            That's why we offer a comprehensive range of top-quality fasteners, cutting tools, shop supplies, PPE, and more. We have you covered whether you are in construction, automotive repair, 
            fleet management, or municipal services.
            </p>
          </Flex>
        </div>

    </Carousel>
  </>
);

export default AboutCarousel;