import { Flex } from "antd";
import Navigation from "./Navigation";
import mainLogo from '../content/logo.png'

const HeaderContent = () => {
  return (
    <Flex vertical={true}>
      <Flex style={{backgroundColor:'#34495E'}} justify="center" align="center" flex="auto">
        <img style={{ width: 376, height: 82, margin: 5 }} src={mainLogo} alt="Industrial Supply & Service Main Logo"/>
      </Flex>
      <Navigation/>
    </Flex>
  )
};
export default HeaderContent;