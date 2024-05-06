import { useState } from "react";
import { Flex, Button} from "antd";
import Screws from '../content/screws.jpg'
import ContactModal from "../components/ContactModal";

const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const showContact = () => {
    setIsContactOpen(true);
  };

  const handleCancelContact = () => {
    setIsContactOpen(false);
  }

  return (
    <Flex justify="center" align="center" flex="auto" style={{backgroundImage:`url(${Screws})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '70vh'}}>
        <div style={{backgroundColor:'#FFFFFF', width: '80vh', height: '35vh', margin: '20px', borderRadius: '25px', border: '4px solid #34495E', padding:'10px'}}>
            <Flex justify="center" align="center" vertical={true}>
                <h2 style={{color: '#34495E', fontWeight: 'bold', marginBottom: '0'}}>Welcome</h2>
                <p align="center">Please click below and let us help you succeed in your supplying needs!</p>
                <Flex justify="space-evenly" align="center">
                  <Button onClick={showContact} style={{marginTop: '20px', backgroundColor: '#34495E', color: '#FFFFFF', width: '150px', height: '75px'}}>Contact Us</Button>
                  <ContactModal open={isContactOpen} handleCancel={handleCancelContact}/>
                </Flex>
            </Flex>
        </div>
    </Flex>
  )
};
export default Home;