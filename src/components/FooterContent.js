import React from "react";
import '../index.css'
import { Flex } from "antd";

const FooterContent = () => {

    return (
        <footer>
            <Flex justify="center" align="center" flex="auto" style={{textAlign: 'center'}}>
                <p>&copy; {new Date().getFullYear()} Industrial Supply & Service, LLC. All rights reserved.</p>
            </Flex>
        </footer>
    )
}

export default FooterContent