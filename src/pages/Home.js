import { Flex, Card} from "antd";
import Screws from '../content/screws.jpg'

const Home = () => {
  return (
    <Flex justify="center" align="top" flex="auto" style={{backgroundImage:`url(${Screws})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100vh'}}>
        <div style={{backgroundColor:'#FFFFFF', width: '80vh', height: '45vh', margin: '20px', borderRadius: '25px', border: '4px solid #34495E', padding:'10px'}}>
            <Flex justify="center" align="center" vertical={true}>
                <h2>Welcome</h2>
                <p align="center">Please contact us today and let us know how we can help you succeed in your supplying needs!</p>
                <Flex justify="space-evenly" align="center">
                    <Card style={{width: '200px'}} headStyle={{backgroundColor: '#34495E', border: 0, color: '#FFFFFF' }} title="Phone" bordered={true}>816-739-6701</Card>
                    <Card style={{width: '200px'}} headStyle={{backgroundColor: '#34495E', border: 0, color: '#FFFFFF' }} title="Email" bordered={true}>Chris@isupplycentral.com</Card>
                </Flex>
            </Flex>
        </div>
    </Flex>
  )
};
export default Home;