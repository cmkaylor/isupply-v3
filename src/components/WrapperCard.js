import React from 'react';
import { Card, Flex, Divider } from 'antd';
import { useState } from 'react';
import InfoModal from './InfoModal';

const WrapperCard = ({ imageComp: ImageComp,
                       title,
                       description }) => {

    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const showInfo = () => {
        setIsInfoOpen(true);
    };
  
    const handleCancelInfo = () => {
        setIsInfoOpen(false);
    }

    return (
      <>
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
        onClick={showInfo}
      >
        <Flex justify='center' align='left' vertical='true'>
          <h3>{title}</h3>
          <Divider style={{backgroundColor: '#FFFFFF', margin: '0px'}}/>
        </Flex>
      </Card>
      <InfoModal title={title} description={description} open={isInfoOpen} handleCancel={handleCancelInfo}/>
      </>
    );
}

export default WrapperCard;