import { useState } from "react";
import { Typography, Flex, Button, Row, Col} from "antd";
import Screws from '../content/screws.jpg'
import ContactModal from "../components/ContactModal";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const showContact = () => {
    setIsContactOpen(true);
  };

  const handleCancelContact = () => {
    setIsContactOpen(false);
  }

  const { Title } = Typography;

  return (
    <div style={{backgroundImage:`url(${Screws})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '75vh'}}>
      <Row>
        <Col className="add-gradient" xs={24} xl={18}>
          <Row>
            <Col xs={24} xl ={16}>
            <Flex justify="center" align="center" vertical={true} style={{height: '75vh'}}>
                <Title style={{color: '#34495E', textAlign: 'center', margin: '10px'}}>Source, Supply, and Manage.</Title>
                <Title level={5} style={{color: '#34495E', textAlign: 'center', margin: '10px'}}>Industrial Supply & Service is your new one stop shop for a variety of industrial solutions and products.</Title>
                <Flex>
                  <Flex justify="space-evenly" align="center" style={{margin:'8px'}}>
                    <Button onClick={() => navigate('/Services')} style={{marginTop: '20px', backgroundColor: '#34495E', color: '#FFFFFF', width: '150px', height: '75px'}}><strong>Services</strong></Button>
                  </Flex>
                  <Flex justify="space-evenly" align="center" style={{margin:'8px'}}>
                    <Button onClick={showContact} style={{marginTop: '20px', borderColor: '#34495E', color: '#34495E', width: '150px', height: '75px'}}><strong>Contact Us</strong></Button>
                    <ContactModal open={isContactOpen} handleCancel={handleCancelContact}/>
                  </Flex>
                </Flex>
            </Flex>
            </Col>
          </Row>
        </Col>
        <Col xs={24} xl={12}/>
      </Row>
      <Flex justify="center" align="center" style={{backgroundColor:'#000000', maxHeight: '80px'}}>
                <Title level={5} style={{color: '#FFFFFF', fontWeight:'bold', padding:'5px', textAlign:'center'}}>
                    Click <a href="https://www.lawsonproducts.com/customer/user/login" target='_blank' rel="noreferrer" >here</a> to sign up for Product & Service updates, e-mail news, and specials.
                </Title>
      </Flex>
    </div>
  )
};
export default Home;