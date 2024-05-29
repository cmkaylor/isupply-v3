import { Modal, Flex } from "antd";

const InfoModal = ({ title, description, open, handleCancel }) => {

  return (
    <Modal title={title} open={open} onCancel={handleCancel} footer={null} width={300} destroyOnClose={true}>
        <Flex justify="center" align="center">
            <p>{description}</p>
        </Flex>
    </Modal>
  );
};

export default InfoModal;