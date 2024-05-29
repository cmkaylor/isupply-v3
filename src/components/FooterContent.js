import React from "react";
import '../index.css'
import { Flex } from "antd";

const FooterContent = () => {

    return (
        <footer style={{  bottom: '0', textAlign: 'center' }}> 
            <p>&copy; {new Date().getFullYear()} Industrial Supply & Service, LLC. All rights reserved.</p>
        </footer>
    )
}

export default FooterContent