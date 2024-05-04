import React from 'react';
import { Carousel, Card } from 'antd';

const AboutCarousel = () => (
  <>
    <Carousel dotPosition="top">
        <div>
            <Card headStyle={{backgroundColor: '#34495E', border: 0, color: '#FFFFFF', textAlign: 'center' }} title="Company History" bordered={true}>
            Industrial Supply & Service is a family owned business located in Kansas City, Missouri, 
            since 2015. We have strong relationships with our manufacturers and distributors to bring 
            our products to you in the most efficient and cost effective manner possible.
            </Card>
        </div>
        <div>
            <Card headStyle={{backgroundColor: '#34495E', border: 0, color: '#FFFFFF', textAlign: 'center' }} title="Our Mission" bordered={true}>
            At Industrial Supply & Service, we believe in the power of relationships. We are your one-stop destination for all your Supply needs, offering a wide 
            range of top-quality fasteners, cutting tools, shop supplies, PPE, and more. With years of experience in the industrial supply industry, we take great pride in 
            being a trusted partner with our customers. Our mission is to provide our customers with exceptional products and outstanding service. Our goal is to be your number 
            one source for all things industrial supplies and services.
            </Card>
        </div>
        <div>
            <Card headStyle={{backgroundColor: '#34495E', border: 0, color: '#FFFFFF', textAlign: 'center' }} title="Our Products" bordered={true}>
            We understand that every project requires the right supplies to do the job right the first time, increase your production, and decrease down time. 
            That's why we offer a comprehensive range of fasteners to meet all your needs. We have you covered whether you are in construction, automotive repair, 
            fleet management, or municipal services. We carefully source our products from reputable manufacturers that meet strict industry standards. Our commitment to quality 
            ensures that our products are reliable, long-lasting, and capable of withstanding even the most demanding applications.
            </Card>
        </div>
    </Carousel>
  </>
);

export default AboutCarousel;