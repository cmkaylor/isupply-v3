import React, { useState } from 'react';
import { ReadOutlined, HomeOutlined, ToolOutlined, ShopOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    label: (<Link to="/Home">Home</Link>),
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: (<Link to="/About">About</Link>),
    key: 'about',
    icon: <ReadOutlined />,
  },
  {
    label: 'Products',
    key: 'products',
    icon: <ShopOutlined />,
    children: [
      {
        label: (
          <a href="https://www.gardspecialists.com/" target="_blank" rel="noopener noreferrer">
          GARD Specialists Co Inc.
          </a>
        ),
        key: 'products1',
      },
      {
        label: (
          <a href="https://drive.google.com/drive/folders/1Zgmyt8rQFzY_43ksWanPJxC2U6ad6iUg?usp=sharing" target="_blank" rel="noopener noreferrer">
          Quarterly Catalog
          </a>
        ),
        key: 'products2',
      },
    ],
  },
  {
    label: 'Services',
    key: 'services',
    icon: <ToolOutlined />,
  },
];
const Navigation = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu style={{ position: 'relative', display: 'flex', justifyContent: 'center'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navigation;