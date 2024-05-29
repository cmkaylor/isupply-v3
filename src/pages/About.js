import { Flex } from "antd";

const About = () => {
  return (
    <Flex justify="top" align="center" flex="auto" vertical={true} style={{ backgroundColor: '#34495E', color: '#FFFFFF', height: '70vh'}}>
        <h2>About Us</h2>
        <p>
        Located in Kansas City, Missouri since 2015, we offer a comprehensive range of top-quality fasteners, cutting tools,
        shop supplies, PPE, and more. We serve many industries including; construction, automotive repair, fleet management, 
        energy production, municipal services, and more.
        </p>
        <p>
        At Industrial Supply & Service, we believe in the power of relationships. With years of experience in the industrial supply industry,
        we take great pride in being a trusted partner with our customers, distributors, and manufacturers. Our mission is to provide our customers
        with exceptional products and outstanding service. Our goal is to be your number one source for all your industrial MRO supply and service requirements. 
        </p>
        <p>
        We are the exclusive representative of GARD Specialists Company and the Gardsert Thread Repair System for the Central States Region. 
        </p>
    </Flex>
  )
};
export default About;