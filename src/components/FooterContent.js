import React from "react";
import '../index.css'
import { Flex, Typography } from "antd";

const FooterContent = () => {
    const { Title } = Typography;
    return (
        <footer> 
            <Flex justify="center" align="center" style={{backgroundColor:'#000000', maxHeight: '80px'}}>
                <Title level={5} style={{color: '#FFFFFF', fontWeight:'bold'}}>
                    Click <a href="https://www.lawsonproducts.com/customer/user/login" target='_blank' >here</a> to sign up for Product & Service updates, e-mail news, and specials.
                </Title>
            </Flex>
        </footer>
    )
}

export default FooterContent