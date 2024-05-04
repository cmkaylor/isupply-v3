import { Flex } from "antd";
import AboutCarousel from "../components/AboutCarousel";

const About = () => {
  return (
    <Flex justify="top" align="center" flex="auto" vertical={true} style={{height: '70vh'}}>
        <h1>About Us</h1>
        <div style={{width: '70vh'}}>
            <AboutCarousel/>
        </div>
    </Flex>
  )
};
export default About;