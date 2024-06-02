import { Flex, Divider, Carousel } from "antd";
import City from '../content/city.jpg'
import GardLogo from '../content/GardLogo.png'

const imagesForShow = [
  "https://www.eastpennmanufacturing.com/wire-and-cable-catalog/images/parts/05434.png?1717303675044",
  "https://www.eastpennmanufacturing.com/wire-and-cable-catalog/images/parts/05475.png?1717303236857",
  "https://www.durhammfg.com/wp-content/uploads/2019/06/LPRSS-34.5X68-95-web-600x600.jpg",
  "https://discoautomotive.com/wp-content/themes/sterling/framework/extended/timthumb/timthumb.php?src=https://discoautomotive.com/wp-content/uploads/2014/06/High-Quality-Fasteners.png&h=124&w=280",
  "https://storage.googleapis.com/altisuite_gard/images/standard_209380.jpg",
  "https://www.eastpennmanufacturing.com/wire-and-cable-catalog/images/parts/08756b.png?1717303632057",
  "https://www.eastpennmanufacturing.com/wire-and-cable-catalog/images/parts/04395.png?1717303803442"]

const About = () => {
  return (
    <div style={{position: 'relative', height: '180vh', textAlign: 'center'}}>
      <h2>About Us</h2>
      <Flex justify="top" align="center" flex="auto" vertical={true}>
        <img src={City} alt="Kansas City Skyline"/>
        <p style={{width: '600px'}}>
          Located in Kansas City, Missouri since 2015, we offer a comprehensive range of top-quality fasteners, cutting tools,
          shop supplies, PPE, and more. We serve many industries including; construction, automotive repair, fleet management, 
          energy production, municipal services, and more.
        </p>
      </Flex>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat( auto-fit, minmax(250px, 1fr)', justifyContent: 'center', alignItems: 'center', backgroundColor: '#34495E', color: '#FFFFFF', padding: '20px', gap: '15px', marginTop: '10px', marginBottom: '10px'}}>
        <Flex justify="top" align="center" flex="auto" vertical={true}>
          <h2>What We Do</h2>
          <p>
            At Industrial Supply & Service, we believe in the power of relationships. With years of experience in the industrial supply industry,
            we take great pride in being a trusted partner with our customers, distributors, and manufacturers. Our mission is to provide our customers
            with exceptional products and outstanding service. Our goal is to be your number one source for all your industrial MRO supply and service requirements. 
          </p>
        </Flex>
        <Carousel>
          <div>
            <Flex justify="center" align="center" vertical={true}>
              <img style={{maxHeight: '200px', width: 'auto', borderRadius: '5px'}} src={imagesForShow[2]} alt="Industry Supplies"/>
              <br/>
            </Flex>
          </div>
          <div>
            <Flex justify="center" align="center" vertical={true}>
              <img style={{maxHeight: '200px', width: 'auto', borderRadius: '5px'}} src={imagesForShow[3]} alt="Industry Supplies"/>
            </Flex>
          </div>
          <div>
            <Flex justify="center" align="center" vertical={true}>
              <img style={{maxHeight: '200px', width: 'auto', borderRadius: '5px'}} src={imagesForShow[0]} alt="Industry Supplies"/>
            </Flex>
          </div>
          <div>
            <Flex justify="center" align="center" vertical={true}>
              <img style={{maxHeight: '200px', width: 'auto', borderRadius: '5px'}} src={imagesForShow[1]} alt="Industry Supplies"/>
            </Flex>
          </div>
          <div>
            <Flex justify="center" align="center" vertical={true}>
              <img style={{maxHeight: '200px', width: 'auto', borderRadius: '5px'}} src={imagesForShow[4]} alt="Industry Supplies"/>
            </Flex>
          </div>
          <div>
            <Flex justify="center" align="center" vertical={true}>
              <img style={{maxHeight: '200px', width: 'auto', borderRadius: '5px'}} src={imagesForShow[5]} alt="Industry Supplies"/>
            </Flex>
          </div>
          <div>
            <Flex justify="center" align="center" vertical={true}>
              <img style={{maxHeight: '200px', width: 'auto', borderRadius: '5px'}} src={imagesForShow[6]} alt="Industry Supplies"/>
            </Flex>
          </div>
        </Carousel>
      </div>
      <Flex justify="center" align="center" flex="auto" vertical={true}>
        <h2>GARD Specialists Company</h2>
        <Divider style={{backgroundColor: 'black', margin: '0px'}}/>
        <p style={{width: '600px'}}>
          We are the exclusive representative of GARD Specialists Company and the Gardsert Thread Repair System for the Central States Region. 
        </p>
        <img src={GardLogo} alt="GARD Specialists Company"/>
      </Flex>
    </div>
  )
};
export default About;