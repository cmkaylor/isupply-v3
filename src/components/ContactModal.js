import { useState } from "react";
import { Tooltip, Modal, Flex, Input, Button, Form } from "antd";
import { CheckSquareOutlined, CloseSquareOutlined } from "@ant-design/icons";
import axios from "axios";
const { TextArea } = Input;

const FORM_ENDPOINT = "https://public.herotofu.com/v1/b56f3ea0-0b5f-11ef-9273-c783c4881c17";

const ContactModal = ({ open, handleCancel }) => {
    const [form] = Form.useForm();
    const [showMessage, setShowMessage] = useState(false);
    const [success, setSuccess] = useState(false);

    const onSubmit = async (info) => {
        try {
            const response = await axios.post(FORM_ENDPOINT, info);
            console.log('Success:', response.data);
            setSuccess(true);
          } catch (error) {
            console.error('Failed:', error);
          }
        setShowMessage(true);
      };
    const onSubmitFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    

  return (
    <>
    <Modal title="Contact Form" open={open} onCancel={handleCancel} footer={null} width={300} destroyOnClose={true}>
        <Flex justify="center" align="center">
        <Form 
        form={form}
        name="basic"
        labelCol={{
        span: 8,
        }}
        wrapperCol={{
        span: 16,
        }}
        style={{
        maxWidth: 600,
        }}
        initialValues={{
        }}
        onFinish={onSubmit}
        onFinishFailed={onSubmitFailed}
        preserve={false}
        autoComplete="off"
    >
            <Form.Item
            label="Name"
            name="name"
            rules={[
                {
                required: true,
                message: 'Please input your name!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                required: true,
                type: "email",
                message: 'Please input your email!',
                },
            ]}
            >
            <Input/>
            </Form.Item>

            <Form.Item
            label="Number"
            name="number"
            >
            <Input/>
            </Form.Item>

            <Form.Item
            label="Message"
            name="message"
            rules={[
                {
                required: true,
                message: 'Please input a message!',
                },
            ]}
            >
            <TextArea rows={5}/>
            </Form.Item>

            <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
            style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
            <Flex align="center" justify="start" vertical={true} maxWidth="20px">
            {showMessage ?
            <>
            {success ?
            <>
            <Tooltip title="Thank you! A representative will contact you shortly" trigger="click" open>
              <CheckSquareOutlined style={{color: 'green', fontSize: '30px', marginRight: '5px'}}/>
            </Tooltip>
            </>
              :
            <>
            <Tooltip title="Something went wrong..." trigger="click" open>
              <CloseSquareOutlined style={{color: 'red', fontSize: '30px'}}/>
            </Tooltip>
            </>
            }
            </>
            :
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            }
            </Flex>
            </Form.Item>
        </Form>
        </Flex>
    </Modal>
    </>
  );
};

export default ContactModal;