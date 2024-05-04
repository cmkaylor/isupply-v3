import React, { useState } from 'react';
import { ReadOutlined, HomeOutlined, ToolOutlined, ShopOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    label: (<Link to="/Home">Home</Link>),
    key: 'mail',
    icon: <HomeOutlined />,
  },
  {
    label: (<Link to="/About">About</Link>),
    key: 'app',
    icon: <ReadOutlined />,
  },
  {
    label: 'Products',
    key: 'SubMenu',
    icon: <ShopOutlined />,
    children: [
      {
        label: (
          <a href="https://www.gardspecialists.com/" target="_blank" rel="noopener noreferrer">
          GARD Specialists Co Inc.
          </a>
        ),
        key: 'setting:1',
      },
      {
        label: (
          <a href="https://drive.google.com/file/d/1vcZW9ETMyvcJP6CjKjVGRhEIkplOhpQx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Quarterly Catalog
          </a>
        ),
        key: 'setting:2',
      },
    ],
  },
  {
    label: 'Services',
    key: 'app',
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