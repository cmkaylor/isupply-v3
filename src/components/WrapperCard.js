import React from 'react';
import { Card, Flex, Divider } from 'antd';

const WrapperCard = ({ imageComp: ImageComp, title, description }) => {
    return (
      <Card
        style={{
          width: 200,
          margin: '10px',
          backgroundColor: '#34495E',
          color: 'white'
        }}
        cover={
            <ImageComp style={{fontSize: '50px', marginTop:'15px'}}/>
        }
        hoverable={true}
      >
        <Flex justify='center' align='left' vertical='true'>
          <h3>{title}</h3>
          <Divider style={{backgroundColor: '#FFFFFF', margin: '0px'}}/>
        </Flex>
      </Card>
    );
}

export default WrapperCard;